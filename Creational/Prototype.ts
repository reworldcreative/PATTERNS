class Rose {
  constructor(
    public type: string,
    public color: string,
    public height: number
  ) {}

  clone() {
    return new Rose(this.type, this.color, this.height);
  }

  getInfo(): string {
    return `A ${this.color} ${this.type} rose, with height ${this.height}`;
  }
}

const RosePrototipe = new Rose("Patio", "red", 50);

const rose1 = RosePrototipe.clone();
const rose2 = RosePrototipe.clone();
rose2.color = "white";
const rose3 = RosePrototipe.clone();
rose3.type = "Silveston";
rose3.height = 60;

console.log(rose1.getInfo());
console.log(rose2.getInfo());
console.log(rose3.getInfo());
