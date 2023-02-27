import { Subjects } from "@presentation/events/subjects";

export interface IProductCreateEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    price: number;
    name: string;
    description: string;
  };
}
