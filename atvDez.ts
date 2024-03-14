/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let pergunta1: number = parseFloat(teclado(`Você telefonou para a vítima? (digite 1 para sim e 0 para não): `));
let pergunta2: number = parseFloat(teclado(`Esteve no local do crime? (digite 1 para sim e 0 para não): `));
let pergunta3: number = parseFloat(teclado(`Mora perto da vítima? (digite 1 para sim e 0 para não): `));
let pergunta4: number = parseFloat(teclado(`Devia para a vítima? (digite 1 para sim e 0 para não): `));
let pergunta5: number = parseFloat(teclado(`Já trabalhou com a vítima? (digite 1 para sim e 0 para não): `));

let interrogatorio : number = 0;

if(pergunta1 == 1){
    interrogatorio++;
}
if(pergunta2 == 1){
    interrogatorio++;
}
if(pergunta3 == 1){
    interrogatorio++;
}
if(pergunta4 == 1){
    interrogatorio++;
}
if(pergunta5 == 1){
    interrogatorio++;
}

if(interrogatorio == 2){
    console.log(`Suspeito`);
}
if(interrogatorio == 3 || interrogatorio == 4){
    console.log(`Cúmplice`);
}
if(interrogatorio == 5){
    console.log(`Assassino`);
}
if(interrogatorio == 0){
    console.log(`Inocente`);
}