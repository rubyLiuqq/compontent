/**
 * @create rubyliuqq
 * @createTime 2018-10-16T00:00:00+08:00.
 */
(function ($) {
  'use strict';

  $.dialog = function (el, options) {
    if (!(this instanceof $.dialog)) {
      return new $.dialog(el, options);
    }

    var self = this;
  };

  $.fn.dialog = function () {
    const self = this;
    const args = Array.prototype.slice.call(arguments);

  };
})(jQuery);
