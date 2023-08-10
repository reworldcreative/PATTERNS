interface Observer {
  update(temperature: number, humidity: number): void;
}

class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  updateWeatherData(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.notifyObservers();
  }
  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity);
    }
  }
}

class Person implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(temperature: number, humidity: number): void {
    console.log(
      `${this.name} отримав оновлення: Температура: ${temperature}°C, Вологість: ${humidity}%`
    );
  }
}

const person1 = new Person("Користувач 1");
const person2 = new Person("Користувач 2");

const weatherStation = new WeatherStation();

weatherStation.addObserver(person1);
weatherStation.addObserver(person2);

weatherStation.updateWeatherData(25, 60);

weatherStation.removeObserver(person2);

weatherStation.updateWeatherData(30, 55);
