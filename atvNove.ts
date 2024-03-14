/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let idade: number = parseFloat(teclado(`Sua idade?: `));
let peso: number = parseFloat(teclado(`Seu peso?: `));

if(idade >= 18 && idade ){
    if(peso >= 60){
    console.log(`Você pode doar sangue`);
    }
    else{
    console.log(`Seu peso é insuficente para doar sangue`);
}
}
    else if(idade < 18 && peso < 60 ){
        console.log(`Seu peso e sua idade são insuficentes para doar sangue`);
    }
else {
    console.log(`Você não tem idade suficiente para doar sangue`);
}