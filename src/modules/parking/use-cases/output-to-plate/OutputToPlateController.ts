import { Request, Response } from "express";
import { container } from "tsyringe";
import { OutputToPlateUseCase } from "./OutputToPlateUseCase";

class OutpuToPlateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const outputToPlateUseCase = container.resolve(OutputToPlateUseCase);

    const output = await outputToPlateUseCase.execute({
      id: Number(id),
    });

    return response.status(204).send(output);
  }
}

export { OutpuToPlateController };
