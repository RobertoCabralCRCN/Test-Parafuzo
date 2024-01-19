import { Router } from "express";
import { CreateProducerController } from "../modules/producers/use-cases/create-producer/CreateProducerController";
import { FindAllProducersController } from "../modules/producers/use-cases/find-all-producers/FindAllProducersController";
import { UpdateProducerController } from "../modules/producers/use-cases/update-producer/UpdateProducerController";
import { DeleteProducerController } from "../modules/producers/use-cases/delete-producer/DeleteProducerController";
import { FindByIdController } from "../modules/producers/use-cases/find-by-id/FindByIdController";

const producersRoutes = Router();
const createProducerController = new CreateProducerController();
const findByIdController = new FindByIdController();
const updateProducerController = new UpdateProducerController();
const findAllProducersController = new FindAllProducersController();
const deleteProducerController = new DeleteProducerController();

producersRoutes.post("/", createProducerController.handle);
producersRoutes.get("/:id", findByIdController.handle);
producersRoutes.get("/", findAllProducersController.handle);
producersRoutes.put("/:id", updateProducerController.handle);
producersRoutes.delete("/:id", deleteProducerController.handle);

export { producersRoutes };
