function promisifyDOMSelector(selector, context = document) {
  return (queryString) => {
    return new Promise((resolve) => {
      // check if there is already the element, if yes resolve and return
      const targetNode = selector.call(context, queryString)
      if (targetNode) { // TODO  support querySelectorAll
        return resolve(targetNode)
      }

      // else watch for the dom element changes
      const attemptSelection = new MutationObserver((mutations, observer) => {
        const targetNode = selector.call(context, queryString)
        if (!targetNode)
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
