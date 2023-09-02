interface DrawingState {
  draw(): void;
  changeData(...args: number[]): void;
  createMemento(): Memento;
  restoreMemento(memento: Memento): void;
}

class Circle implements DrawingState {
  private x: number;
  private y: number;
  private radius: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(): void {
    console.log(
      `Малюємо коло з центром (${this.x},${this.y}) та радіусом ${this.radius}`
    );
  }

  changeData(x: number, y: number, radius: number): void {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  createMemento(): Memento {
    return new CircleMemento(this.x, this.y, this.radius);
  }

  restoreMemento(memento: Memento): void {
    if (memento instanceof CircleMemento) {
      this.x = memento.getX();
      this.y = memento.getY();
      this.radius = memento.getRadius();
    }
  }
}

class Square implements DrawingState {
  private x: number;
  private y: number;
  private sideLength: number;

  constructor(x: number, y: number, sideLength: number) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
  }

  draw(): void {
    console.log(
      `Малюємо квадрат з верхнім лівим кутом (${this.x},${this.y}) та довжиною сторони ${this.sideLength}`
    );
  }

  changeData(x: number, y: number, sideLength: number): void {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
  }

  createMemento(): Memento {
    return new SquareMemento(this.x, this.y, this.sideLength);
  }

  restoreMemento(memento: Memento): void {
    if (memento instanceof SquareMemento) {
      this.x = memento.getX();
      this.y = memento.getY();
      this.sideLength = memento.getSideLength();
    }
  }
}

class Memento {
  constructor(private x: number, private y: number) {}

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}

class CircleMemento extends Memento {
  constructor(x: number, y: number, private radius: number) {
    super(x, y);
  }

  getRadius(): number {
    return this.radius;
  }
}

class SquareMemento extends Memento {
  constructor(x: number, y: number, private sideLength: number) {
    super(x, y);
  }

  getSideLength(): number {
    return this.sideLength;
  }
}

class DrawingHistory {
  private states: Map<DrawingState, Memento[]> = new Map();

  pushState(state: DrawingState): void {
    if (!this.states.has(state)) {
      this.states.set(state, []);
    }
    this.states.get(state)?.push(state.createMemento());

    // this.states.get(state)?.push(state.createMemento()) || this.states.set(state, [state.createMemento()]);
  }

  popState(state: DrawingState, stepsBack: number = 1): void {
    if (this.states.has(state)) {
      const mementos = this.states.get(state)!;
      if (mementos.length >= stepsBack + 1) {
        const memento = mementos[mementos.length - (stepsBack + 1)];
        state.restoreMemento(memento);
        state.draw();
      } else {
        console.log("Немає попереднього стану для відновлення.");
      }
    } else {
      console.log("Немає збережених станів для цього об'єкта.");
    }
  }
}

const memory = new DrawingHistory();

const circle = new Circle(50, 50, 30);
const square = new Square(100, 100, 40);

memory.pushState(circle);
circle.draw();

circle.changeData(70, 70, 20); // Змінюємо дані кола
memory.pushState(circle);
circle.draw();

console.log("Відновлення стану кола:");
memory.popState(circle, 1); // Відновлення стану кола

memory.pushState(square);
square.draw();

console.log("Відновлення стану квадрата:");
memory.popState(square, 1); // Відновлення стану квадрата

// const circle2 = new Circle(500, 500, 300);
// memory.pushState(circle2);
// circle2.draw();
// circle2.changeData(700, 700, 20); // Змінюємо дані кола
// memory.pushState(circle2);
// circle2.draw();
// console.log("Відновлення стану кола:");
// memory.popState(circle2, 1); // Відновлення стану кола
