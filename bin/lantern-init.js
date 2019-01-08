#!/usr/bin/env node

const program = require('commander')
const ora = require('ora')
const download = require('download-git-repo')
const templateUrlArr = ['binnull/lantern-simple-template']
var  templateUrl

program
  .usage('<template-name> <project-name>')

// 重写help
program.on('--help', () => {
  console.log();
  console.log();
  console.log('  乞丐版要什么帮助');
  console.log();
})

program.parse(process.argv);

const templateName = program.args[0];
const projectName = program.args[1];

templateUrl = templateUrlArr[0];

if(templateName != 'webpack-simple') {
  console.log('  没有当前模板')
} else {
  downloadAndCreate();
}

function downloadAndCreate() {
  const wait = ora('模板下载中...');
  wait.start();
  download(templateUrl, projectName, err => {
    wait.stop();
    if(err) {
      console.log('下载失败');
    } else {
      console.log('下载成功');
    }
  })
}