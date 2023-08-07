interface Planes {
  model: string;
  capacity: number;
  fly(): void;
}

class MilitaryPlane implements Planes {
  model: string;
  capacity: number;

  constructor(model: string, capacity: number) {
    this.model = model;
    this.capacity = capacity;
  }

  fly(): void {
    console.log(`Військовий літак ${this.model} здійснює польот.`);
  }
}

class SportPlane implements Planes {
  model: string;
  capacity: number;

  constructor(model: string, capacity: number) {
    this.model = model;
    this.capacity = capacity;
  }

  fly(): void {
    console.log(`Спортивний літак ${this.model} здійснює польот.`);
  }
}

interface Cars {
  model: string;
  capacity: number;
  move(): void;
}

class MilitaryCar implements Cars {
  model: string;
  capacity: number;

  constructor(model: string, capacity: number) {
    this.model = model;
    this.capacity = capacity;
  }

  move(): void {
    console.log(
      `Військовий автомобіль ${this.model} їде на місце призначення.`
    );
  }
}

class SportCar implements Cars {
  model: string;
  capacity: number;

  constructor(model: string, capacity: number) {
    this.model = model;
    this.capacity = capacity;
  }

  move(): void {
    console.log(
      `Спортивний автомобіль ${this.model} їде на місце призначення.`
    );
  }
}

abstract class TransportFactory {
  abstract createPlane(model: string, capacity: number): Planes;
  abstract createCar(model: string, capacity: number): Cars;
}

class MilitaryTransportFactory extends TransportFactory {
  createPlane(model: string, capacity: number): Planes {
    return new MilitaryPlane(model, capacity);
  }
  createCar(model: string, capacity: number): Cars {
    return new MilitaryCar(model, capacity);
  }
}

class SportTransportFactory extends TransportFactory {
  createPlane(model: string, capacity: number): Planes {
    return new SportPlane(model, capacity);
  }
  createCar(model: string, capacity: number): Cars {
    return new SportCar(model, capacity);
  }
}

function production(
  factory: TransportFactory,
  planeModel: string,
  planeCapacity: number,
  carModel: string,
  carCapacity: number
) {
  const plane: Planes = factory.createPlane(planeModel, planeCapacity);
  const car: Cars = factory.createCar(carModel, carCapacity);

  plane.fly();
  car.move();
}

const militaryFactory: TransportFactory = new MilitaryTransportFactory();
const sportFactory: TransportFactory = new SportTransportFactory();

production(militaryFactory, "F-16", 1, "Tank", 5);
production(sportFactory, "EGM", 2, "Bolid", 1);
