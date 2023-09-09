// Observer
interface ObserverVm {
  update(): void;
}

class TaskModelObserver implements ObserverVm {
  private viewModel: TaskViewModel;

  constructor(viewModel: TaskViewModel) {
    this.viewModel = viewModel;
  }

  update(): void {
    this.viewModel.updateTasks();
  }
}

// Model
class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}

class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.tasks.push(new Task(1, "Зробити покупки", false));
    this.tasks.push(new Task(2, "Вивчити TypeScript", true));
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  markTaskAsCompleted(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
    }
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}

// ViewModel
class TaskViewModel {
  private model: TaskService;
  private tasks: Task[];
  private observers: ObserverVm[] = [];

  constructor(model: TaskService) {
    this.model = model;
    this.tasks = this.model.getAllTasks();
  }

  addObserver(observer: ObserverVm): void {
    this.observers.push(observer);
  }

  private notifyObservers(): void {
    this.observers.forEach((observer) => observer.update());
  }

  updateTasks(): void {
    this.tasks = this.model.getAllTasks();
    this.notifyObservers();
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  markTaskAsCompleted(taskId: number): void {
    this.model.markTaskAsCompleted(taskId);
    this.tasks = this.model.getAllTasks();
  }

  addTask(task: Task): void {
    this.model.addTask(task);
    this.tasks = this.model.getAllTasks();
  }
}

// View
class TaskView implements ObserverVm {
  private viewModel: TaskViewModel;

  constructor(viewModel: TaskViewModel) {
    this.viewModel = viewModel;
  }

  renderTasks(): void {
    const tasks = this.viewModel.getAllTasks();

    tasks.forEach((task) => {
      console.log(`[${task.completed ? "X" : " "}] ${task.title}`);
    });
  }
  update(): void {
    this.renderTasks();
  }
}

// Головний код
const taskService = new TaskService();
const taskViewModel = new TaskViewModel(taskService);
const taskView = new TaskView(taskViewModel);

const taskModelObserver = new TaskModelObserver(taskViewModel);
taskViewModel.addObserver(taskModelObserver);

taskView.renderTasks();

taskViewModel.markTaskAsCompleted(1);
console.log("Після відзначення завдання як виконаного:");
taskView.renderTasks();

const newTask = new Task(3, "Написати рецензію", false);
taskViewModel.addTask(newTask);
console.log("Після додавання нового завдання:");
taskView.renderTasks();
