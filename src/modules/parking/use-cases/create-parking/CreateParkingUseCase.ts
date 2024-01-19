import { inject, injectable } from "tsyringe";
import { IParkingRepository } from "../../repositories/interfaces/ParkingRepository.interface";
import { ICreateParkingRequestDTO } from "./dtos/ICreateParkingRequestDTO";
import { ICreateParkingResponseDTO } from "./dtos/ICreateParkingResponseDTO";
import { AppError } from "../../../../errors/AppError";

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
      throw new AppError("Placa já cadastrada!", 404);
    }

    const createdParking = await this.parkingRepository.create({
      plate: input.plate,
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: new Date(),
      time: new Date(),
    });

    return createdParking;
  }
}
