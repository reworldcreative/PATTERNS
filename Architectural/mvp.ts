// Модель (Model)
class Note {
  constructor(
    public id: number,
    public title: string,
    public content: string
  ) {}
}

class NoteModel {
  private notes: Note[] = [];

  addNote(title: string, content: string): void {
    const newNote = new Note(this.notes.length + 1, title, content);
    this.notes.push(newNote);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}

// Представлення (View)
interface NoteView {
  // setPresenter(presenter: NotePresenter): void;
  displayNotes(notes: Note[]): void;
  onAddNote(title: string, content: string): void;
}

class ConsoleNoteView implements NoteView {
  private presenter!: NotePresenter;

  constructor() {}

  setPresenter(presenter: NotePresenter): void {
    this.presenter = presenter;
  }

  displayNotes(notes: Note[]): void {
    notes.forEach((note) => {
      console.log(`ID: ${note.id}, Title: ${note.title}`);
      console.log(`Content: ${note.content}`);
      console.log("------------------------");
    });
  }

  onAddNote(title: string, content: string): void {
    this.presenter.addNote(title, content);
  }
}

// Презентер (Presenter)
class NotePresenter {
  private model: NoteModel;
  private view!: NoteView;

  constructor(model: NoteModel) {
    this.model = model;
  }

  setView(view: NoteView): void {
    this.view = view;
  }

  addNote(title: string, content: string): void {
    this.model.addNote(title, content);
    this.updateView();
  }

  updateView(): void {
    const notes = this.model.getNotes();
    this.view.displayNotes(notes);
  }
}

// Головний код
const noteModel = new NoteModel();
const notePresenter = new NotePresenter(noteModel);
const noteView = new ConsoleNoteView();
noteView.setPresenter(notePresenter);
notePresenter.setView(noteView);

noteView.onAddNote("Meeting Notes", "Discussed project timeline.");
noteView.onAddNote("Grocery List", "Milk, eggs, bread, vegetables.");
noteView.onAddNote("Ideas", "Brainstormed ideas for upcoming event.");
