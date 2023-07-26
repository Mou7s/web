class Button {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public onClick() {
    console.log(`click...`);
  }

  public render() {
    console.log(`<Button>${this.name}</Button>`);
  }
}

class Link extends Button {
  public render() {
    console.log(`<a href="">${this.name}</a>`);
  }
}

const link = new Link("click me to visit");

link.onClick();

link.render();
