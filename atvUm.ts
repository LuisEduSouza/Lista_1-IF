/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

const pi : number =  3.14159;
let raio : number = parseFloat(teclado(`Digite o raio: `));
let altura: number = parseFloat(teclado(`Digite a altura: `));

let volumaLata: number = (pi * (raio * raio) * altura);
console.log(`O volume da lata é ${volumaLata}`);
