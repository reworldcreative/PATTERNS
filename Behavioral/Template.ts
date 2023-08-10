abstract class Game {
  abstract initialize(): void;
  abstract startPlay(): void;
  abstract endPlay(): void;

  play(): void {
    this.initialize();
    this.startPlay();
    this.endPlay();
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
    this.awardPlayers();
  }

  protected awardPlayers(): void {
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
