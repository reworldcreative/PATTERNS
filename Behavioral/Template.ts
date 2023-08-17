abstract class Game {
  protected initialize(): void {}
  protected startPlay(): void {}
  protected endPlay(): void {}
  protected awardPlayers(): void {}

  play(): void {
    this.initialize();
    this.startPlay();
    this.endPlay();
    this.awardPlayers();
  }
}

class FootballGame extends Game {
  initialize(): void {
    console.log("Football game initialized");
  }

  startPlay(): void {
    console.log("Football game started. Enjoy the match!");
  }

  endPlay(): void {
    console.log("Football game ended. Final score recorded.");
  }

  awardPlayers(): void {
    console.log("Awarding players for their performance.");
  }
}

class BasketballGame extends Game {
  initialize(): void {
    console.log("Basketball game initialized");
  }

  startPlay(): void {
    console.log("Basketball game started. Have fun playing!");
  }

  endPlay(): void {
    console.log("Basketball game ended. Final stats calculated.");
  }
}

const footballGame = new FootballGame();
footballGame.play();

const basketballGame = new BasketballGame();
basketballGame.play();
