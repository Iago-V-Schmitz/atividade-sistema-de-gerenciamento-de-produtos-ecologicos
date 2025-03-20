let numero:number = 10;
console.log(numero)

let nome:string = "Angelina";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao (nome:string, idade:number){
    console.log(`Ola eu me chamo ${nome} e tenho ${idade} anos`)
}

const nomeUsuario:string = "Angelina";
const idade:number = 22;
saudacao(nomeUsuario,idade)

//Objeto
const pessoa = {
    nome:"Aline",
    idade:15,
    cidade:"Salvador",
    apresentar: function ():string{
        return `ola meu nome é ${this.nome}, e tenho ${this.idade} e mora na cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a: number , b: number): number{
    return a + b;
}
console.log(somar(12,33))