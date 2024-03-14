/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Luís Eduardo Novaes
*/

console.clear();
const teclado = require (`prompt-sync`)();

let angulo1: number = parseFloat(teclado(`Valor do ângulo 1: `));
let angulo2: number = parseFloat(teclado(`Valor do ângulo 2: `));
let angulo3: number = parseFloat(teclado(`Valor do ângulo 3: `));

let somaAngulos: number = angulo1 + angulo2 + angulo3

if (somaAngulos == 180){
    if(angulo1 == 90 || angulo2== 90 || angulo3 == 90 ){
        console.log(`O triângulo é um triângulo retângulo`);
    }
    else if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90 ){
        console.log(`O triângulo é um triângulo obtuso.`);
    }
    else{
        console.log(`O triângulo é um triângulo agudo.`);
    }
}
else{
        console.log(`Erro`);
    }