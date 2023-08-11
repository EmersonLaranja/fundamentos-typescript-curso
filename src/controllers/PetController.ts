import { Request, Response } from "express";
import type TipoPet  from "../types/Pet";

const listaDePets: Array<TipoPet> = [];
class PetController{
  
  criaPet(req:Request,res:Response){
    const {id,descricao,nome,idade,especie,adotado}=req.body;
    // const novoPet:Pet={id,nome,idade,especie,adotado}; //mostrar que sem descricao funciona
    const novoPet:TipoPet={id,nome,idade,especie,descricao,adotado};
    listaDePets.push(novoPet);
    console.log(novoPet)
    return res.json(novoPet.adotado);
  }

  listaPets(req:Request,res:Response) {
    return res.json(listaDePets);
  }

  listaPetPelaEspecie(req:Request,res:Response){
    const {animalProcurado}=req.params;
    const petProcurado=listaDePets.find((pet:TipoPet)=>{
      if(pet.especie === animalProcurado){
        return res.json(pet);
      }
    })
  
    if(!petProcurado){
      return "pet não encontrado"
    }
    return res.json(petProcurado);
  
  }
  atualizaPet(req:Request,res:Response){
    const {id}=req.params;
    const {nome,idade,especie,descricao,adotado}=req.body;
    const petProcurado=listaDePets.find((pet:TipoPet)=>{
      if(pet.id === Number(id)){
        pet.nome=nome;
        pet.idade=idade;
        pet.especie=especie;
        pet.descricao=descricao;
        pet.adotado=adotado
        return res.json(pet);
      }
    })}
    

  deletaPet(req:Request,res:Response){
    const {id}=req.params;
    const petDeletado=listaDePets.find((pet:TipoPet)=>{
      if(pet.id === Number(id)){
        return res.json(pet);
      }
    })
  
    if(!petDeletado){
      return "pet não encontrado"
    }
    return res.json(petDeletado);
  
  }

}

export default new PetController();