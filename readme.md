# PostHTML Plugin Boolean Attributes <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]
[![Standard Code Style][style]][style-url]

Doesn't set `=""` if set to `true`, If an array is specified, it will not set the value `['customeBooleanAttr']` for the specified attributes and when specifying `['!customeBooleanAttr']` in the array will exclude attributes.

Before:
``` html
  <script async></script>
```

After:
``` html
  <script async=""></script>
```

## Install

> npm i posthtml posthtml-boolean-attributes

## Usage

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const booleanAttributes = require('posthtml-boolean-attributes');

posthtml()
    .use(booleanAttributes({ /* options */ }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

## Options

#### `enable`

Type: `Boolean|Array<String>`  
Default: `true`  
Description: *Doesn't set `=""` if set to `true`, if an array is specified, it will not set the value `['customeBooleanAttr']` for the specified attributes and when specifying ['!customeBooleanAttr'] in the array will exclude attributes.*

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

[npm]: https://img.shields.io/npm/v/posthtml.svg
[npm-url]: https://npmjs.com/package/posthtml

[deps]: https://david-dm.org/posthtml/posthtml.svg
[deps-url]: https://david-dm.org/posthtml/posthtml

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.org/posthtml/posthtml.svg?branch=master
[build-badge]: https://travis-ci.org/posthtml/posthtml?branch=master

[cover]: https://coveralls.io/repos/posthtml/posthtml/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/posthtml/posthtml?branch=master
