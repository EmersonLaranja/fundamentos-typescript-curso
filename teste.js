class Pet {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }
}


class PetController {
  criaPet(nome, idade, especie, cpf) {
    const novoPet = new Pet();
    novoPet.nome = nome;
    novoPet.idade = idade;
    novoPet.especie = especie;
    novoPet.cpf = cpf; //! retornar undefined
    listaDePets.push(novoPet);
  }
}

const listaDePets = [];
const petController = new PetController();
petController.criaPet("Felix", 2, "gato");
console.log(listaDePets);