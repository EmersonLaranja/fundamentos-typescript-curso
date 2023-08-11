import express from "express";
import PetController from "../controllers/PetController.js";
const router = express.Router();

router.post("/",PetController.criaPet);
router.get("/",PetController.listaPets);


export default router; 



