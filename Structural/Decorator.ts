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
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return `${super.description()}, Milk`;
    // return this.coffee.description() + ", Milk";
  }
}

class Sugar extends Topping {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

let latte: Coffee = new Coffee();
console.log("latte -", latte.description(), latte.cost(), "$");
latte = new Milk(latte);
console.log("latte -", latte.description(), latte.cost(), "$");
latte = new Sugar(latte);
console.log("latte -", latte.description(), latte.cost(), "$");
let espresso: Coffee = new Coffee();
console.log("espresso -", espresso.description(), espresso.cost(), "$");
espresso = new Sugar(espresso);
console.log("espresso -", espresso.description(), espresso.cost(), "$");

//
// Основна ідея паттерна декоратор полягає в тому, щоб додавати додаткові можливості або змінювати поведінку об'єктів, не змінюючи їхній структури.
