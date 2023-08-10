class OrderMediator {
  private orders: Order[] = [];
  private messageService: MessageService;
  private inventory: Inventory;
  private shippingService: ShippingService;

  constructor() {
    this.messageService = new MessageService(this);
    this.inventory = new Inventory(this);
    this.shippingService = new ShippingService(this);
  }

  addOrder(order: Order) {
    this.orders.push(order);
    this.messageService.sendConfirmation(order);
    this.inventory.updateInventory(order);
    this.shippingService.shipOrder(order);
  }
}

class Order {
  constructor(
    private orderId: number,
    private productId: number,
    private quantity: number
  ) {}

  getInfo(): string {
    return `Order ID: ${this.orderId}, Product ID: ${this.productId}, Quantity: ${this.quantity}`;
  }
}

class MessageService {
  constructor(private mediator: OrderMediator) {}
  sendConfirmation(order: Order) {
    console.log(
      "Відправити підтвердження замовлення клієнту:",
      order.getInfo()
    );
  }
}

class Inventory {
  private products: Map<number, number> = new Map();
  constructor(private mediator: OrderMediator) {}
  updateInventory(order: Order) {
    console.log("кількість товарів на складі оновлена");
  }
}

class ShippingService {
  constructor(private mediator: OrderMediator) {}

  shipOrder(order: Order) {
    console.log("Відправити посилку клієнту");
  }
}

const orderMediator = new OrderMediator();

const order1 = new Order(1, 101, 3);
const order2 = new Order(2, 102, 2);

orderMediator.addOrder(order1);
orderMediator.addOrder(order2);
