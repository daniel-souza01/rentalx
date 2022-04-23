import { Specification } from "../infra/typeorm/entities/Especification";

interface ICreateSpecificationDTO {
  name: string;
  description;
}

interface ISpecificationsRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
