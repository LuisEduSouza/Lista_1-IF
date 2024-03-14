/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var numeroMaca = parseFloat(teclado("Quais ma\u00E7\u00E3s voc\u00EA quer: "));
var precoMaca = 0;
if (numeroMaca < 12) {
    precoMaca = 0.3;
}
else {
    precoMaca = 0.25;
}
var total = 0;
total = precoMaca * numeroMaca;
console.log("O valor das ma\u00E7\u00E3s s\u00E3o ".concat(total, " reais"));
