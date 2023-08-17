class DocumentsState {
  constructor(
    public name: string,
    public nextState: new () => DocumentsState
  ) {}

  next(): DocumentsState {
    return new this.nextState();
  }

  saveDocument(): void {}
}

class OpenState extends DocumentsState {
  constructor() {
    super("OpenState", ClosedState);
  }

  saveDocument(): void {
    console.log("Документ збережено");
  }
}

class ClosedState extends DocumentsState {
  constructor() {
    super("ClosedState", DeleteState);
  }

  saveDocument(): void {
    console.log("Документ неможливо зберегти бо він закритий");
  }
}

class DeleteState extends DocumentsState {
  constructor() {
    super("DeleteState", DeleteState);
  }

  saveDocument(): void {
    console.log("Документ неможливо зберегти бо він не існує");
  }
}

class Documents {
  public state: DocumentsState;

  constructor() {
    this.state = new OpenState();
  }

  nextState(): void {
    this.state = this.state.next();
  }

  saveDocument(): void {
    this.state.saveDocument();
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
documents.saveDocument();
