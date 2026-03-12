import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import type { Product, CreateProduct } from './interfaces/products.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    const products: Product[] = this.productsService.getProducts();
    if (!products) {
      return { msg: 'Product not found' };
    }
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product | { msg: string } {
    const product: Product | { msg: string } =
      this.productsService.getProduct(+id);
    if (!product) {
      return { msg: 'Product not found' };
    }
    return product;
  }

  @Post()
  createProduct(@Body() newProduct: CreateProduct): Product {
    return this.productsService.creatProduct(newProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Product | null {
    return this.productsService.deleteProduct(+id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() product: CreateProduct,
  ): Product | string {
    return this.productsService.updateProduct(+id, product);
  }
}
