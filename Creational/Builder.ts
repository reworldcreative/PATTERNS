class User {
  constructor(
    private username: string,
    private email: string,
    private password: string,
    private age: number,
    private admin: boolean
  ) {}

  getInfo(): string {
    return `Username: ${this.username}\nEmail: ${this.email}\nAge: ${this.age}\nAdmin:${this.admin}`;
  }
}

class UserBuilder {
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private age: number = 0;
  private admin: boolean = false;

  setUsername(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  setPassword(password: string): UserBuilder {
    this.password = password;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  setAdmin(admin: boolean): UserBuilder {
    this.admin = admin;
    return this;
  }

  build(): User {
    return new User(
      this.username,
      this.email,
      this.password,
      this.age,
      this.admin
    );
  }
}

const admin = new UserBuilder()
  .setUsername("john_doe")
  .setEmail("john@example.com")
  .setPassword("secretpassword")
  .setAge(30)
  .setAdmin(true)
  .build();
console.log("admin-", admin.getInfo());

const user = new UserBuilder()
  .setUsername("ashley")
  .setEmail("ashley@example.com")
  .setPassword("testpass")
  .build();
console.log("user-", user.getInfo());
