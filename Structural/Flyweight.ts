class Product {
  constructor(private name: string, private price: number) {}

  displayInfo(): void {
    console.log(`Товар: ${this.name}, Ціна: ${this.price} грн`);
  }
}

class ProductFlyweightFactory {
  private flyweights: { [key: string]: Product } = {};

  getProduct(name: string, price: number): Product {
    const key = `${name}-${price}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Product(name, price);
    }
    return this.flyweights[key];
  }

  displayFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`Збережені - ${count} - легковажкі об'єкти:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

class InventorySystem {
  private productFactory: ProductFlyweightFactory;

  constructor(productFactory: ProductFlyweightFactory) {
    this.productFactory = productFactory;
  }

  createProduct(name: string, price: number): Product {
    return this.productFactory.getProduct(name, price);
  }
}

const productFactory = new ProductFlyweightFactory();
const inventorySystem = new InventorySystem(productFactory);

const product1 = inventorySystem.createProduct("Футболка", 300);
const product2 = inventorySystem.createProduct("Штани", 500);
const product3 = inventorySystem.createProduct("Футболка", 300);
product1.displayInfo();
product2.displayInfo();
product3.displayInfo();

productFactory.displayFlyweights();
