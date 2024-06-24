// 初始化参数
let n = 1;
let Vf = 10000;
let Vd = 500;

// 循环直到 Vd 超过 Vf
while (Vd <= Vf) {
  n += 1;
  Vf += 5000;
  Vd *= 2;
}

// 输出结果
console.log(n, Vf, Vd);
