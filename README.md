# promisify-dom-selector [![Build Status](https://travis-ci.org/marcofugaro/promisify-dom-selector.svg?branch=master)](https://travis-ci.org/marcofugaro/promisify-dom-selector)

Promisify any DOM selector so that it returns a promise which resolves when the element appears in the DOM. If the element is already present, it will resolve immediately.


## Install

```js
npm install promisify-dom-selector
// or
yarn add promisify-dom-selector
```


## Usage

```js
const promisifyDOMSelector = require('promisify-dom-selector')

// works also with querySelector, querySelectorAll, getElementsByClassName and so on..
const pGetElementById = promisifyDOMSelector(document.getElementById)

pGetElementById('loaded-later')
  .then((el) => {
    // ...
  })

// or you can use it with async/await
async () => {
  const asyncLoadedEl = await pGetElementById('loaded-later')
  // ...
}
```


## API

### promisifyDomSelector(selector, [context])

#### selector

Type: `Function`

The selector you want to promisify, available options are: `getElementById`, `querySelector`, `querySelectorAll`, `getElementsByClassName`, `getElementsByTagName`, `getElementsByName`.

#### context

Type: `Object`<br>
Default: `document`

The context from which the selector method will be called, if specified it will watch for changes only that container and apply the selector method to that container.

**NOTE**: you can't use a custom context with `getElementById` and `getElementsByName` since those can be called only within the document context.

## FAQ

#### Is it safe to use it in production?
Yes it is. This library uses Mutation Observers which are supported by default in every modern browser:

[![](http://i.imgur.com/h7w14kU.png)](http://caniuse.com/#feat=mutationobserver)

## License

MIT © [Marco Fugaro](http://marcofugaro.it)
