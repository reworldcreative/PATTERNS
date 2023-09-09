// Модель (Model)
class MTask {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}

class TaskListModel {
  private tasks: MTask[] = [];
  private observers: Function[] = [];

  addObserver(observer: Function) {
    this.observers.push(observer);
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer(this.getTasks());
    }
  }

  addTask(title: string) {
    const newTask = new MTask(this.tasks.length + 1, title, false);
    this.tasks.push(newTask);
    this.notifyObservers();
  }

  toggleTaskCompletion(taskId: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.notifyObservers();
  }

  getTasks() {
    return [...this.tasks];
  }
}

// Представлення (View)
class TaskListView {
  renderTasks(tasks: MTask[]) {
    console.log("Task List:");
    tasks.forEach((task) => {
      const status = task.completed ? "[x]" : "[ ]";
      console.log(`${status} ${task.title}`);
    });
  }
}

// Намір (Intent)
class TaskListIntent {
  private model: TaskListModel;

  constructor(model: TaskListModel) {
    this.model = model;
  }

  handleAddTask(title: string) {
    this.model.addTask(title);
  }

  handleToggleTaskCompletion(taskId: number) {
    this.model.toggleTaskCompletion(taskId);
  }
}

// Головна частина додатку
const model = new TaskListModel();
const m_view = new TaskListView();
const intent = new TaskListIntent(model);

model.addObserver((tasks: MTask[]) => {
  m_view.renderTasks(tasks);
});

m_view.renderTasks(model.getTasks());

// Додавання завдання та перегляд оновленого списку
intent.handleAddTask("Buy groceries");
intent.handleAddTask("Walk the dog");
intent.handleToggleTaskCompletion(1);
