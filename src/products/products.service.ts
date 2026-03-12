import { Injectable } from '@nestjs/common';
import type { Product, CreateProduct } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [
    { id: 1, name: 'product1', price: 120 },
    { id: 2, name: 'product2', price: 200 },
    { id: 3, name: 'product3', price: 150 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | { msg: string } {
    return this.products.filter((product) => product.id === id)[0];
  }

  creatProduct(newProduct: CreateProduct): Product {
    const product = {
      id: this.products.length + 1,
      ...newProduct,
    };

    this.products.push(product);
    return product;
  }

  deleteProduct(id: number): Product | null {
    const oldProduct: Product = this.products.filter(
      (product) => product.id === id,
    )[0];
    if (oldProduct) {
      this.products = this.products.filter((product) => product.id !== +id);
      return oldProduct;
    }
    return null;
  }

  updateProduct(
    id: number,
    updateProductData: CreateProduct,
  ): Product | string {
    const idx = this.products.findIndex((product) => product.id === id);

    if (idx === -1) {
      return 'This product does not exist';
    }
    this.products[idx] = {
      ...this.products[idx],
      ...updateProductData,
    };
    return this.products[idx];
  }
}
