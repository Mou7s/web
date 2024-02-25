const readline = require('readline');
//node实现输入两个整数 a,b，输出它们的和
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the first integer: ', (a) => {
  rl.question('Enter the second integer: ', (b) => {
    const sum = parseInt(a) + parseInt(b);
    console.log('The sum is: ' + sum);
    rl.close();
  });
});
