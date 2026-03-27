import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductMemoryRepository } from './product-memory.repository';
import { CreateProductUseCase } from '../application/create-product.use-case';

@Controller('products')
export class ProductController {
  private createProductUseCase: CreateProductUseCase;

  constructor(private repository: ProductMemoryRepository) {
    // Injetamos o repositório real no caso de uso
    this.createProductUseCase = new CreateProductUseCase(repository);
  }

  @Post()
  create(@Body() body: { nome: string, preco: number }) {
    return this.createProductUseCase.execute(body.nome, body.preco);
  }

  @Get()
  list() {
    return this.repository.findAll();
  }
}