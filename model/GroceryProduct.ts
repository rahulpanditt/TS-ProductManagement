import { IProduct } from './IProduct';

export interface GroceryProduct extends IProduct {
  expiryDate: string;
  weight: number;
}
