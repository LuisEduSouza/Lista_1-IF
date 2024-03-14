/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var numero1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var numero2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
var numero3 = parseFloat(teclado("Digite o terceiro n\u00FAmero: "));
if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        console.log("Numeros em ordem crescente: ".concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
    else {
        console.log("Numeros em ordem crescente: ".concat(numero1, ";").concat(numero3, ";").concat(numero2));
    }
}
else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log("Numeros em ordem crescente: ".concat(numero2, ";").concat(numero1, ";").concat(numero3));
    }
    else {
        console.log("Numeros em ordem crescente: ".concat(numero2, ";").concat(numero3, ";").concat(numero1));
    }
}
else {
    if (numero1 <= numero2) {
        console.log("Numeros em ordem crescente: ".concat(numero3, ";").concat(numero1, ";").concat(numero2));
    }
    else {
        console.log("Numeros em ordem crescente: ".concat(numero3, ";").concat(numero2, ";").concat(numero1));
    }
}
