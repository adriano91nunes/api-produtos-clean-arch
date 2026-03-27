import { Product } from './product.entity';

export interface IProductRepository {
  create(product: Product): Promise<void>;
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | null>;
}