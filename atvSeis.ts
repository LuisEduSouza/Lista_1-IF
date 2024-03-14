/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Luís Eduardo Novaes Souza
*/

console.clear();
const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`Digite a primeira nota: `));
let n2: number = parseFloat(teclado(`Digite a segunda nota: `));
let media: number = (n1+n2)/2;

if(media >= 8.5 && media == 10){ 
    console.log(`Nota é A e média é igual a ${media}`);
}
if(media >= 7 && media < 8.5){ 
    console.log(`Nota é B e média é igual a ${media}`);
}
if(media >= 5 && media< 7){ 
    console.log(`Nota é C e média é igual a ${media}`);
}
if(media >= 3 && media < 5){ 
    console.log(`Nota é D e média é igual a ${media}`);
}
if(media < 3){
    console.log(`Nota é E e média é igual a ${media}`);
}
else if (media < 0 && media > 10){
    console.log(`Erro`);
}