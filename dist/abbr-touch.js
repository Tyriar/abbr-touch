/*! abbr-touch.js | (c) 2014 Daniel Imms | github.com/Tyriar/abbr-touch.js/blob/master/LICENSE */

var abbrTouch = (function () {
  'use strict';

  function init () {
    var elements = document.querySelectorAll('abbr[title]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchtap', tap);
    }
  }

  function tap(e) {
    alert(e.target.title);
  }

  return init;
})();
