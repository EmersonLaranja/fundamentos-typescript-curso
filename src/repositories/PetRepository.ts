import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import { Repository } from "typeorm";

export default class PetRepository implements InterfacePetRepository {
  constructor(private repository: Repository<PetEntity>) {}

  createPet(pet: PetEntity): void {
    this.repository.save(pet);
  }

  async listaPets(): Promise<PetEntity[]> {
    return await this.repository.find();
  }

  // async atualizaPet(id: number): PetEntity | Promise<PetEntity> {
  //   const petToUpdate = await this.repository.findOne({ where: { id } });
  //   if (petToUpdate) {
  //     Object.assign(petToUpdate, updatedPet); // Atualiza as propriedades do pet com os novos valores
  //     await this.repository.save(petToUpdate);
  //   }
  //   // Pode adicionar lógica para lidar com o caso em que o pet não é encontrado
  // }

  async deletaPet(id: number): Promise<void> {
    const petToRemove = await this.repository.findOne({ where: { id } });
    if (!petToRemove) {
      throw new Error("Pet não encontrado");
    } else await this.repository.remove(petToRemove);
  }
}
