/**
 * @create {{user}}
 * @createTime {{date}}.
 */
var $ = require('jquery');
var Events = require('events');

var {{ firstChar name }} = function () {
  Events.call(this);
  return this;
};

{{ firstChar name }}.prototype = new Events();
{{ firstChar name }}.prototype.constructor = {{ firstChar name }};

{{ firstChar name }}.prototype.init = function (options) {

  return this;
};


module.exports = {{ firstChar name }};
