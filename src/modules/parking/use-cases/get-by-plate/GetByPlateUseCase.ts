import { inject, injectable } from "tsyringe";
import { IParkingRepository } from "../../repositories/interfaces/ParkingRepository.interface";

import { AppError } from "../../../../errors/AppError";
import { IGetByPlateRequestDTO } from "./dtos/IGetByPlateRequest.dto";
import { IGetByPlateResponseDTO } from "./dtos/IGetByPlateResponse.dto";
import moment from "moment";

@injectable()
class GetByPlateUseCase {
  constructor(
    @inject("ParkingRepository")
    private parkingRepository: IParkingRepository
  ) {}

  async execute(input: IGetByPlateRequestDTO): Promise<IGetByPlateResponseDTO> {
    const findByPlate = await this.parkingRepository.findByPlate(input.plate);

    if (!findByPlate) {
      throw new AppError("Placa não encontrada!", 404);
    }

    const endTime = findByPlate.end_time
      ? moment(findByPlate.end_time)
      : moment();
    const difference = moment.duration(endTime.diff(findByPlate.start_time));

    const hours = difference.hours();
    const minutes = difference.minutes();
    const seconds = difference.seconds();

    const time = `Permanência: ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

    return { ...findByPlate, time };
  }
}

export { GetByPlateUseCase };
