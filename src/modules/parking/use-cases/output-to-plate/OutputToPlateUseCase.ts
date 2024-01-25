import { inject, injectable } from "tsyringe";
import { IParkingRepository } from "../../repositories/interfaces/ParkingRepository.interface";

import { AppError } from "../../../../errors/AppError";
import { IOutpuToPlateRequestDTO } from "./dtos/IOutputToPlateRequest.dto";

@injectable()
class OutputToPlateUseCase {
  constructor(
    @inject("ParkingRepository")
    private parkingRepository: IParkingRepository
  ) {}

  async execute(input: IOutpuToPlateRequestDTO): Promise<void> {
    const findedId = await this.parkingRepository.findById(input.id);

    if (!findedId) {
      throw new AppError("Veículo Não encontrado!", 404);
    }

    if (findedId.paid === false) {
      throw new AppError(
        "É necessário realizar o pagamento antes da saída!",
        400
      );
    }

    const newObj = Object.assign({
      ...findedId,
      left: true,
    });

    await this.parkingRepository.update(newObj);

    return newObj;
  }
}

export { OutputToPlateUseCase };
