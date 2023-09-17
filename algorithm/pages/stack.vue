<script setup>
class Stack {
  constructor() {
    this.items = []; // 使用数组来存储栈中的元素
  }

  // 添加元素到栈顶
  push(item) {
    this.items.push(item);
  }

  // 移除并返回栈顶元素
  pop() {
    if (this.isEmpty()) {
      return null; // 如果栈为空，返回null
    }
    return this.items.pop();
  }

  // 返回栈顶元素但不移除
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈中的元素个数
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }
}

// 创建一个栈实例
const stack = new Stack();

// 向栈中添加元素
stack.push(1);
stack.push(2);
stack.push(3);

// 查看栈顶元素
console.log('栈顶元素:', stack.peek()); // 输出: 3

// 移除并返回栈顶元素
console.log('弹出栈顶元素:', stack.pop()); // 输出: 3

// 查看栈的大小
console.log('栈大小:', stack.size()); // 输出: 2

// 清空栈
stack.clear();
console.log('栈是否为空:', stack.isEmpty()); // 输出: true
</script>

<template>
  {{ stack }}
</template>
