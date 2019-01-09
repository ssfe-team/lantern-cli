#!/usr/bin/env node

const program = require('commander')
const ora = require('ora')
const download = require('download-git-repo')

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

const officialTemplate = 'ssfe-team/' + templateName

downloadAndCreate(officialTemplate)

/**
 * Download a generate from a template repo.
 *
 * @param {String} template
 */
function downloadAndCreate(template) {
  const wait = ora('模板下载中...');
  wait.start();
  download(template, projectName, err => {
    wait.stop();
    if(err) {
      console.log('下载失败');
    } else {
      console.log('下载成功');
    }
  })
}