import express from "express";
import PetController from "../controllers/PetController.js";
const router = express.Router();

router.post("/",PetController.criaPet);
router.get("/",PetController.listaPets);
router.get("/",PetController.listaPetPelaEspecie);
router.put("/",PetController.atualizaPet);
router.delete("/",PetController.deletaPet);


export default router; 



