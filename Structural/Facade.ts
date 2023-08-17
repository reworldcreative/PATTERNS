class Engine {
  start() {
    console.log("Двигун запущено");
  }
}
class Lights {
  turnOn() {
    console.log("Фари увімкнено");
  }
}
class AirConditioning {
  turnOn() {
    console.log("Кондиціонер увімкнено");
  }

  // chenge() {
  //   console.log("Кондиціонер перекдлючено на інший режим");
  // }
}

class CarController {
  constructor(
    private engine: Engine = new Engine(),
    private lights: Lights = new Lights(),
    private airConditioning: AirConditioning = new AirConditioning()
  ) {}

  startCar() {
    this.engine.start();
    this.lights.turnOn();
    this.airConditioning.turnOn();
    console.log("Автомобіль готовий до руху");
  }

  // chengeConditioning() {
  //   this.airConditioning.chenge();
  // }
}

const carControl = new CarController();
carControl.startCar();

// carControl.chengeConditioning();
// class CarController {
//   constructor(public autocar: AutoCar) {
//     this.autocar = autocar;
//   }

//   startCar() {
//     this.autocar.startEngine();
//     this.autocar.turnLights();
//     this.autocar.turnAirConditioning();
//     console.log("Автомобіль готовий до руху");
//   }
// }

// class AutoCar {
//   startEngine() {
//     console.log("Двигун запущено");
//   }
//   turnLights() {
//     console.log("Фари увімкнено");
//   }
//   turnAirConditioning() {
//     console.log("Кондиціонер увімкнено");
//   }
// }
// const car = new AutoCar();
// const carControl = new CarController(car);
// carControl.startCar();
