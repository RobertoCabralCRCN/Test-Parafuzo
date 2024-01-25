import "reflect-metadata";
import { FakeParkingRepository } from "../../repositories/fakes/FakeParkingRepository";
import { AppError } from "../../../../errors/AppError";
import { GetByPlateUseCase } from "./GetByPlateUseCase";
import moment from "moment";

let fakeParkingRepository: FakeParkingRepository;
let getByPlateUseCase: GetByPlateUseCase;

describe("Get Parking", () => {
  beforeEach(() => {
    fakeParkingRepository = new FakeParkingRepository();
    getByPlateUseCase = new GetByPlateUseCase(fakeParkingRepository);

    jest.resetModules();
  });

  it("Should be able to get a parking", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: moment().toDate(),
    });
    await expect(
      getByPlateUseCase.execute({
        plate: newObj.plate,
      })
    ).resolves.not.toThrow();
  });

  it("Should be able to get a parking without endtime", async () => {
    const newObj = await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: null,
    });
    await expect(
      getByPlateUseCase.execute({
        plate: newObj.plate,
      })
    ).resolves.not.toThrow();
  });

  it("Should be not able to get a parking", async () => {
    await fakeParkingRepository.create({
      plate: "aaa-1234",
      paid: false,
      left: false,
      start_time: new Date(),
      end_time: moment().toDate(),
    });
    await expect(
      getByPlateUseCase.execute({
        plate: "aaa-1111",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
