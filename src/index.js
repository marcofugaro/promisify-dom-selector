function isArrayLike(item) {
  return Array.isArray(item) || item instanceof NodeList || item instanceof HTMLCollection
}

function promisifyDOMSelector(selector, context = document) {
  return (queryString) => {
    return new Promise((resolve) => {
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

module.exports = promisifyDOMSelector
