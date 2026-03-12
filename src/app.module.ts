import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

/**
 * this main module in nestjs
 * main return (tes)
 */
@Module({
  imports: [ProductsModule],
})
export class AppModule {}
