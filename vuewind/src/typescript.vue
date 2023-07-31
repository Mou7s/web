<script setup lang="ts">
//interface 定义对象的结构和类型
interface Person {
  name: string;
  age: number;
  email?: string; // 可选属性
  [key: string]: any; // 索引签名，允许添加其他任意属性
  readonly id?: number; // person1.id = 2;无法为“id”赋值，因为它是只读属性。ts(2540)
}

//接口继承
interface childPerson extends Person {
  game: string;
}

const person1: Person = {
  name: 'Alice',
  age: 30,
  id: 1,
};

const person2: Person = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com',
  occupation: 'Engineer', // 可以添加其他属性
};

const person3: childPerson = {
  name: 'mou7s',
  age: 20,
  game: 'starfield',
};

//函数以及默认参数
const add = (a: number = 42, b: number = 0): number => {
  return a + b;
};
</script>

<template>
  <div class="grid place-content-center min-h-screen">
    <p>{{ person1 }}</p>
    <p>{{ person2 }}</p>
    <p>{{ person3 }}</p>
    {{ add() }}
  </div>
</template>
