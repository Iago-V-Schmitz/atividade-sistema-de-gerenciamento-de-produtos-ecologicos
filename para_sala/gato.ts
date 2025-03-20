import { animal } from "./animal";
class gato implements animal{
    nome:string
    idade:number
    raca:string

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;

    }
    som(): void {
        console.log("Miu Miu carai")
    }

}
const gatinho = new gato("miaia", 3 , "Frajola")
gatinho.som