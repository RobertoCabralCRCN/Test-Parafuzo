import { Request, Response } from "express";
import { container } from "tsyringe";
import { PaymentToPlateUseCase } from "./PaymentToPlateUseCase";

class PaymentToPlateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const paymentToPlateUseCase = container.resolve(PaymentToPlateUseCase);

    const payment = await paymentToPlateUseCase.execute({
      id: Number(id),
    });

    return response.status(204).send(payment);
  }
}

export { PaymentToPlateController };
