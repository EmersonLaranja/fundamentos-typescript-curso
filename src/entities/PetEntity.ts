import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class PetEntity {
  @PrimaryColumn({generated: "increment"})
  id:number;
  nome: string;
  idade: number;
  especie: string;
  descricao?: string;
  adotado:boolean;
  abrigo_id?:number;
  vacinas?:string[];

  constructor(id:number, nome: string, idade: number, especie: string, adotado=false, descricao?: string,  abrigo_id?:number) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
    this.adotado = adotado;
    this.descricao = descricao;
    this.abrigo_id = abrigo_id;
  }

};

