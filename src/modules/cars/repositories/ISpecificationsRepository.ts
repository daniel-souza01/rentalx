import { Specification } from "../model/Especification";

interface ICreateSpecificationDTO {
  name: string;
  description;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
