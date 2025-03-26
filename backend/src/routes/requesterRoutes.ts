import { Router } from "express";
import { RequesterController } from "../controllers/RequesterController";

const router = Router();
const requesterController = new RequesterController();

router.post("/register", RequesterController.register);
router.post("/newEvent", RequesterController.newEvent);
router.post("/getAllEvents", RequesterController.getAllEvents);

export default router;
