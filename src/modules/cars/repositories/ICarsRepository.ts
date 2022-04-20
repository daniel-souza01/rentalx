import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  created(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
