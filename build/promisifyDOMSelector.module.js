function isArrayLike(e){return Array.isArray(e)||e instanceof NodeList||e instanceof HTMLCollection}function promisifyDOMSelector(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return function(n){return new Promise(function(t){var i=e.call(r,n);if(i||isArrayLike(i)&&i.length>0)return t(i);new MutationObserver(function(i,o){var c=e.call(r,n);!c||isArrayLike(c)&&0===c.length||(o.disconnect(),t(c))}).observe(r===document?document.body:r,{childList:!0,subtree:!0})})}}export default promisifyDOMSelector;
