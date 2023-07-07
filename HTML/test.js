class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  // New method to calculate and log the perimeter of the shape
  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`The perimeter of ${this.name} is ${perimeter}`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square", 4, sideLength);
  }

  calcArea() {
    const Area = this.sideLength * this.sideLength;
    console.log(`Area is ${Area}`);
  }
}

const a1 = new Square(4);
a1.calcArea();
a1.calcPerimeter();
