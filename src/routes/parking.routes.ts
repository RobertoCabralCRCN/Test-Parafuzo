import { Router } from "express";
import { CreateParkingController } from "../modules/parking/use-cases/create-parking/CreateParkingController";
import { GetByPlateController } from "../modules/parking/use-cases/get-by-plate/GetByPlateController";
import { PaymentToPlateController } from "../modules/parking/use-cases/payment-to-plate/PaymentToPlateController";
import { OutpuToPlateController } from "../modules/parking/use-cases/output-to-plate/OutputToPlateController";

const parkingsRoutes = Router();
const createParkingController = new CreateParkingController();
const getByPlateController = new GetByPlateController();
const paymentToPlateController = new PaymentToPlateController();
const outpuToPlateController = new OutpuToPlateController();

parkingsRoutes.post("/", createParkingController.handle);
parkingsRoutes.get("/:plate", getByPlateController.handle);
parkingsRoutes.put("/:id/pay", paymentToPlateController.handle);
parkingsRoutes.put("/:id/out", outpuToPlateController.handle);

export { parkingsRoutes };
