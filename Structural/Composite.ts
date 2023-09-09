abstract class OrganizationComponent {
  constructor(public name: string) {}

  abstract display(indentation: string): void;
  abstract getTotalSalary(): number;
}

class Department extends OrganizationComponent {
  private children: OrganizationComponent[] = [];

  constructor(name: string) {
    super(name);
  }

  add(component: OrganizationComponent) {
    this.children.push(component);
  }

  display(indentation: string) {
    console.log(indentation + "Department: " + this.name);
    for (const child of this.children) {
      child.display(indentation + "  ");
    }
  }

  getTotalSalary() {
    let totalSalary = 0;
    for (const child of this.children) {
      totalSalary += child.getTotalSalary();
    }
    return totalSalary;
  }
}

class Employee extends OrganizationComponent {
  constructor(name: string, public salary: number) {
    super(name);
  }

  display(indentation: string) {
    console.log(
      indentation + "Employee: " + this.name + " (Salary: $" + this.salary + ")"
    );
  }

  getTotalSalary() {
    return this.salary;
  }
}

class Company extends OrganizationComponent {
  private children: OrganizationComponent[] = [];

  constructor(name: string) {
    super(name);
  }

  add(component: OrganizationComponent) {
    this.children.push(component);
  }

  display(indentation: string) {
    console.log(indentation + "Company: " + this.name);
    for (const child of this.children) {
      child.display(indentation + "  ");
    }
  }

  getTotalSalary() {
    let totalSalary = 0;
    for (const child of this.children) {
      totalSalary += child.getTotalSalary();
    }
    return totalSalary;
  }
}

const company = new Company("My Company");
const development = new Department("Development");
const subDev1 = new Department("Sub-Department 1");
const subDev2 = new Department("Sub-Department 2");
const marketing = new Department("Marketing");
const ceo = new Employee("John CEO", 100000);
const developer1 = new Employee("Alice Developer", 80000);
const developer2 = new Employee("Bob Developer", 75000);
const marketer1 = new Employee("Carol Marketer", 70000);
const marketer2 = new Employee("David Marketer", 72000);

development.add(developer1);
development.add(developer2);
subDev1.add(developer1);
subDev2.add(developer2);
marketing.add(marketer1);
marketing.add(marketer2);

development.add(subDev1);
development.add(subDev2);

company.add(ceo);
company.add(development);
company.add(marketing);

company.display("");
console.log("Total Salary: $" + company.getTotalSalary());
