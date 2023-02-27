import { ISearchProductsByName } from "@domain/use-cases/product-search-by-title";
import { noContent, ok, serverError } from "@presentation/helpers/http.helper";
import { IController } from "@presentation/protocols/controller.interface";

export class GetProductsByTitle implements IController {
  constructor(private readonly getPostsByTitleRepo: ISearchProductsByName) {}

  async handle(query: any) {
    try {
      const posts = await this.getPostsByTitleRepo.searchByName(query.title);
      return posts.length ? ok(posts) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
