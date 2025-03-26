import {Router} from "express"; 
import {VoluntaryController} from "../controllers/VoluntaryController";

const router = Router(); 

router.post("/register", VoluntaryController.register);
router.post("/getAllEvents", VoluntaryController.getAllEvents);

export default router;