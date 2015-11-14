/**
 * @license
 * abbr-touch <http://github.com/Tyriar/abbr-touch>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/abbr-touch/blob/master/LICENSE>
 */
var abbrTouch = (function () { // eslint-disable-line no-unused-vars
  'use strict';

  /**
   * Generates a touchtap event handler that calls the tap handler provided.
   * @param {function} handler The tap handler to call.
   * @returns {function}
   */
  function generateTouchtapHandler(handler) {
    return function (e) {
      handler(e.currentTarget, e.currentTarget.title, e.customData.touchX, e.customData.touchY);
    };
  }

  /**
   * The default lightweight tap handler.
   */
  function defaultOnTapHandler(target, title, touchX, touchY) { // eslint-disable-line no-unused-vars
    alert(title); // eslint-disable-line no-alert
  }

  /**
   * Attaches abbrTouch events on all abbr[title] elements within an element
   * @param {HTMLElement} elementScope The element containing abbr[title]
   * elements.
   * @param {function} customTapHandler (Optional) A custom touchtap handler to
   * be used when abbr[title] elements are touched.
   */
  function init(elementScope, customTapHandler) {
    if (!elementScope) {
      elementScope = document;
    }

    var tapHandler = customTapHandler || defaultOnTapHandler;

    var elements = elementScope.querySelectorAll('abbr[title]');
    var touchtapHandler = generateTouchtapHandler(tapHandler);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchtap', touchtapHandler);
    }
  }

  return init;
})();
