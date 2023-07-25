class Employee {
  name: string;
  age: number;
  empNo: number;

  constructor(name: string, age: number, empNo: number) {
    this.name = name;
    this.age = age;
    this.empNo = empNo;
  }

  signIn() {
    console.log("siginin");
  }

  askLeave() {
    console.log("askLeave");
  }
}

// 创建 Employee 类的实例
const employee1 = new Employee("John", 30, 123456);

// 调用对象的方法
employee1.signIn(); // 输出：John signin
employee1.askLeave(); // 输出：John askLeave
