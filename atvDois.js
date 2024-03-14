/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Luís Eduardo Novaes
*/
console.clear();
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um n\u00FAmero para x: "));
var y = parseFloat(teclado("Digite um n\u00FAmero para y: "));
var amarzenamentoX = x;
var amarzenamentoY = y;
console.log("x \u00E9 igual a ".concat(x, " e y \u00E9 igual a ").concat(y));
console.log("PAM!! x \u00E9 igual a ".concat(amarzenamentoY, " e y igual a ").concat(amarzenamentoX));
