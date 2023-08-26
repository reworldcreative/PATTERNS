interface PaymentMethod {
  processOrder(product: ProductC): void;
}
class CreditCardPayment implements PaymentMethod {
  processOrder(product: ProductC): void {
    const amount = product.calculatePrice();
    console.log(
      `Processing credit card payment of $${amount} for ${product.getType()} product`
    );
    console.log("Order successfully processed!");
  }
}
class PayPalPayment implements PaymentMethod {
  processOrder(product: ProductC): void {
    const amount = product.calculatePrice();
    console.log(
      `Processing PayPal payment of $${amount} for ${product.getType()} product`
    );
    console.log("Order successfully processed!");
  }
}

interface ProductC {
  calculatePrice(): number;
  getType(): string;
}
class PhysicalProduct implements ProductC {
  calculatePrice(): number {
    return 50;
  }
  getType(): string {
    return "physical";
  }
}
class DigitalProduct implements ProductC {
  calculatePrice(): number {
    return 30;
  }
  getType(): string {
    return "digital";
  }
}

class PaymentProcessor {
  constructor(private paymentMethod: PaymentMethod) {}

  processProduct(product: ProductC): void {
    const amount = product.calculatePrice();
    this.paymentMethod.processOrder(product); // міст
  }
}

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const physicalProduct = new PhysicalProduct();
const digitalProduct = new DigitalProduct();

const paymentProcessor1 = new PaymentProcessor(creditCardPayment);
const paymentProcessor2 = new PaymentProcessor(payPalPayment);

paymentProcessor1.processProduct(physicalProduct);
paymentProcessor2.processProduct(digitalProduct);
// creditCardPayment.processOrder(digitalProduct);
