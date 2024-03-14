/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var numero1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var numero2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
if (numero1 < numero2) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(numero2, " e o n\u00FAmero menor \u00E9 ").concat(numero1));
}
else if (numero1 == numero2) {
    console.log("Os n\u00FAmeros ".concat(numero1, " e ").concat(numero2, " s\u00E3o iguais"));
}
else {
    console.log("O n\u00FAmero maior \u00E9 ".concat(numero1, " e o n\u00FAmero menor \u00E9 ").concat(numero2));
}
