class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`我是${this.name}。`);
  }
}

class Professor extends Person {
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  grade(paper) {
    const score = Math.random() * 100; // 生成一个随机分数
    console.log(`给${paper}评分：${score}`);
  }

  introduceSelf() {
    console.log(`我是${this.name}，我是你们的${this.teaches}老师。`);
  }
}

class Student extends Person {
  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    console.log(
      `Hello, my name is ${this.name} and I am in year ${this.year}.`
    );
  }

  canStudyArchery() {
    return this.year > 1;
  }
}

// 示例用法
const professor = new Professor("张老师", "数学");
professor.introduceSelf(); // 输出："我是张老师，我是你们的数学老师。"
professor.grade("论文"); // 调用评分逻辑

const student = new Student("小明", 2);
student.introduceSelf(); // 输出："Hello, my name is 小明 and I am in year 2."
console.log(student.canStudyArchery()); // 输出：true
