class Livro{
    constructor(pNome,pPreco){
            this.Nome = pNome;
            this.Preco = pPreco;
    }

    get Nome(){return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}

    get Preco(){return this.Preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco * pDesconto)/100);
    }
}

var  obj_livro1 = new Livro("Use a cabeça Java",120);
var  obj_livro2 = new Livro("Use a cabeça Java",190);

var lista = [];
lista.push(obj_livro1);
lista.push(obj_livro2);

console.log(lista[0]);
console.log(lista[1]);