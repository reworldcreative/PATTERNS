interface Character {
  accept(visitor: RPGVisitor): void;
}

class Warrior implements Character {
  constructor(public name: string, public health: number) {}
  accept(visitor: RPGVisitor): void {
    visitor.visitWarrior(this);
  }
}

class Mage implements Character {
  constructor(public name: string, public mana: number) {}
  accept(visitor: RPGVisitor): void {
    visitor.visitMage(this);
  }
}

class RPGVisitor {
  visitWarrior(warrior: Warrior): void {
    console.log(`Name: ${warrior.name}, health: ${warrior.health}`);
  }
  visitMage(mage: Mage): void {
    console.log(`Name: ${mage.name}, mana: ${mage.mana}`);
  }
}

const warrior = new Warrior("Warrior", 100);
const mage = new Mage("Mage", 150);

const visitor = new RPGVisitor();

warrior.accept(visitor);
mage.accept(visitor);
