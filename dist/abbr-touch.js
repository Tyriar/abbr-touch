/*!
 * abbr-touch.js
 * http://github.com/Tyriar/abbr-touch.js
 *
 * Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 * Released under the MIT license
 * http://github.com/Tyriar/abbr-touch.js/blob/master/LICENSE
 */

var abbrTouch = (function () {
  'use strict';

  function init(elementScope, customTapHandler) {
    if (!elementScope) {
      elementScope = document;
    }

    var tapHandler = defaultOnTapHandler;
    if (customTapHandler) {
      tapHandler = customTapHandler;
    }

    var elements = elementScope.querySelectorAll('abbr[title]');
    var touchtapHandler = generateTouchtapHandler(tapHandler);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchtap', touchtapHandler);
    }
  }

  function generateTouchtapHandler(handler) {
    return (function (e) {
      handler(e.target, e.target.title, e.customData.touchX, e.customData.touchY);
    });
  }

  function defaultOnTapHandler(target, title, touchX, touchY) {
    alert(title);
  }

  return init;
})();
