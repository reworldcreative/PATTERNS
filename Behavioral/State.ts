class DocumentsState {
  constructor(
    public name: string,
    public nextState: new () => DocumentsState
  ) {}
  next() {
    return new this.nextState();
  }
}

class OpenState extends DocumentsState {
  constructor() {
    super("OpenState", ClosedState);
  }
}

class ClosedState extends DocumentsState {
  constructor() {
    super("ClosedState", DeleteState);
  }
}

class DeleteState extends DocumentsState {
  constructor() {
    super("DeleteState", DeleteState);
  }
}

class Documents {
  public state: DocumentsState;
  constructor() {
    this.state = new OpenState();
  }
  nextState() {
    this.state = this.state.next();
  }
  saveDocument() {
    this.state.name === "OpenState"
      ? console.log("Документ збережено")
      : console.log("Документ неможливо зберегти");
  }
}

const documents = new Documents();

console.log(documents.state.name);
documents.saveDocument();
documents.nextState();

console.log(documents.state.name);
documents.saveDocument();
documents.nextState();
console.log(documents.state.name);
