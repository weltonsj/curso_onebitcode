/* ## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar. */

alert(`Bem vindo ao robô tabuada!`);
let continuar = false;
let num = "";
while (continuar === false) {
  let numero = prompt(`Digite um número:`);
  if (numero.length > 0) {
    continuar = true;
    num = numero;
  } else {
    alert("Por favor digite um número.")
  };
};
let tabuada = "";
for (let i = 1; i <= 20; i++) {
  tabuada += `${num} x ${i} = ${num * i}\n`;
};
alert(`Tabuada de ${num}\n${tabuada}`);