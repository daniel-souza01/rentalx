import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    car_id,
    user_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    // Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError("Car is unavailable");
    }

    // O aluguel deve ter duração mínima de 24 horas.
    const rentalOPenToUser = await this.rentalsRepository.findOPenRentalByUser(
      user_id
    );

    if (rentalOPenToUser) {
      throw new AppError("There's a rental in progress for user!");
    }

    // Não deve ser possívle cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
  }
}

export { CreateRentalUseCase };
