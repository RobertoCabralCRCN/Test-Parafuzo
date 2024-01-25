import "reflect-metadata";
import { FakeParkingRepository } from "../../repositories/fakes/FakeParkingRepository";
import { AppError } from "../../../../errors/AppError";
import { PaymentToPlateUseCase } from "./PaymentToPlateUseCase";

let fakeParkingRepository: FakeParkingRepository;
let paymentToPlateUseCase: PaymentToPlateUseCase;

describe("Payment Parking", () => {
  beforeEach(() => {
    fakeParkingRepository = new FakeParkingRepository();
    paymentToPlateUseCase = new PaymentToPlateUseCase(fakeParkingRepository);

    jest.resetModules();
  });

  it("Should be able to pay a parking", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: null,
    });
    await expect(
      paymentToPlateUseCase.execute({
        id: newObj.id,
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to pay a parking", async () => {
    await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: null,
    });
    await expect(
      paymentToPlateUseCase.execute({
        id: 2,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
