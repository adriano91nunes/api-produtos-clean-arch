import { IProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductMemoryRepository implements IProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: number): Promise<Product | null> {
    return this.products.find(p => p.id === id) || null;
  }
}