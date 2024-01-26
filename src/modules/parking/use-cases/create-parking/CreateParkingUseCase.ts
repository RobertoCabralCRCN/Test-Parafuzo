import { inject, injectable } from "tsyringe";
import { IParkingRepository } from "../../repositories/interfaces/ParkingRepository.interface";
import { ICreateParkingRequestDTO } from "./dtos/ICreateParkingRequestDTO";
import { ICreateParkingResponseDTO } from "./dtos/ICreateParkingResponseDTO";
import { AppError } from "../../../../errors/AppError";
import moment from "moment";

@injectable()
class CreateParkingUseCase {
  constructor(
    @inject("ParkingRepository")
    private parkingRepository: IParkingRepository
  ) {}

  private validatePlateFormat(plate: string): boolean {
    const regexPlacaCarro = /^[A-Z]{3}-\d{4}$/;
    return regexPlacaCarro.test(plate);
  }

  async execute(
    input: ICreateParkingRequestDTO
  ): Promise<ICreateParkingResponseDTO> {
    const plate = input.plate.trim().toUpperCase();

    if (!this.validatePlateFormat(plate)) {
      throw new AppError(
        "Formato de placa inválido! O formato correto é ABC-1234.",
        400
      );
    }

    const findByPlate = await this.parkingRepository.checkPlateToLeft(plate);
    if (findByPlate.length > 0) {
      throw new AppError("Veículo ainda permanece no Estacionamento!");
    }

    const createdParking = await this.parkingRepository.create({
      plate,
      paid: false,
      left: false,
      start_time: moment().toDate(),
      end_time: null,
    });

    return createdParking;
  }
}

export { CreateParkingUseCase };
