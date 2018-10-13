const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const extend = require('extend');

const i18n = require('./i18n');

// 配置说明
module.exports.i18n = i18n;

// 获取当前存在的模块列表
module.exports.moduleList = () => {
  const fileList = fs.readdirSync(process.cwd());
  const modules = [];
  fileList.forEach((val) => {
    if (fs.statSync(`${process.cwd()}/${val}`).isDirectory()) modules.push(val);
  });
  return modules;
};

// 检测文件是否存在
module.exports.isConform = (val) => {
  if (this.moduleList().indexOf(val) !== -1) {
    return false
  } else {
    return true;
  }
};

// tips
module.exports.tips = {
  success: (msg) => console.log(chalk.green.bold(`\n 🐵 ${msg}\n`)),
  fail: (msg) => console.log(chalk.red.bold(`\n 🙈 ${msg}\n`)),
  info: (msg) => console.log(chalk.yellow.bold(`\n 🙉 ${msg}\n`))
};

module.exports.promptQuestion = {
  basic: {
    moduleCHName: {
      type: 'input',
      name: 'moduleCHName',
      message: i18n.config.create.properties.moduleCHName
    },
    moduleDesc: {
      type: 'input',
      name: 'moduleDesc',
      message: i18n.config.create.properties.moduleDesc
    },
    sure: {
      type: 'confirm',
      name: 'sure',
      message: i18n.config.create.properties.sure,
      default: true
    }
  }
};
