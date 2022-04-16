import { Specification } from "../entities/Especification";

interface ICreateSpecificationDTO {
  name: string;
  description;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
