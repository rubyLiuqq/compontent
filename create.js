'use strict'
// const exec = require('child-process').exec;
const path = require('path');
const Khaos = require('khaos');  // 模板创建一个新项目
const inquirer = require('inquirer');

const { promptQuestion } = require('./config');
const template = path.join(__dirname, '../template');

module.exports = (arg) => {
  inquirer.prompt([
    promptQuestion.basic.moduleCHName,
    promptQuestion.basic.moduleDesc,
    promptQuestion.basic.sure
  ]).then((answers) => {
    if (answers.sure) {
      // 创建文件
    }
  });

}

// 文件生成
function generateDir(dir, dest) {
  console('generateDir', dir, dest);
}
