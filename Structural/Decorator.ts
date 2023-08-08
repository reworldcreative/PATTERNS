class Coffee {
  price: number;

  constructor() {
    this.price = 5;
  }

  cost(): number {
    return this.price;
  }

  description(): string {
    return "Simple Coffee";
  }
}

class Topping extends Coffee {
  coffee: Coffee;
  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }
}

class Milk extends Topping {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class Sugar extends Topping {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

let latte: Coffee = new Coffee();
console.log(latte.description(), latte.cost(), "$");

latte = new Milk(latte);
console.log(latte.description(), latte.cost(), "$");

latte = new Sugar(latte);
console.log(latte.description(), latte.cost(), "$");
