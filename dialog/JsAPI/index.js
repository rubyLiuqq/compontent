/**
 * @create rubyliuqq
 * @createTime 2018-10-16T00:00:00+08:00.
 *
 * Dialog: message | dialog | tips
 */
var $ = require('jquery');
var Events = require('events');

var Dialog = function () {
  this._events = {};
  Events.apply(this, arguments);
  return arguments.length ? this.init.apply(this, arguments) : this;
};

Dialog.prototype = new Events();
Dialog.prototype.constructor = Dialog;

Dialog.prototype.defaultOptions = {
  type: 'dialog',
  modal: false,     // 是否含有遮罩层
  customClass: '',    // Dialog 的自定义类名
  closeOnClickModal: true,  // 通过点击 modal 关闭
  hasClose: true,
  title: '',
  content: '',
  buttons: []
}

Dialog.prototype.init = function (options) {
  const that = this;
  let buttons = {};

  return this;
};


module.exports = Dialog;
