/**
 * @create rubyliuqq
 * @createTime 2018-10-09T00:00:00+08:00.
 */
var $ = require('jquery');
var Events = require('events');

var Pagination = function () {
  Events.call(this);
  return this;
};

Pagination.prototype = new Events();
Pagination.prototype.constructor = Pagination;

Pagination.prototype.DefaultOptions = {
  pageNo: 1, // 初始页码
  totalPages: 1, //总页数
  totalCount: 0, // 条目总数
  pageSize: 10,  // 条目数目
  slideSpeed: 0, // 缓动速度
  jump: false, // 支持跳转
  callback: function () {} // 回调函数
};

Pagination.prototype.DOM = {
  big: '<div class="pagger-box"><div>',
  pageFirst: '<li class="turnPage first-page">首页</button>',
  pageLast: '<li class="last-page ">尾页</button>',
  leftBtn: '<li class="turnPage pre-page">上一页</button>',
  rightBtn: '<li class="turnPage next-page">下一页</button>',
  inputJump: '<input type="text" placeholder="1" class="jump-text jumpText"><button type="button" class="jump-button" >跳转</button>',
  jumpBtn: '<button type="button" class="last-page ">尾页</button>',
  totalPa: '<p class="total-pages">共&nbsp;&nbsp;页</p>',
  totalCo: '<p class="total-count"></p></div>',
};

Pagination.prototype.init = function (options) {
  this.options = $.extend({}, this.DefaultOptions, options);
  console.log(this.options);

  return this;
};


module.exports = Pagination;
