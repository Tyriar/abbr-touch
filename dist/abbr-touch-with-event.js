/*! touchtap-event.js | (c) 2014 Daniel Imms | github.com/Tyriar/touchtap-event.js/blob/master/LICENSE */

(function () {
  'use strict';

  var touchTapEvent;
  var isTapLength;
  var tapLengthTimeout;
  var startPosition   = { x: -1, y: -1 };
  var currentPosition = { x: -1, y: -1 };

  function init () {
    touchTapEvent = document.createEvent('CustomEvent');
    touchTapEvent.initEvent('touchtap', true, true);
    document.addEventListener('touchstart', touchstart);
    document.addEventListener('touchend', touchend);
    document.addEventListener('touchcancel', touchend);
    document.addEventListener('touchmove', touchmove);
  }

  function touchstart(e) {
    var pointerEvent = getPointerEvent(e);
    startPosition.x = pointerEvent.pageX;
    startPosition.y = pointerEvent.pageY;
    currentPosition.x = pointerEvent.pageX;
    currentPosition.y = pointerEvent.pageY;
    isTapLength = true;
    if (tapLengthTimeout) {
      clearTimeout(tapLengthTimeout);
    }
    tapLengthTimeout = setTimeout(function () {
      isTapLength = false;
    }, 200);
  }

  function touchend(e) {
    if (isTapLength &&
        approximatelyEqual(startPosition.x, currentPosition.x) &&
        approximatelyEqual(startPosition.y, currentPosition.y)) {
      touchTapEvent.customData = {
        touchX: currentPosition.x,
        touchY: currentPosition.y
      };
      e.target.dispatchEvent(touchTapEvent);
    }
  }

  function touchmove(e) {
    var pointerEvent = getPointerEvent(e);
    currentPosition.x = pointerEvent.pageX;
    currentPosition.y = pointerEvent.pageY;
  }

  function approximatelyEqual(a, b) {
    return Math.abs(a - b) < 2;
  }

  function getPointerEvent(e) {
    if (e.originalEvent && e.originalEvent.targetTouches) {
      return e.originalEvent.targetTouches[0];
    }
    if (e.targetTouches) {
      return e.targetTouches[0];
    }
    return e;
  }

  init();
})();

/*! abbr-touch.js | (c) 2014 Daniel Imms | github.com/Tyriar/abbr-touch.js/blob/master/LICENSE */

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
