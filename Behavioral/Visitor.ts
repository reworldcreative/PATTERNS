interface Character {
  accept(visitor: RPGVisitor): void;
}

class Warrior implements Character {
  constructor(public name: string, public attribute: number) {}
  accept(visitor: RPGVisitor): void {
    visitor.visitWarrior(this);
  }
}

class Mage implements Character {
  constructor(public name: string, public attribute: number) {}
  accept(visitor: RPGVisitor): void {
    visitor.visitMage(this);
  }
}

// class Archer implements Character {
//   constructor(public name: string, public distance: number) {}
//   accept(visitor: RPGVisitor): void {
//     visitor.visitArcher(this);
//   }
// }

class RPGVisitor {
  visitWarrior(warrior: Warrior): void {
    console.log(`Name: ${warrior.name}, health: ${warrior.attribute}`);
  }
  visitMage(mage: Mage): void {
    console.log(`Name: ${mage.name}, mana: ${mage.attribute}`);
  }
  // visitArcher(archer: Archer): void {
  //   if (archer.distance < 20) {
  //     console.log(`Name: ${archer.name}, too close to shoot`);
  //   } else {
  //     console.log(`Name: ${archer.name}, shoot`);
  //   }
  // }
}

const warrior = new Warrior("Warrior", 100);
const mage = new Mage("Mage", 150);

const visitor = new RPGVisitor();

warrior.accept(visitor);
mage.accept(visitor);

// const archer = new Archer("Archer", 10);
// archer.accept(visitor);
