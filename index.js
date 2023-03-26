const http = require('http');
const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Configure readline interface for prompt input/output
  const rl = readline.createInterface({
    input: req,
    output: res
  });

  // Generate poster based on user input
  function generatePoster(title, subtitle, textColor, bgColor) {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<pre>${chalk.bgHex(bgColor).hex(textColor)(figlet.textSync(title))}\n`);
    res.write(`${chalk.hex(textColor)(subtitle)}</pre>`);
    res.end();
  }

  // Prompt user for poster details
  res.statusCode = 200;
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
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
