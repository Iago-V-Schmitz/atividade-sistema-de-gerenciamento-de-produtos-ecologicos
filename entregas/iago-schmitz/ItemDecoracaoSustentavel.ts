
import { ProdutoEcologico } from "./ProdutoEcologico";
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string
    dimensoes: { largura: number;
        altura: number;
        profundidade: number;}

    constructor(nome:string, preco:number, material: string, dimensoes:{largura:number, altura:number, profundidade:number}){
        this.nome = nome
        this.preco = preco
        this.material = material
        this.dimensoes = dimensoes
    }
    exibir():void{
        console.log(`nome: ${this.nome} preco: ${this.preco} material: ${this.material} dimensoes: ${this.dimensoes}`)
    }
}

const item = new ItemDecoracaoSustentavel ("Doritos",20, "pedra", {largura:10, altura:30, profundidade:15})
item.exibir()