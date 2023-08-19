// Model  Відповідає за обробку даних та бізнес-логіку.
class UserModel {
  private username: string;
  private email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }
}

// View  Відповідає за відображення даних користувачу.
class UserView {
  renderUserDetails(username: string, email: string) {
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
  }
}

// Controller  Відповідає за керування взаємодією між моделлю та представленням.
class UserController {
  private model: UserModel;
  private view: UserView;

  constructor(model: UserModel, view: UserView) {
    this.model = model;
    this.view = view;
  }

  updateUserDetails(username: string, email: string) {
    this.model = new UserModel(username, email);
    this.view.renderUserDetails(
      this.model.getUsername(),
      this.model.getEmail()
    );
  }
}

// Application   Використання моделі, представлення та контролера для створення функціональності.
const muser = new UserModel("john_doe", "john@example.com");
const view = new UserView();
const controller = new UserController(muser, view);

controller.updateUserDetails("jane_doe", "jane@example.com");
