// import { Request, Response } from "express";
// import Pet from "../models/Pet.js";

// // const listaDePets:string[]=[];
// const listaDePets:Pet[]=[];

// class PetController{
//   criaPet(req:Request,res:Response){
//     const novoPet= new Pet();

//       listaDePets.push(novoPet);
//     return res.json(novoPet);
//   }

//   listaPets(req:Request,res:Response){
//     return res.json(listaDePets);
//   }

//   listaPetPorId(req:Request,res:Response){
//     const {id }= req.params;
//     const petProcurado=listaDePets.find((pet:Pet)=>{
//       if(pet.id === Number(id)){
//         return res.json(pet);
//       }
//     })
  
//     if(!petProcurado){
//       return "pet não encontrado"
//     }
//     return res.json(petProcurado);
  
//   }
// }

// export default new PetController();

import { Request, Response } from "express";

// const listaDePets: Array<{ nome: string; idade: number; especie: string }> = [];
export type Pet = {
  id:number;
  nome: string;
  idade: number;
  especie: string;
};



const listaDePets: Array<Pet> = [];
class PetController{
  
  criaPet(req:Request,res:Response){
    const {nome,idade,especie}=req.body;
    const novoPet={nome,idade,especie}
    listaDePets.push();
    return res.json(novoPet);
  }

  listaPets(req:Request,res:Response) {
    return res.json(listaDePets);
  }

  listaPetPelaEspecie(req:Request,res:Response){
    const {animalProcurado}=req.params;
    const petProcurado=listaDePets.find((pet:Pet)=>{
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
    const {nome,idade,especie}=req.body;
    const petProcurado=listaDePets.find((pet:Pet)=>{
      if(pet.id === Number(id)){
        pet.nome=nome;
        pet.idade=idade;
        pet.especie=especie;
        return res.json(pet);
      }
    })}
    

  deletaPet(req:Request,res:Response){
    const {id}=req.params;
    const petDeletado=listaDePets.find((pet:Pet)=>{
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