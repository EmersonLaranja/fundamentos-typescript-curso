type TipoPet = {
  id:number;
  nome: string;
  idade: number;
  especie: string;
  descricao?: string;
  adotado:boolean;
  abrigo_id?:number;
};

export default TipoPet; 