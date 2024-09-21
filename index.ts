import { ProductService } from './services/ProductService';
import { ElectronicProduct } from './model/ElectronicProduct';
import { GroceryProduct } from './model/GroceryProduct';

const electronicsService = new ProductService<ElectronicProduct>();
const groceryService = new ProductService<GroceryProduct>();

// 1. Create Products
electronicsService.create({ id: 1, name: 'Laptop', price: 1000, brand: 'BrandX', warrantyPeriod: 2 });
electronicsService.create({ id: 2, name: 'Smartphone', price: 700, brand: 'BrandY', warrantyPeriod: 1 });

groceryService.create({ id: 1, name: 'Milk', price: 5, expiryDate: '2025-12-31', weight: 1 });
groceryService.create({ id: 2, name: 'Bread', price: 2, expiryDate: '2024-10-01', weight: 0.5 });

// 2. Read Products
const laptop = electronicsService.read(1);
console.log('Read Laptop:', laptop);

const milk = groceryService.read(1);
console.log('Read Milk:', milk);

// 3. Update a Product'
try {
  electronicsService.update(2, { name: 'Smartphone Pro', price: 800 }); // Valid
  console.log('Updated Electronics:', electronicsService.getAll());
} catch (error) {
  console.error(error);
}
try {
  groceryService.update(1, { price: 4.5 });
  console.log('Updated Groceries:', groceryService.getAll());
} catch (error) {
  console.error(error);
}


// 4. Delete a Product
electronicsService.delete(1); 
groceryService.delete(2); 
console.log('Final Electronics Products:', electronicsService.getAll());
console.log('Final Grocery Products:', groceryService.getAll());

