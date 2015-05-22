# abbr-touch.js [![NPM version](http://img.shields.io/npm/v/abbr-touch.js.svg?style=flat)](https://www.npmjs.org/package/abbr-touch.js)

[![Build Status](http://img.shields.io/travis/Tyriar/abbr-touch.js.svg?style=flat)](https://travis-ci.org/Tyriar/abbr-touch.js)
[![Code Climate](http://img.shields.io/codeclimate/github/Tyriar/abbr-touch.js.svg?style=flat)](https://codeclimate.com/github/Tyriar/abbr-touch.js)

A JavaScript library that makes `<abbr>` element `title` attributes touch accessible.


## Installing

```bash
# via bower
bower install --save abbr-touch.js

# via NPM
npm install --save abbr-touch.js
```


## Including

```html
<script src="dist/abbr-touch.min.js"></script>
```


## Usage

See [demo.html][2] for a deeper example.

```javascript
// default handler on document (alert)
abbrTouch();

// default handler, apply to descendants of #some-element
abbrTouch(document.querySelector('#some-element'));

// custom handler, apply to descendants of #some-element
abbrTouch(document.querySelector('#some-element'), myHandler);

function myHandler(target, title, touchX, touchY) {
  console.log(target);
  console.log(title);
  console.log(touchX);
  console.log(touchY);
}
```


## See also

- [touchtap-event.js][3]
- [abbr-fill.js][1]



  [1]: https://github.com/Tyriar/abbr-fill.js
  [2]: https://github.com/Tyriar/abbr-touch.js/blob/master/demo.html
  [3]: https://github.com/Tyriar/touchtap-event.js
