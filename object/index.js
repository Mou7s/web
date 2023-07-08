// 定义弹球计数变量
const para = document.querySelector("p");
let count = 0;
// 设置画布
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// 生成随机数的函数

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// 生成随机颜色值的函数

function randomColor() {
  const color =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
  return color;
}
// 定义 Shape 构造器

class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
  }
}
// 定义 Ball 构造器，继承自 Shape

class Ball extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
    super(x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
  }

  // 定义彩球绘制函数

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // 定义彩球更新函数

  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  // 定义碰撞检测函数

  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (this !== balls[j]) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size && balls[j].exists) {
          balls[j].color = this.color = randomColor();
        }
      }
    }
  }
}

class EvilCircle extends Shape {
  constructor(x, y, exists) {
    super(x, y, 20, 20, exists); // 继承 x, y, exists 并设定 velX 和 velY 为 20
    this.color = "white"; // 新增的 color 属性，默认为 'white'
    this.size = 10; // 新增的 size 属性，默认为 10
  }

  // 定义 EvilCircle 绘制方法

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // 定义 EvilCircle 的边缘检测（checkBounds）方法

  checkBounds() {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    }

    if (this.x - this.size <= 0) {
      this.x += this.size;
    }

    if (this.y + this.size >= height) {
      this.y -= this.size;
    }

    if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }

  // 定义 EvilCircle 控制设置（setControls）方法

  setControls() {
    window.onkeydown = (e) => {
      switch (e.key) {
        case "a":
        case "A":
        case "ArrowLeft":
          this.x -= this.velX;
          break;
        case "d":
        case "D":
        case "ArrowRight":
          this.x += this.velX;
          break;
        case "w":
        case "W":
        case "ArrowUp":
          this.y -= this.velY;
          break;
        case "s":
        case "S":
        case "ArrowDown":
          this.y += this.velY;
          break;
      }
    };
  }

  // 定义 EvilCircle 冲突检测函数
  collisionDetect() {
    for (let j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].exists = false;
          count--;
          para.textContent = "剩余彩球数：" + count;
        }
      }
    }
  }
}

// 定义一个数组，生成并保存所有的球，

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  let ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size
  );
  balls.push(ball);
  count++;
  para.textContent = "剩余彩球数：" + count;
}

// 定义一个循环来不停地播放

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
