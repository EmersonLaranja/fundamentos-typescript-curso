import express from "express";
import PetController from "../controllers/PetController.js";
import PetRepository from "../repositories/PetRepository.js";
import { AppDataSource } from "../config/data-source.js";
import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity.js";

const router = express.Router();

const petRepository = new PetRepository(AppDataSource.getRepository("PetEntity"));
const petController = new PetController(petRepository);

router.post("/",petController.criaPet);
router.get("/",petController.listaPets);
router.get("/",petController.listaPetPelaEspecie);
router.put("/",petController.atualizaPet);
router.delete("/",petController.deletaPet);


export default router; 



