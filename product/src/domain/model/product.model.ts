export type IProduct = Readonly<{
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  inStock: boolean;
  price: number;
  quantity: number;
}>;
