import { Router } from "express";

import { producersRoutes } from "./producer.routes";


const router = Router();

router.use("/producers", producersRoutes);


export { router };
