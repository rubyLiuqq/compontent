'use strict'
const co = require('co');
const path = require('path');
const Khaos = require('khaos');
const inquirer = require('inquirer');

const { promptQuestion, tips, i18n, isConform } = require('./config');
const template = path.join(__dirname, './template');
const cwd = process.cwd();


module.exports = (name) => {

  // 检测文件是否存在
  if (isConform(name)) {
    inquirer.prompt([
      promptQuestion.basic.moduleCHName,
      promptQuestion.basic.moduleDesc,
      promptQuestion.basic.sure
    ]).then((answers) => {
      co(function* () {
        const khaos = new Khaos(template);

        // 大写第一个字母
        khaos.helpers({
          'firstChar': function (value) {
            const arr = value.split('');
            arr[0] = arr[0].toUpperCase();
            return arr.join('');
          }
        });
        const files = yield khaos.read();

        if (answers.sure) {
          answers.name = name;
          // answers.user = process.env.LOGNAME;
          answers.user = 'rubyliuqq';
          answers.date = new Date();
          khaos.write(cwd, files, answers, (err) => {
            if (err) {
              tips.success(i18n.config.create.fail);
            } else {
              tips.success(i18n.config.create.success);
            }
          });
        }
      });
    });
  } else {
    tips.fail(i18n.errors.dirExists);
  }
}
