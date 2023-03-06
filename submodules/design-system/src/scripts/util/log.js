const chalk = require('chalk');

module.exports = {
  debug: (message) => console.log(chalk.gray(message)),
  error: (message) => console.log(chalk.red(message)),
  fatal: (message) => console.log(chalk.bgRed.black(message)),
  info: (message) => console.log(message),
  success: (message) => console.log(chalk.green(message)),
};