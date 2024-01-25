import { Router } from "express";

import { parkingsRoutes } from "./parking.routes";

const router = Router();

router.use("/parkings", parkingsRoutes);

export { router };
