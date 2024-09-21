import { IProduct } from './IProduct';

export interface ElectronicProduct extends IProduct {
  brand: string;
  warrantyPeriod: number;
}
