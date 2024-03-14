/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Luís Eduardo Novaes Souza
*/


console.clear();
const teclado = require (`prompt-sync`)();

let numero1: number = parseFloat(teclado(`Digite o primeiro número: `));
let numero2: number = parseFloat(teclado(`Digite o segundo número: `));
let numero3: number = parseFloat(teclado(`Digite o terceiro número: `));

if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        console.log(`Numeros em ordem crescente: ${numero1};${numero2};${numero3}`);
    }
    else{
        console.log(`Numeros em ordem crescente: ${numero1};${numero3};${numero2}`);
    } 
} else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log(`Numeros em ordem crescente: ${numero2};${numero1};${numero3}`);
    } else {
        console.log(`Numeros em ordem crescente: ${numero2};${numero3};${numero1}`);
}
} else {
    if (numero1 <= numero2) {
        console.log(`Numeros em ordem crescente: ${numero3};${numero1};${numero2}`);
    }else{
        console.log(`Numeros em ordem crescente: ${numero3};${numero2};${numero1}`);
}
}