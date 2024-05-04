const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入一个字符串: ', (answer) => {
  console.log(`你输入的字符串是: ${answer}`);
  rl.close();
});