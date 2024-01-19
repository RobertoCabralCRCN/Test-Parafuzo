import { container } from "tsyringe";
import { IParkingRepository } from "../../modules/parking/repositories/interfaces/ParkingRepository.interface";
import { ParkingRepository } from "../../modules/parking/repositories/implementations/ParkingRepository";

container.registerSingleton<IParkingRepository>(
  "ParkingRepository",
  ParkingRepository
);
