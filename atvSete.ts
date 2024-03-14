/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let numeroMaca: number = parseFloat(teclado(`Quais maçãs você quer: `));
let precoMaca: number = 0;

if (numeroMaca < 12){
    precoMaca = 0.3;
}
else{
    precoMaca = 0.25;
}

let total: number = 0;
total = precoMaca * numeroMaca;

console.log(`O valor das maçãs são ${total} reais`);