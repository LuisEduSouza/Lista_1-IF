/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let vogalA: string = `a`;
let vogalE: string = `e`;
let vogalI: string = `i`;
let vogalO: string = `o`;
let vogalU: string =  `u`;

let letra : string = teclado(`Digite uma letra: `);

if( letra  == vogalA || letra  == vogalE ||letra  == vogalI ||letra  == vogalO || letra  ==vogalU ) {
    console.log(`a letra ${letra} é  uma vogal`);

} 
else {
    console.log(`a letra ${letra} é uma consoante`);
}