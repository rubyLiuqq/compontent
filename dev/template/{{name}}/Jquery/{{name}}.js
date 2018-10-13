/**
 * @create {{user}}
 * @createTime {{date}}.
 */
(function ($) {
  'use strict';

  $.{{ name }} = function (el, options) {
    if (!(this instanceof $.{{ name }})) {
      return new $.{{ name }}(el, options);
    }

    var self = this;
  };

  $.fn.{{ name }} = function () {
    const self = this;
    const args = Array.prototype.slice.call(arguments);

  };
})(jQuery);
