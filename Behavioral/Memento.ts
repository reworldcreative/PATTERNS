interface DrawingState {
  draw(): void;
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
}

class DrawingHistory {
  private states: DrawingState[] = [];
  pushState(state: DrawingState): void {
    this.states.push(state);
  }
  popState(stepsBack: number = 1): void {
    if (stepsBack + 1 <= this.states.length) {
      console.log("Відновлюємо попередній стан:");
      this.states[this.states.length - (stepsBack + 1)].draw();
    } else {
      console.log("Немає попереднього стану для відновлення.");
    }
  }
}

const memory = new DrawingHistory();

const circle = new Circle(50, 50, 30);
const square = new Square(100, 100, 40);
// const square2 = new Square(80, 80, 50);

memory.pushState(circle);
circle.draw();

memory.pushState(square);
square.draw();

// memory.pushState(square2);
// square2.draw();
memory.popState(1);
