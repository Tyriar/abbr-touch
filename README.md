# abbr-touch

[![Build Status](https://api.travis-ci.org/Tyriar/abbr-touch.svg)](https://travis-ci.org/Tyriar/abbr-touch)
[![Code Climate](https://codeclimate.com/github/Tyriar/abbr-touch/badges/gpa.svg)](https://codeclimate.com/github/Tyriar/abbr-touch)

abbr-touch is a tiny JavaScript library that makes the title attribute of `<abbr>` element touch accessible. It does so by utilising [touchtap-event][3] to only expose the functionality to touch-enabled devices, a custom touch handler can then be used to display `<abbr>`'s content any way you wish.

[![Example usage: touching an <abbr> tag brings up a description](example.png)][1]


## Install

```bash
npm install --save abbr-touch
```


## Include

```html
<script src="node_modules/abbr-touch/abbr-touch.js"></script>
```


## Usage

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

A deeper example of usage can be found in [demo.html][2]. A live demo can be viewed on [Growing with the Web][4].


## See also

- [touchtap-event][3]
- [abbr-fill.js][1]



  [1]: https://github.com/Tyriar/abbr-fill.js
  [2]: https://github.com/Tyriar/abbr-touch.js/blob/master/demo.html
  [3]: https://github.com/Tyriar/touchtap-event
  [4]: http://www.growingwiththeweb.com/projects/abbr-touch/
