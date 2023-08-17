import { Request, Response } from "express";
import PetEntity from "../entities/PetEntity.js";
import PetRepository from "../repositories/PetRepository.js";
import { AppDataSource } from "../config/data-source.js";
const listaDePets: Array<PetEntity> = [];
export default class PetController {
  constructor(private repository: PetRepository) {}

  criaPet(req: Request, res: Response) {
    const { id, nome, idade, especie, adotado } = req.body;
    const novoPet = new PetEntity(id, nome, idade, especie, adotado);
    this.repository.createPet(novoPet);

    return res.status(201).json(novoPet);
  }

  async listaPets(req: Request, res: Response) {
    const listaDePets = await this.repository.listaPets();
    return res.json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    this.repository.atualizaPet(Number(id),req.body);
  }

  async deletaPet(req: Request, res: Response) {
    const { id } = req.params;

    const {success,message}=await this.repository.deletaPet(Number(id));
    
    if(!success){
      return res.status(404).json({message});
    }
    return res.sendStatus(204).json(message);
  }
}
