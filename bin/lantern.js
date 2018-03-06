#!/usr/bin/env node

require('commander')
  .version(require('../package').version)
  .usage('暂时只有唯一指令: lantern init <template-name> <project-name>')
  .command('init', 'create a new project for lantern')
  .parse(process.argv)

console.log('dev test');