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
    // 评分逻辑
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
    console.log(`我是${this.name}，我是${this.year}年级的学生。`);
  }
}

// 示例用法
walsh = new Professor("沃尔什", "心理学");
walsh.introduceSelf(); // '我是沃尔什，我是你们的心理学老师。'

summers = new Student("萨摩斯", 1);
summers.introduceSelf(); // '我是萨摩斯，我是一年级的学生。'
