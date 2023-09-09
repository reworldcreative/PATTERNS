// interface Command {
//   execute(): void;
// }

// class Light {
//   private isOn: boolean = false;
//   turnOn(): void {
//     this.isOn = true;
//     console.log("Light is ON");
//   }
//   turnOff(): void {
//     this.isOn = false;
//     console.log("Light is OFF");
//   }
// }

// class TurnOnLightCommand implements Command {
//   constructor(private light: Light) {}
//   execute(): void {
//     this.light.turnOn();
//   }
// }

// class TurnOffLightCommand implements Command {
//   constructor(private light: Light) {}
//   execute(): void {
//     this.light.turnOff();
//   }
// }

// class RemoteControl {
//   executeCommand(command: Command): void {
//     command.execute();
//   }
// }

// const RoomLight = new Light();
// const remote = new RemoteControl();

// const turnOnRoomLight = new TurnOnLightCommand(RoomLight);
// const turnOffRoomLight = new TurnOffLightCommand(RoomLight);

// remote.executeCommand(turnOnRoomLight);
// remote.executeCommand(turnOffRoomLight);

// ///
interface Command {
  execute(): void;
}

class TV {
  turnOn(): void {
    console.log("TV is ON");
  }

  turnOff(): void {
    console.log("TV is OFF");
  }

  increaseVolume(): void {
    console.log("Volume increased");
  }

  decreaseVolume(): void {
    console.log("Volume decreased");
  }
}

class TurnOnTVCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.turnOn();
  }
}

class TurnOffTVCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.turnOff();
  }
}

class IncreaseVolumeCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.increaseVolume();
  }
}

class DecreaseVolumeCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.decreaseVolume();
  }
}

class RemoteControl {
  constructor(private command: Command) {}

  pressButton(): void {
    this.command.execute();
  }

  setCommand(command: Command): void {
    this.command = command;
  }
}

const tv = new TV();

const turnOnCommand = new TurnOnTVCommand(tv);
const turnOffCommand = new TurnOffTVCommand(tv);
const increaseVolumeCommand = new IncreaseVolumeCommand(tv);
const decreaseVolumeCommand = new DecreaseVolumeCommand(tv);

const remote = new RemoteControl(turnOnCommand);
remote.pressButton(); // Output: "TV is ON"

remote.setCommand(increaseVolumeCommand);
remote.pressButton(); // Output: "Volume increased"

remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: "TV is OFF"
