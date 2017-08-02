import { isArrayLike } from './utils'

export default function promisifyDOMSelector(selector, context = document) {
  return (queryString) => {
    return new Promise((resolve, reject) => {
      if (context !== document && (selector === document.getElementById || selector === document.getElementsByName)) {
        return reject(`Cannot call ${selector.name}() with another context besides document.`)
      }

      // if we're calling with the context of an element,
      // get the element method instead of the document one
      // this prevents errors from happening
      if (context !== document) {
        selector = Element.prototype[selector.name]
      }

      // check if there is already the element, if yes resolve and return
      const targetNode = selector.call(context, queryString)
      if (targetNode || (isArrayLike(targetNode) && targetNode.length > 0)) {
        return resolve(targetNode)
      }

      // else watch for the dom element changes
      const attemptSelection = new MutationObserver((mutations, observer) => {
        const targetNode = selector.call(context, queryString)
        if (!targetNode || (isArrayLike(targetNode) && targetNode.length === 0))
          return

        observer.disconnect()
        resolve(targetNode)
      })
      attemptSelection.observe(context === document ? document.body : context, {
        childList: true,
        subtree: true,
      })
    })
  }
}
