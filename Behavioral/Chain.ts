abstract class OrderHandler {
  protected successor: OrderHandler | null = null;

  setSuccessor(successor: OrderHandler) {
    this.successor = successor;
  }

  abstract handleOrder(order: Ord): void;
}

class Ord {
  constructor(
    public id: number,
    public totalAmount: number,
    public customerName: string,
    public amount: number
  ) {}
}

class PaymentVerificationHandler extends OrderHandler {
  handleOrder(order: Ord) {
    if (order.totalAmount >= 100) {
      console.log(`Замовлення #${order.id}: оплата перевірена.`);
      if (this.successor) {
        this.successor.handleOrder(order);
      }
    } else {
      console.log(
        `Замовлення #${order.id}: сума замовлення замала для оплати.`
      );
    }
  }
}

class StockAvailabilityHandler extends OrderHandler {
  private amountLimit: number = 3;
  handleOrder(order: Ord) {
    if (order.amount <= this.amountLimit) {
      console.log(`Замовлення #${order.id}: товари в наявності.`);
      if (this.successor) {
        this.successor.handleOrder(order);
      }
    } else {
      console.log(
        `Замовлення #${order.id}: ліміт на товар ${this.amountLimit} шт.`
      );
    }
  }
}

class ShippingHandler extends OrderHandler {
  handleOrder(order: Ord) {
    if (order.customerName != "") {
      console.log(`Замовлення #${order.id}: відправлення організовано.`);
      if (this.successor) {
        this.successor.handleOrder(order);
      }
    } else {
      console.log(`Замовлення #${order.id}: Вказані невірні данні`);
    }
  }
}

const paymentVerificationHandler = new PaymentVerificationHandler();
const stockAvailabilityHandler = new StockAvailabilityHandler();
const shippingHandler = new ShippingHandler();

paymentVerificationHandler.setSuccessor(stockAvailabilityHandler);
stockAvailabilityHandler.setSuccessor(shippingHandler);

const ord1 = new Ord(1, 150, "John Doe", 1);
const ord2 = new Ord(2, 80, "Jane Smith", 3);
const ord3 = new Ord(3, 300, "Alice Johnson", 5);

paymentVerificationHandler.handleOrder(ord1);
paymentVerificationHandler.handleOrder(ord2);
paymentVerificationHandler.handleOrder(ord3);
