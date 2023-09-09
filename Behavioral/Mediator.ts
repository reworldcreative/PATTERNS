class OrderMediator {
  private customers: Customer[] = [];
  private orders: Order[] = [];

  registerCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  createOrder(product: string, quantity: number, customer: Customer) {
    const order = new Order(this.orders.length + 1, product, quantity);
    this.orders.push(order);
    order.receiveOrder(customer);
  }
}

class Order {
  constructor(
    private orderId: number,
    private product: string,
    private quantity: number
  ) {}

  getInfo(): string {
    return `Order ID: ${this.orderId}, Product: ${this.product}, Quantity: ${this.quantity}`;
  }

  receiveOrder(customer: Customer) {
    console.log(
      `[${customer.getName()}] Received new order: ${this.getInfo()}`
    );
  }
}

class Customer {
  constructor(private name: string, private mediator: OrderMediator) {
    this.mediator.registerCustomer(this);
  }

  getName(): string {
    return this.name;
  }
  makeOrder(product: string, quantity: number): void {
    this.mediator.createOrder(product, quantity, this);
  }
}

const mediator = new OrderMediator();

const customer1 = new Customer("Customer 1", mediator);
const customer2 = new Customer("Customer 2", mediator);

customer1.makeOrder("Product A", 5);
customer2.makeOrder("Product B", 10);
customer1.makeOrder("Product B", 5);
