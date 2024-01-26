import "reflect-metadata";
import { FakeParkingRepository } from "../../repositories/fakes/FakeParkingRepository";
import { CreateParkingUseCase } from "../create-parking/CreateParkingUseCase";
import { AppError } from "../../../../errors/AppError";

let fakeParkingRepository: FakeParkingRepository;
let createParkingUseCase: CreateParkingUseCase;

describe("Create Parking", () => {
  beforeEach(() => {
    fakeParkingRepository = new FakeParkingRepository();
    createParkingUseCase = new CreateParkingUseCase(fakeParkingRepository);

    jest.resetModules();
  });

  it("Should be able to create a parking", async () => {
    await expect(
      createParkingUseCase.execute({
        plate: "aaa-1234",
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to create a parking", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: null,
    });
    await expect(
      createParkingUseCase.execute({
        plate: newObj.plate,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it("Should be not able to create a parking: (verification plate format)", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-12",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: null,
    });
    await expect(
      createParkingUseCase.execute({
        ...newObj,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
