import { OrderStatus } from "@domain/types/orderStatus.type";
import { IAddOrder } from "@domain/use-cases/order-add";
import { IGetProductByID } from "@domain/use-cases/product-get-by-id";
import { IOrderCreatedPublisher } from "@presentation/events/protocols/order-created-publisher.interface";
import {
  badRequest,
  noContent,
  notFound,
  serverError,
} from "@presentation/helpers/http.helper";
import { IController } from "@presentation/protocols/controller.interface";
import { IHttpResponse } from "@presentation/protocols/htttp.interface";
import { IValidation } from "@presentation/protocols/validation.interface";

export class AddOrderController implements IController {
  constructor(
    private readonly validator: IValidation,
    private readonly productRepo: IGetProductByID,
    private readonly orderRepo: IAddOrder,
    private readonly orderCreatedPublisher: IOrderCreatedPublisher
  ) {}

  async handle(request: any): Promise<IHttpResponse> {
    try {
      const { productId: product } = request;
      const error = this.validator.validate(product);
      if (error) {
        return badRequest(error);
      }

      const orderedProduct = await this.productRepo.findById(product);
      if (!orderedProduct) {
        return notFound();
      }
      const order = await this.orderRepo.create({
        product,
        status: OrderStatus.Created,
      });
      this.orderCreatedPublisher.publish({
        orderId: order.id,
        status: OrderStatus.Created,
        product: {
          id: orderedProduct.id,
          name: orderedProduct.name,
          price: orderedProduct.price,
        },
      });

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
