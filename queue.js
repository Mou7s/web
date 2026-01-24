class Queue {
  constructor() {
    this.items = [];
  }

  // 入队
  enqueue(element) {
    this.items.push(element);
  }

  // 出队
  dequeue() {
    if (this.isEmpty()) {
      return '队列为空';
    }
    return this.items.shift();
  }

  // 返回队首元素
  front() {
    if (this.isEmpty()) {
      return '队列为空';
    }
    return this.items[0];
  }

  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列的大小
  size() {
    return this.items.length;
  }
}
