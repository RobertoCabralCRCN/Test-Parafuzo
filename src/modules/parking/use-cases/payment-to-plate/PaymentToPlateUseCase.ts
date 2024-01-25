import { inject, injectable } from "tsyringe";
import { IParkingRepository } from "../../repositories/interfaces/ParkingRepository.interface";

import { AppError } from "../../../../errors/AppError";
import { IPaymentToPlateRequestDTO } from "./dtos/IPaymentToPlateRequest.dto";
import moment from "moment";

@injectable()
class PaymentToPlateUseCase {
  constructor(
    @inject("ParkingRepository")
    private parkingRepository: IParkingRepository
  ) {}

  async execute(input: IPaymentToPlateRequestDTO): Promise<void> {
    const findedId = await this.parkingRepository.findById(input.id);

    if (!findedId) {
      throw new AppError("Id Não encontrado!", 404);
    }

    const newObj = Object.assign({
      ...findedId,
      paid: true,
      end_time: moment().toDate(),
    });

    await this.parkingRepository.update(newObj);

    return newObj;
  }
}

export { PaymentToPlateUseCase };
