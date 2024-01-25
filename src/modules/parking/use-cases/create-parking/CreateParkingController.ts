import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateParkingUseCase } from "./CreateParkingUseCase";

class CreateParkingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { plate } = request.body;
    const createParkingUseCase = container.resolve(CreateParkingUseCase);

    const createdFarm = await createParkingUseCase.execute({
      plate: String(plate),
    });

    return response.status(201).send(createdFarm);
  }
}

export { CreateParkingController };
