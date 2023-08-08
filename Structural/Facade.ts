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
}

const carControl = new CarController();
carControl.startCar();
