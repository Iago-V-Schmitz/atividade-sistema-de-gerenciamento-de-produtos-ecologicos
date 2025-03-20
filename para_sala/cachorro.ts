import { animal } from "./animal";
class cachorro implements animal{
    nome:string
    idade:number
    raca:string

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;

    }
    som(): void {
        console.log("Au Au porra")
    }

}
const gatinho = new cachorro("bob", 3 , "husk")
gatinho.som