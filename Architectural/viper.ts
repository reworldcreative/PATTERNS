import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Entity (Модель)
class User {
  constructor(public id: number, public name: string) {}
}

// Interactor (Сервіс)
class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}

// Presenter (Презентер)
class UserPresenter {
  constructor(private userService: UserService) {}

  addUser(id: number, name: string): void {
    const user = new User(id, name);
    this.userService.addUser(user);
  }

  showUsers(): void {
    const users = this.userService.getUsers();
    if (users.length === 0) {
      console.log("No users found.");
    } else {
      console.log("List of Users:");
      users.forEach((user) => {
        console.log(`ID: ${user.id}, Name: ${user.name}`);
      });
    }
  }
}

// View (Вид)

const userService = new UserService();
const userPresenter = new UserPresenter(userService);

async function getUserInput(question: string): Promise<string> {
  return new Promise<string>((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log("Console User Management System");
  console.log("1. Add User");
  console.log("2. Show Users");
  console.log("3. Exit");

  const choice = await getUserInput("Enter your choice: ");

  switch (choice) {
    case "1":
      const id = await getUserInput("Enter user ID: ");
      const name = await getUserInput("Enter user name: ");
      userPresenter.addUser(parseInt(id), name);
      break;
    case "2":
      userPresenter.showUsers();
      break;
    case "3":
      console.log("До побачення!");
      rl.close();
      process.exit(0);
    default:
      console.log("Невірний вибір. Спробуйте ще раз.");
      break;
  }
  main();
}

main();

// Router (Маршрутизатор, опціонально)
