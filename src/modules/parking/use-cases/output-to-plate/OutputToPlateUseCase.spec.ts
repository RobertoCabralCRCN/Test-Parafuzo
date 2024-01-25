import "reflect-metadata";
import { FakeParkingRepository } from "../../repositories/fakes/FakeParkingRepository";
import { AppError } from "../../../../errors/AppError";
import { OutputToPlateUseCase } from "./OutputToPlateUseCase";

let fakeParkingRepository: FakeParkingRepository;
let outputToPlateUseCase: OutputToPlateUseCase;

describe("Output Parking", () => {
  beforeEach(() => {
    fakeParkingRepository = new FakeParkingRepository();
    outputToPlateUseCase = new OutputToPlateUseCase(fakeParkingRepository);

    jest.resetModules();
  });

  it("Should be able to output a parking", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: true,
      left: false,
      start_time: new Date(),
      end_time: new Date(),
    });
    await expect(
      outputToPlateUseCase.execute({
        id: newObj.id,
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to output a parking", async () => {
    await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: new Date(),
    });
    await expect(
      outputToPlateUseCase.execute({
        id: 2,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it("Should be not able to output a parking: (saída sem pagamento)", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: new Date(),
    });
    await expect(
      outputToPlateUseCase.execute({
        id: newObj.id,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
