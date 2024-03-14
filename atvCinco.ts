/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let numero1: number = parseFloat(teclado(`Digite o primeiro número: `));
let numero2: number = parseFloat(teclado(`Digite o segundo número: `));

if(numero1 < numero2){
    console.log(`O número maior é ${numero2} e o número menor é ${numero1}`);
}
else if (numero1 == numero2){
    console.log(`Os números ${numero1} e ${numero2} são iguais`);
}
else{
    console.log(`O número maior é ${numero1} e o número menor é ${numero2}`);
}