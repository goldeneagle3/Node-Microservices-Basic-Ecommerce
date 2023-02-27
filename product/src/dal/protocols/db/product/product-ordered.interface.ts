export interface IProductOrderedRepository {
  productOrdered: (productId: string) => Promise<void>;
}
