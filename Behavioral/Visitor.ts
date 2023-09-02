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

interface RPGVisitor {
  visitWarrior(warrior: Warrior): void;
  visitMage(mage: Mage): void;
  // visitArcher(archer: Archer): void;
}

class RPGVisitorInfo implements RPGVisitor {
  visitWarrior(warrior: Warrior): void {
    console.log(`Name: ${warrior.name}, health: ${warrior.attribute}`);
  }
  visitMage(mage: Mage): void {
    console.log(`Name: ${mage.name}, mana: ${mage.attribute}`);
  }
  // visitArcher(archer: Archer): void {
  //   console.log(`Name: ${archer.name}, distance hero`);
  // }
}

class RPGVisitorAttack implements RPGVisitor {
  visitWarrior(warrior: Warrior): void {
    console.log(`Name: ${warrior.name}, sword attack`);
  }
  visitMage(mage: Mage): void {
    console.log(`Name: ${mage.name}, cast spell`);
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
// const archer = new Archer("Archer", 10);

const visitorinfo = new RPGVisitorInfo();

warrior.accept(visitorinfo);
mage.accept(visitorinfo);
// archer.accept(visitorinfo);

const visitorattack = new RPGVisitorAttack();

warrior.accept(visitorattack);
mage.accept(visitorattack);
// archer.accept(visitoratac);
