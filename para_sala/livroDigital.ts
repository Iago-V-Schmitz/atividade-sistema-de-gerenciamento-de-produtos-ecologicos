import { livro } from "./livro";
 class livroDiginal implements livro{
    titulo: string
    autor: string
    formato:string

    constructor( formato:string , titulo:string, autor:string ){
        this.formato = formato;
        this.autor = autor;
        this.titulo = titulo;

    }
    detalhes(): string {
        return `formato ${this.formato}\n
                titulo ${this.titulo}\n
                autor ${this.autor}
                }`
    }
 }
 const meulivr = new livroDiginal ("pdf" , "Harry pota", "roling")
 meulivr.detalhes