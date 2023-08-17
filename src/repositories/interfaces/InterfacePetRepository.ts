import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
  createPet(pet: PetEntity): void;

  listaPets(): PetEntity[] | Promise<PetEntity[]>;

  atualizaPet(id: number,pet:PetEntity):Promise<{ success: boolean; message?: string }> | PetEntity | Promise<PetEntity>| void;

  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;
}
