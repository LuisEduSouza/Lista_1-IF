/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var pi = 3.14159;
var raio = parseFloat(teclado("Digite o raio: "));
var altura = parseFloat(teclado("Digite a altura: "));
var volumaLata = (pi * (raio * raio) * altura);
console.log("O volume da lata \u00E9 ".concat(volumaLata));
