#!/usr/bin/env node
/* eslint-env node */

const chalk = require('chalk');
// const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const childProcess = require('child_process');
const path = require('path');

function banner(banner) {
  console.log(chalk.yellowBright(figlet.textSync(banner, {
    font: 'Doom',
    horizontalLayout: 'fitted'
  })));
}

// function queryParams() {
//   const qs = [
//     {
//       name: 'type',
//       type: 'list',
//       message: 'Seleccióne que tipo de configuración desea.',
//       choices: [
//         'Frontend',
//         'Backend'
//       ]
//     },
//   ];
//   return inquirer.prompt(qs);
// }

(async function () {
  banner('Front Back');
  // await queryParams();
})();


let yarn = false;

try {
  if (fs.existsSync('yarn.lock')) {
    yarn = true;
  }
} catch (err) {
  console.log('Unable to check for yarn.lock');
}

// stylelint stylelint-config-standard

const packages =
  'eslint prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged eslint-config-airbnb-base eslint-plugin-import eslint-plugin-node eslint-config-franqsanz';

// Install packages
if (yarn) {
  childProcess.execSync(`yarn add ${packages} -D`, { stdio: 'inherit' });
} else {
  childProcess.execSync(`npm install ${packages} -D`, { stdio: 'inherit' });
}

// Frontend
// fs.copyFileSync(path.join(__dirname, './frontend/.eslintrc.js'), '.eslintrc.js');
// fs.copyFileSync(path.join(__dirname, './frontend/.stylelintrc.json'), '.stylelintrc.json');
// fs.copyFileSync(path.join(__dirname, './frontend/.huskyrc'), '.huskyrc');
// fs.copyFileSync(path.join(__dirname, './frontend/.lintstagedrc'), '.lintstagedrc');
// fs.copyFileSync(path.join(__dirname, './frontend/.prettierrc'), '.prettierrc');

// Backend
fs.copyFileSync(path.join(__dirname, '../backend/.eslintrc.js'), '.eslintrc.js');
fs.copyFileSync(path.join(__dirname, '../backend/.huskyrc'), '.huskyrc');
fs.copyFileSync(path.join(__dirname, '../backend/.lintstagedrc'), '.lintstagedrc');
fs.copyFileSync(path.join(__dirname, '../backend/.prettierrc'), '.prettierrc');