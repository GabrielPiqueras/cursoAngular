class Calculadora{

    numero:number;

    constructor(valor:number){
        console.log('Iniciando calculadora...')
        this.numero = valor;

        console.log(this.numero)
    } 

    sumar(){
        return this.numero + this.numero;
    }
}

let calA = new Calculadora(10);
let calB = new Calculadora(15);

console.log(calA.sumar)
console.log(calB.sumar)