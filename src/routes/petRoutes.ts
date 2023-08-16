import express from "express";
import { AppDataSource } from "../config/data-source.js";
import PetController from "../controllers/PetController.js";
import PetRepository from "../repositories/PetRepository.js";

const router = express.Router();

const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity")
);

const petController = new PetController(petRepository);

router.post("/", (req, res) => petController.criaPet(req, res));
router.get("/", (req, res) => petController.listaPets(req, res));
router.get("/", (req, res) => petController.listaPetsPelaEspecie(req, res));
router.put("/", (req, res) => petController.atualizaPet(req, res));
router.delete("/", (req, res) => petController.deletaPet(req, res));

export default router;
