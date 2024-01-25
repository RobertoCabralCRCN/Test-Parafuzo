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

  async execute(
    input: ICreateParkingRequestDTO
  ): Promise<ICreateParkingResponseDTO> {
    const findByPlate = await this.parkingRepository.findByPlate(input.plate);

    if (findByPlate) {
      throw new AppError("Placa já cadastrada!", 401);
    }

    const createdParking = await this.parkingRepository.create({
      plate: input.plate.toUpperCase(),
      paid: false,
      left: false,
      start_time: moment().toDate(),
      end_time: null,
    });

    return createdParking;
  }
}

export { CreateParkingUseCase };
