/*
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir 
a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. 
Em seguida, apresente a quantidade de valores positivos digitados.



let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets();

//TODO: Complete os espaços em branco com uma possível solução para o desafio

}

print(`${quantidadePositivos} valores positivos`);


var numeros = [];
var positivos = [];
var quantidadePositivos = 0;
alert("Preciso que vc Digite 6 numeros: BORA LA")
for (let i=0; i<6; i++) {
    numeros[i] = Number( prompt(`${i} numero`));
  }
  
for (let i = 0; i <6; i++) {
   if (numeros[i] > 0){
       positivos[i] = numeros[i];
       quantidadePositivos = quantidadePositivos + 1;
   } 
}
alert(`Numeros Digitados: ${numeros}`);
alert(`${quantidadePositivos} valores positivos`);
alert(`Os numeros Positivo sao: ${positivos}`);

*/
const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
let setFig = new Set()

for(let i=0; i < numFigCompradas; i++){
    let fig = parseInt(gets());
    
    if ( !setFig.includes(fig) ) {
      setFig.add(fig);
    }
  }
print(numTotal - setFig.size );