import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetByPlateUseCase } from "./GetByPlateUseCase";

class GetByPlateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { plate } = request.params;
    const getByPlateUseCase = container.resolve(GetByPlateUseCase);

    const findedPlate = await getByPlateUseCase.execute({
      plate: String(plate),
    });

    return response.status(200).send(findedPlate);
  }
}

export { GetByPlateController };
