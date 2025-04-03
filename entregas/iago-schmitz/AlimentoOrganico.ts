import { ProdutoEcologico } from "./ProdutoEcologico";
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date
    ingredientes: string[]

    constructor(nome:string, preco:number, dataValidade: Date, ingredientes:string[]){
        this.nome = nome
        this.preco = preco
        this.dataValidade = dataValidade
        this.ingredientes = ingredientes
    }
    exibir():void{
        console.log(`nome: ${this.nome} preco: ${this.preco} data validade: ${this.dataValidade} ingredientes: ${this.ingredientes}`)
    }
}

const aliemnto = new AlimentoOrganico("Doritos",20,new Date("2025-02-20"), ["Arroz","Cebola", "Farinha"])
aliemnto.exibir()