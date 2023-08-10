interface Command {
  execute(): void;
}

class Light {
  private isOn: boolean = false;
  turnOn(): void {
    this.isOn = true;
    console.log("Light is ON");
  }
  turnOff(): void {
    this.isOn = false;
    console.log("Light is OFF");
  }
}

class TurnOnLightCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOn();
  }
}

class TurnOffLightCommand implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  executeCommand(command: Command): void {
    command.execute();
  }
}

const RoomLight = new Light();
const remote = new RemoteControl();

const turnOnRoomLight = new TurnOnLightCommand(RoomLight);
const turnOffRoomLight = new TurnOffLightCommand(RoomLight);

remote.executeCommand(turnOnRoomLight);
remote.executeCommand(turnOffRoomLight);
