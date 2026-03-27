import { IProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.entity';

export class CreateProductUseCase {
  constructor(private productRepo: IProductRepository) {}

  async execute(nome: string, preco: number) {
    const id = Math.floor(Math.random() * 1000); // Simulação de ID
    const product = new Product(id, nome, preco);
    await this.productRepo.create(product);
    return product;
  }
}