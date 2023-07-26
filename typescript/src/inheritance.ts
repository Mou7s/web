class Button {
  public name: string;
  protected shape: string = "rectanglar";
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
  private href: string;

  constructor(name: string, href: string) {
    super(name);
    this.href = href;
  }
  public render() {
    console.log(`<a href="${this.href}" shape=${this.shape}>${this.name}</a>`);
  }
}

const link = new Link("click me to visit", "https://www.google.com");

link.render();
