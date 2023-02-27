export interface IProductOrdered {
  productOrdered: (productId: string) => Promise<void>;
}
