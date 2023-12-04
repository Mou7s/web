class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈
  push(element) {
    this.items.push(element);
  }

  // 出栈
  pop() {
    if (this.isEmpty()) {
      return '栈为空';
    }
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    if (this.isEmpty()) {
      return '栈为空';
    }
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }
}

// 使用示例
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 输出 3
console.log(stack.peek()); // 输出 2
console.log(stack.isEmpty()); // 输出 false
console.log(stack.size()); // 输出 2
stack.clear();
console.log(stack.isEmpty()); // 输出 true
