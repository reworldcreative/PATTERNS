interface Plane {
  manufacturer: string;
  model: string;
  takeOff(): void;
  land(): void;
}

class PassengerPlane implements Plane {
  manufacturer: string;
  model: string;

  constructor(manufacturer: string, model: string) {
    this.manufacturer = manufacturer;
    this.model = model;
  }

  takeOff(): void {
    console.log(
      `Passenger plane ${this.manufacturer} ${this.model} is taking off.`
    );
  }

  land(): void {
    console.log(
      `Passenger plane ${this.manufacturer} ${this.model} is landing.`
    );
  }
}

class CargoPlane implements Plane {
  manufacturer: string;
  model: string;

  constructor(manufacturer: string, model: string) {
    this.manufacturer = manufacturer;
    this.model = model;
  }

  takeOff(): void {
    console.log(
      `Cargo plane ${this.manufacturer} ${this.model} is taking off.`
    );
  }

  land(): void {
    console.log(`Cargo plane ${this.manufacturer} ${this.model} is landing.`);
  }
}

class PlaneFactory {
  createPlane(type: string, manufacturer: string, model: string): Plane {
    switch (type) {
      case "passenger":
        return new PassengerPlane(manufacturer, model);
      case "cargo":
        return new CargoPlane(manufacturer, model);
      default:
        throw new Error("Invalid plane type.");
    }
  }
}
const planeFactory: PlaneFactory = new PlaneFactory();
const passengerPlane: Plane = planeFactory.createPlane(
  "passenger",
  "Boeing",
  "747"
);
passengerPlane.takeOff(); //Passenger plane Boeing 747 is taking off.
passengerPlane.land(); // Passenger plane Boeing 747 is landing.

const cargoPlane: Plane = planeFactory.createPlane("cargo", "Airbus", "A380");
cargoPlane.takeOff(); //  Cargo plane Airbus A380 is taking off.
cargoPlane.land(); // Cargo plane Airbus A380 is landing.
