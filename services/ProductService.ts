import { ValidateNonEmpty } from '../decorator/ValidateNonEmpty';
import { IProduct } from '../model/IProduct';

export class ProductService<T extends IProduct> {
  private products: T[] = [];
  @ValidateNonEmpty
  create(product: T) {
    this.products.push(product);
  }

  read(id: number): T | undefined {
    return this.products.find(p => p.id === id);
  }
  @ValidateNonEmpty
  update(id: number, updatedProduct: Partial<T>) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      Object.assign(product, updatedProduct);
    }
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index >= 0) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }

  getAll(): T[] {
    return this.products;
  }
}
