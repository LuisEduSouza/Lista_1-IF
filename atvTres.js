/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var vogalA = "a";
var vogalE = "e";
var vogalI = "i";
var vogalO = "o";
var vogalU = "u";
var letra = teclado("Digite uma letra: ");
if (letra == vogalA || letra == vogalE || letra == vogalI || letra == vogalO || letra == vogalU) {
    console.log("a letra ".concat(letra, " \u00E9  uma vogal"));
}
else {
    console.log("a letra ".concat(letra, " \u00E9 uma consoante"));
}
