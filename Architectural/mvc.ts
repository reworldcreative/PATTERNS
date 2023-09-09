// Model  Відповідає за обробку даних та бізнес-логіку.
class UserModel {
  private username: string;
  private email: string;
  private view: UserView;

  constructor(username: string, email: string, view: UserView) {
    this.username = username;
    this.email = email;
    this.view = view;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  setUsername(name: string) {
    this.username = name;
    this.changeData(this.username, this.email);
  }

  setEmail(email: string) {
    this.email = email;
    this.changeData(this.username, this.email);
  }

  changeData(username: string, email: string) {
    this.view.renderUserDetails(username, email);
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
    // this.model = new UserModel(username, email);
    this.model.setEmail(email);
    this.model.setUsername(username);
    // this.view.renderUserDetails(
    //   this.model.getUsername(),
    //   this.model.getEmail()
    // );
  }

  updateUserView(username: string, email: string) {
    this.view.renderUserDetails(username, email);
  }

  show(m_user: UserModel) {
    view.renderUserDetails(m_user.getUsername(), m_user.getEmail());
  }
}

// Application   Використання моделі, представлення та контролера для створення функціональності.
const view = new UserView();
const m_user = new UserModel("john_doe", "john@example.com", view);
const controller = new UserController(m_user, view);
controller.show(m_user);
controller.updateUserDetails("jane_doe", "jane@example.com");
controller.updateUserView("testName", "test@example.com");
controller.show(m_user);
