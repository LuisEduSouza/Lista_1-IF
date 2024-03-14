/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Sua idade?: "));
var peso = parseFloat(teclado("Seu peso?: "));
if (idade >= 18 && idade) {
    if (peso >= 60) {
        console.log("Voc\u00EA pode doar sangue");
    }
    else {
        console.log("Seu peso \u00E9 insuficente para doar sangue");
    }
}
else if (idade < 18 && peso < 60) {
    console.log("Seu peso e sua idade s\u00E3o insuficentes para doar sangue");
}
else {
    console.log("Voc\u00EA n\u00E3o tem idade suficiente para doar sangue");
}
