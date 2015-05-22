# abbr-touch [![NPM version](http://img.shields.io/npm/v/abbr-touch.svg?style=flat)](https://www.npmjs.org/package/abbr-touch)

[![Build Status](http://img.shields.io/travis/Tyriar/abbr-touch.svg?style=flat)](https://travis-ci.org/Tyriar/abbr-touch)
[![Code Climate](http://img.shields.io/codeclimate/github/Tyriar/abbr-touch.svg?style=flat)](https://codeclimate.com/github/Tyriar/abbr-touch)

A library to make <abbr> element title attributes touch accessible.


## Installing

```bash
# via bower
bower install --save abbr-touch

# via NPM
npm install --save abbr-touch
```


## Including

```html
<script src="dist/abbr-touch.js"></script>
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

- [touchtap-event][3]
- [abbr-fill.js][1]



  [1]: https://github.com/Tyriar/abbr-fill.js
  [2]: https://github.com/Tyriar/abbr-touch.js/blob/master/demo.html
  [3]: https://github.com/Tyriar/touchtap-event
