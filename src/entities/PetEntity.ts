import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id:number;
  @Column()
   nome: string;
  @Column()
   idade: number;
  @Column()
   especie: string;
  @Column()
   adotado:boolean;
   @Column({nullable:true})
   descricao?: string;
  @Column({nullable:true})
   abrigo_id?:number;
  // @Column()
  //  vacinas?:string[];

 
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

