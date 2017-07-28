# promisify-dom-selector [![Build Status](https://travis-ci.org/marcofugaro/promisify-dom-selector.svg?branch=master)](https://travis-ci.org/marcofugaro/promisify-dom-selector)

> Promisify any DOM selector so that it returns a promise which resolves when the element appears in the DOM


## Install

```
npm install promisify-dom-selector
```


## Usage

```js
const promisifyDOMSelector = require('promisify-dom-selector')

// works also with querySelector, querySelectorAll, getElementsByClassName and so on..
const pGetElementById = promisifyDOMSelector(document.getElementById)

pGetElementById('load-later')
  .then((el) => {
    // ...
  })

// or you can use it with async/await
async () => {
  const asyncLoadedEl = await pGetElementById('load-later')
  // ...
}
```


## API

### promisifyDomSelector(selector, [context])

#### selector

Type: `Function`

Lorem ipsum.

#### context

##### foo

Type: `Function`<br>
Default: `document`

Lorem ipsum.


## FAQ

#### Is it safe to use it in produciton?
Yes it is.. This package uses Mutation Observers

## License

MIT © [Marco Fugaro](http://marcofugaro.it)
