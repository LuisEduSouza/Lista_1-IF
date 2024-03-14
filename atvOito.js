/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Luís Eduardo Novaes
*/
console.clear();
var teclado = require("prompt-sync")();
var angulo1 = parseFloat(teclado("Valor do \u00E2ngulo 1: "));
var angulo2 = parseFloat(teclado("Valor do \u00E2ngulo 2: "));
var angulo3 = parseFloat(teclado("Valor do \u00E2ngulo 3: "));
var somaAngulos = angulo1 + angulo2 + angulo3;
if (somaAngulos == 180) {
    if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo ret\u00E2ngulo");
    }
    else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo obtuso.");
    }
    else {
        console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo agudo.");
    }
}
else {
    console.log("Erro");
}
