import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
  createPet(pet: PetEntity): void;
  listaPets(): PetEntity[];
  listaPetsPelaEspecie(especie: string): Array<PetEntity>;
  atualizaPet(id: number): PetEntity;
  deletaPet(id: number): PetEntity;
}
