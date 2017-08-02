describe('promisifyDOMSelector', () => {
  // create a dumy element and append it to the dom after some time
  const testEl = document.createElement('div')
  testEl.id = 'load-later'
  setTimeout(() => document.body.appendChild(testEl), 500)

  it('should work with getElementById()', (done) => {
    const pGetElementById = promisifyDOMSelector(document.getElementById)

    pGetElementById('load-later')
      .then((el) => {
        assert.equal(el, testEl)
        done()
      })
  })
})
