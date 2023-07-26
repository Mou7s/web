class Car {
  private speed: number;
  readonly make: string;

  constructor(make: string) {
    this.speed = 0;
    this.make = make;
  }

  get currentSpeed() {
    return `speed is ${this.speed}`;
  }

  private setSpeed(delta: number) {
    this.speed += delta;
  }

  public accelerate(delta: number) {
    this.setSpeed(delta);
  }

  public decelerate(delta: number) {
    this.setSpeed(-delta);
  }
}
const car: Car = new Car("Focus");

console.log(car.make);
console.log(car.currentSpeed);
car.accelerate(10);
console.log(car.currentSpeed);
