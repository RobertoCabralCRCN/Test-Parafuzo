import { Parking } from "../../entities/Parking";
import {
  ICreatePark,
  IParkingRepository,
  IUpdatePark,
} from "../interfaces/ParkingRepository.interface";

class FakeParkingRepository implements IParkingRepository {
  private parkings: Parking[] = [];

  async create(data: ICreatePark): Promise<Parking> {
    const parking = new Parking();

    Object.assign(parking, data);

    this.parkings.push(parking);

    return Promise.resolve(parking);
  }

  async findByPlate(plate: string): Promise<Parking> {
    const findedPlate = await this.parkings.find(
      (item) => item.plate === plate
    );
    return Promise.resolve(findedPlate);
  }

  async update(data: IUpdatePark): Promise<Parking> {
    const updatedPlate = await this.parkings.find(
      (item) => item.plate === data.plate
    );

    Object.assign(updatedPlate, {
      id: data.id,
      plate: data.plate,
      paid: data.paid,
      left: data.left,
    });

    return Promise.resolve(updatedPlate);
  }

  async findById(id: number): Promise<Parking> {
    const findedId = await this.parkings.find((item) => item.id === id);
    return Promise.resolve(findedId);
  }
}

export { FakeParkingRepository };
