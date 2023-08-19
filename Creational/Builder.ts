class User {
  constructor(
    public username: string = "",
    public email: string = "",
    public password: string = "",
    public age: number = 0,
    public admin: boolean = false
  ) {}

  getInfo(): string {
    return `Username: ${this.username}\nEmail: ${this.email}\nAge: ${this.age}\nAdmin:${this.admin}`;
  }
}

interface Builder {
  setUsername(username: string): Builder;
  setEmail(email: string): Builder;
  setPassword(password: string): Builder;
  setAge(age: number): Builder;
  setAdmin(): Builder;
  build(): User;
}

class UserBuilder implements Builder {
  private user: User;
  constructor() {
    this.user = new User();
  }

  setUsername(username: string): Builder {
    this.user.username = username;
    return this;
  }

  setEmail(email: string): Builder {
    this.user.email = email;
    return this;
  }

  setPassword(password: string): Builder {
    this.user.password = password;
    return this;
  }

  setAge(age: number): Builder {
    this.user.age = age;
    return this;
  }

  setAdmin(): Builder {
    this.user.admin = false;
    return this;
  }

  build(): User {
    return this.user;
  }
}

class AdminBuilder implements Builder {
  private user: User;
  constructor() {
    this.user = new User();
  }

  setUsername(username: string): Builder {
    this.user.username = username;
    return this;
  }

  setEmail(email: string): Builder {
    this.user.email = email;
    return this;
  }

  setPassword(password: string): Builder {
    this.user.password = password;
    return this;
  }

  setAge(age: number): Builder {
    this.user.age = age;
    return this;
  }

  setAdmin(): Builder {
    this.user.admin = true;
    return this;
  }

  build(): User {
    return this.user;
  }
}

const admin = new AdminBuilder()
  .setUsername("john_doe")
  .setEmail("john@example.com")
  .setPassword("secretpassword")
  .setAge(30)
  .setAdmin()
  .build();
console.log("admin-\n", admin.getInfo());

const user = new UserBuilder()
  .setUsername("ashley")
  .setEmail("ashley@example.com")
  .setPassword("testpass")
  .build();
console.log("user-\n", user.getInfo());
