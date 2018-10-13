/**
 * @create rubyliuqq
 * @createTime 2018-10-09T00:00:00+08:00.
 */
var $ = require('jquery');
var Pagination = require('../');

var $pagination = $('#pagination');

var pagination = new Pagination({
  selector: $pagination,
  totalCount: 1000
});

pagination.on('click', function (options) {
  // this.callPage({
  //   current: options.current,
  //   totalNum: options.totalNum
  // });
});
