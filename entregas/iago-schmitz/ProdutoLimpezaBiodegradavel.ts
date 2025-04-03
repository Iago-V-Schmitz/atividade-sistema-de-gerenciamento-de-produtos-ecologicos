import { ProdutoEcologico } from "./ProdutoEcologico";
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
    

    constructor(nome:string, preco:number, volume: number ){
        this.nome = nome
        this.preco = preco
        this.volume = volume
        
    }
    exibir():void{
        console.log(`nome: ${this.nome} preco: ${this.preco} volume: ${this.volume} `)
    }
}

const produto = new ProdutoLimpezaBiodegradavel("Vaporupe",20, 20)
produto.exibir()