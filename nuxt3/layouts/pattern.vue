<template>
  <p>pattern</p>
  <p></p>
</template>

<script setup>
class Product {
  constructor() {
    // 抽象方法
    throw new Error('抽象方法不能调用');
  }
  doSomething() {
    console.log('Product.doSomething()');
  }
}

class ConcreteProductA extends Product {
  constructor() {
    super();
    console.log('ConcreteProductA.constructor()');
  }

  doSomething() {
    super.doSomething();
    console.log('ConcreteProductA.doSomething()');
  }
}

class ConcreteProductB extends Product {
  constructor() {
    super();
    console.log('ConcreteProductB.constructor()');
  }

  doSomething() {
    super.doSomething();
    console.log('ConcreteProductB.doSomething()');
  }
}

class Factory {
  // 工厂方法
  createProduct(type) {
    switch (type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error('无效的产品类型');
    }
  }
}

const factory = new Factory();

const productA = factory.createProduct('A');
productA.doSomething();

const productB = factory.createProduct('B');
productB.doSomething();
</script>
