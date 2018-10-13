/**
 * @create rubyliuqq
 * @createTime 2018-10-09T00:00:00+08:00.
 */
(function ($) {
  'use strict';

  $.pagination = function (el, options) {
    if (!(this instanceof $.pagination)) {
      return new $.pagination(el, options);
    }

    var self = this;
  };

  $.fn.pagination = function () {
    const self = this;
    const args = Array.prototype.slice.call(arguments);

  };
})(jQuery);
