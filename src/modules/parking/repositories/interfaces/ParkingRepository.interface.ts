import { Parking } from "../../entities/Parking";

interface ICreatePark {
  plate: string;
  paid: boolean;
  left: boolean;
  start_time: Date;
  end_time: Date;
}

interface IUpdatePark {
  id: number;
  plate: string;
  paid: boolean;
  left: boolean;
  start_time: Date;
  end_time: Date;
}

interface IParkingRepository {
  create(data: ICreatePark): Promise<Parking>;
  findById(id: number): Promise<Parking>;
  findByPlate(plate: string): Promise<Parking>;
  update(data: IUpdatePark): Promise<Parking>;
}

export { ICreatePark, IParkingRepository, IUpdatePark };
