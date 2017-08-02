describe('promisifyDOMSelector', () => {
  // create a dummy element and append it to the dom after some time
  const testEl = document.createElement('input')
  testEl.id = 'load-later'
  testEl.name = 'load-later'
  testEl.classList.add('load-later')
  setTimeout(() => document.body.appendChild(testEl), 500)

  it('should work with getElementById()', (done) => {
    const pGetElementById = promisifyDOMSelector(document.getElementById)

    pGetElementById('load-later')
      .then((el) => {
        assert.equal(el, testEl)
        done()
      })
  })

  it('should work with querySelector()', (done) => {
    const pQuerySelector = promisifyDOMSelector(document.querySelector)

    pQuerySelector('#load-later')
      .then((el) => {
        assert.equal(el, testEl)
        done()
      })
  })

  it('should work with querySelectorAll()', (done) => {
    const pQuerySelectorAll = promisifyDOMSelector(document.querySelectorAll)

    pQuerySelectorAll('.load-later')
      .then(([ el ]) => {
        assert.equal(el, testEl)
        done()
      })
  })

  it('should work with getElementsByClassName()', (done) => {
    const pGetElementsByClassName = promisifyDOMSelector(document.getElementsByClassName)

    pGetElementsByClassName('load-later')
      .then(([ el ]) => {
        assert.equal(el, testEl)
        done()
      })
  })

  it('should work with getElementsByTagName()', (done) => {
    const pGetElementsByTagName = promisifyDOMSelector(document.getElementsByTagName)

    pGetElementsByTagName('input')
      .then(([ el ]) => {
        assert.equal(el, testEl)
        done()
      })
  })

  it('should work with getElementsByName()', (done) => {
    const pGetElementsByName = promisifyDOMSelector(document.getElementsByName)

    pGetElementsByName('load-later')
      .then(([ el ]) => {
        assert.equal(el, testEl)
        done()
      })
  })

  // it('should work with querySelector() and a different context', (done) => {
  //   const pQuerySelector = promisifyDOMSelector(document.querySelector, document.body)
  //
  //   pQuerySelector('#load-later')
  //     .then((el) => {
  //       assert.equal(el, testEl)
  //       done()
  //     })
  // })
})
