const test = require('ava')
const pkg = require('../package.json')
const promisifyDOMSelector = require(`../${pkg.main}`)

const testEl = document.createElement('div')
testEl.id = 'load-later'
setTimeout(() => {
  document.body.appendChild(testEl)
}, 500)

test('it should work with getElementById()', async t => {
  const pGetElementById = promisifyDOMSelector(document.getElementById)
  const asyncLoadedEl = await pGetElementById('load-later')
  t.deepEqual(asyncLoadedEl, testEl)
})
