import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import CreateProductDto from './dto/create-product.dto';
import { ProductsService } from './products.service';
import type { Product } from './interfaces/products.interface';
import UpdateProductDto from './dto/update-product.dto';

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
  getProduct(@Param('id', ParseIntPipe) id: number): Product | { msg: string } {
    const product: Product | { msg: string } =
      this.productsService.getProduct(id);
    if (!product) {
      return { msg: 'Product not found' };
    }
    return product;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createProduct(@Body() dto: CreateProductDto): Product {
    return this.productsService.creatProduct(dto);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number): Product | null {
    return this.productsService.deleteProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ): Product | string {
    return this.productsService.updateProduct(id, dto);
  }
}
