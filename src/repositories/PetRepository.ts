import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import { Repository } from "typeorm";

export default class PetRepository implements InterfacePetRepository {
  constructor(private repository: Repository<PetEntity>) {}

  createPet(pet: PetEntity): void {
    this.repository.save(pet);
  }

  listaPets(): PetEntity[] {
    throw new Error("Method not implemented.");
  }
  listaPetsPelaEspecie(): PetEntity[] {
    throw new Error("Method not implemented.");
  }
  atualizaPet(): PetEntity {
    throw new Error("Method not implemented.");
  }
  deletaPet(): PetEntity {
    throw new Error("Method not implemented.");
  }
}
