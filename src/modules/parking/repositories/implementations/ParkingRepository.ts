import { Repository, getRepository } from "typeorm";
import { Parking } from "../../entities/Parking";
import {
  ICreatePark,
  IParkingRepository,
  IUpdatePark,
} from "../interfaces/ParkingRepository.interface";

class ParkingRepository implements IParkingRepository {
  private repository: Repository<Parking>;

  constructor() {
    this.repository = getRepository(Parking);
  }

  async create(data: ICreatePark): Promise<Parking> {
    const newParking = this.repository.create({
      plate: data.plate,
      paid: data.paid,
      left: data.left,
      start_time: data.start_time,
      end_time: data.end_time,
    });

    await this.repository.save(newParking);

    return newParking;
  }

  async findById(id: number): Promise<Parking> {
    const findedId = await this.repository.findOne(id);

    return findedId;
  }

  async findByPlate(plate: string): Promise<Parking> {
    const findedPlate = await this.repository.findOne({
      where: { plate },
    });

    return findedPlate;
  }

  async update(data: IUpdatePark): Promise<Parking> {
    return this.repository.save(data);
  }

  async checkPlateToLeft(plate: string): Promise<Parking[]> {
    const verifyToLeft = await this.repository.find({
      where: {
        plate,
        left: false,
      },
    });

    return verifyToLeft;
  }
}

export { ParkingRepository };
