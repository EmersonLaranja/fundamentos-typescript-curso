import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
  createPet(pet: PetEntity): void;

  listaPets(): PetEntity[] | Promise<PetEntity[]>;

  // atualizaPet(id: number): PetEntity | Promise<PetEntity>;

  deletaPet(id: number): Promise<void> | void;
}
