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
    console.log(this.repository);

    return res.status(201).json(novoPet);
  }

  listaPets(req: Request, res: Response) {
    const listaDePets = this.repository.listaPets();
    return res.json(listaDePets);
  }

  listaPetsPelaEspecie(req: Request, res: Response) {
    const { especie } = req.params;
    const petProcurado = this.repository.listaPetsPelaEspecie(especie);

    if (!petProcurado) {
      return res.status(404).json({ message: "pet não encontrado" });
    }
    return res.json(petProcurado);
  }
  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, idade, especie, descricao, adotado } = req.body;
    const petProcurado = listaDePets.find((pet: PetEntity) => {
      if (pet.id === Number(id)) {
        pet.nome = nome;
        pet.idade = idade;
        pet.especie = especie;
        pet.descricao = descricao;
        pet.adotado = adotado;
        return res.json(pet);
      }
    });
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const petDeletado = listaDePets.find((pet: PetEntity) => {
      if (pet.id === Number(id)) {
        return res.json(pet);
      }
    });

    if (!petDeletado) {
      return "pet não encontrado";
    }
    return res.json(petDeletado);
  }
}
