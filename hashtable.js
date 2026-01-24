class HashTable {
  constructor() {
    this.table = {};
  }

  // 添加键值对
  add(key, value) {
    this.table[key] = value;
  }

  // 根据键获取值
  get(key) {
    return this.table[key];
  }

  // 删除键值对
  remove(key) {
    delete this.table[key];
  }

  // 检查键是否存在
  contains(key) {
    return this.table.hasOwnProperty(key);
  }

  // 获取所有键
  getKeys() {
    return Object.keys(this.table);
  }

  // 获取所有值
  getValues() {
    return Object.values(this.table);
  }

  // 获取哈希表的大小
  getSize() {
    return Object.keys(this.table).length;
  }

  // 清空哈希表
  clear() {
    this.table = {};
  }
}

// BEGIN: Test the HashTable class
const hashtable = new HashTable();
hashtable.add('name', 'John');
hashtable.add('age', 25);
console.log(hashtable.get('name')); // Output: John
console.log(hashtable.get('age')); // Output: 25
console.log(hashtable.contains('name')); // Output: true
console.log(hashtable.contains('city')); // Output: false
console.log(hashtable.getKeys()); // Output: ["name", "age"]
console.log(hashtable.getValues()); // Output: ["John", 25]
console.log(hashtable.getSize()); // Output: 2
hashtable.remove('age');
console.log(hashtable.getSize()); // Output: 1
hashtable.clear();
console.log(hashtable.getSize()); // Output: 0
// END: Test the HashTable class
