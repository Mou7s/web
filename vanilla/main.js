// 读取输入
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  // 提取测试用例数量
  const t = parseInt(input[0]);

  for (let i = 1; i <= t; i++) {
    // 提取每对字符串
    let [a, b] = input[i].split(' ');

    // 交换第一个字符
    let newA = b[0] + a.slice(1);
    let newB = a[0] + b.slice(1);

    // 输出结果
    console.log(newA + ' ' + newB);
  }
});

