const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

// Configure readline interface for prompt input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate poster based on user input
function generatePoster(title, subtitle, textColor, bgColor) {
  console.log(chalk.bgHex(bgColor).hex(textColor)(figlet.textSync(title)));
  console.log(chalk.hex(textColor)(subtitle));
}

// Prompt user for poster details
rl.question('Enter poster title: ', (title) => {
  rl.question('Enter poster subtitle: ', (subtitle) => {
    rl.question('Enter text color (hex code): ', (textColor) => {
      rl.question('Enter background color (hex code): ', (bgColor) => {
        generatePoster(title, subtitle, textColor, bgColor);
        rl.close();
      });
    });
  });
});
