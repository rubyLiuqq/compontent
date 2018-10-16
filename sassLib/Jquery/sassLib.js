/**
 * @create rubyliuqq
 * @createTime 2018-10-16T00:00:00+08:00.
 */
(function ($) {
  'use strict';

  $.sassLib = function (el, options) {
    if (!(this instanceof $.sassLib)) {
      return new $.sassLib(el, options);
    }

    var self = this;
  };

  $.fn.sassLib = function () {
    const self = this;
    const args = Array.prototype.slice.call(arguments);

  };
})(jQuery);
