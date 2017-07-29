export function isArrayLike(item) {
  return Array.isArray(item) || item instanceof NodeList || item instanceof HTMLCollection
}
