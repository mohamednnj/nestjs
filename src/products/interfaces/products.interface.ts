export interface Product {
  id: number;
  name: string;
  price: number;
}
export type CreateProduct = Omit<Product, 'id'>;
