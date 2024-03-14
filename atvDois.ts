/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Luís Eduardo Novaes
*/

console.clear();
const teclado = require (`prompt-sync`)();

let x : number = parseFloat(teclado(`Digite um número para x: `));
let y : number = parseFloat(teclado(`Digite um número para y: `));
let amarzenamentoX : number = x;
let amarzenamentoY : number = y;



console.log(`x é igual a ${x} e y é igual a ${y}`);
console.log(`PAM!! x é igual a ${amarzenamentoY} e y igual a ${amarzenamentoX}`);