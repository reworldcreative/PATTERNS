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

class MilitaryTransportFactory implements TransportFactory {
  createPlane(model: string, capacity: number): Planes {
    return new MilitaryPlane(model, capacity);
  }
  createCar(model: string, capacity: number): Cars {
    return new MilitaryCar(model, capacity);
  }
}

class SportTransportFactory implements TransportFactory {
  createPlane(model: string, capacity: number): Planes {
    return new SportPlane(model, capacity);
  }
  createCar(model: string, capacity: number): Cars {
    return new SportCar(model, capacity);
  }
}

function production(
  factory: TransportFactory,
  vehicleType: string,
  model: string,
  capacity: number
) {
  if (vehicleType === "Plane") {
    const plane: Planes = factory.createPlane(model, capacity);
    plane.fly();
  } else if (vehicleType === "Car") {
    const car: Cars = factory.createCar(model, capacity);
    car.move();
  } else {
    console.log("Невірний тип транспорту");
  }
}

const militaryFactory: TransportFactory = new MilitaryTransportFactory();
const sportFactory: TransportFactory = new SportTransportFactory();

production(militaryFactory, "Plane", "F-16", 1);
production(militaryFactory, "Car", "Tank", 5);

production(sportFactory, "Plane", "EGM", 2);
production(sportFactory, "Car", "Bolid", 1);
