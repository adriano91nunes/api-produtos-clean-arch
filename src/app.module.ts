import { Module } from '@nestjs/common';
import { ProductController } from './infrastructure/product.controller';
import { ProductMemoryRepository } from './infrastructure/product-memory.repository';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductMemoryRepository],
})
export class AppModule {}