/* Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso) */

const nome = prompt("Olá, seja bem-vindo a comparação de velocidade entre veículos, como posso te chamar?");
const escolha = prompt(`Prazer em te conhecer ${nome}, podemos iniciar a comparação agora? [S]IM / [N]ÃO`).toUpperCase();

if (escolha === "SIM" || escolha === "S") {
  const veiculo1 = prompt(`${nome} Por favor insira aqui o nome do primeiro veiculo:`);
  const velVeiculo1 = parseFloat(prompt(`Agora insira a velocidade do veiculo:`));
  const veiculo2 = prompt(`${nome} Agora insira aqui o nome do segundo veiculo:`);
  const velVeiculo2 = parseFloat(prompt(`Insira também a velocidade dele:`));

  if (velVeiculo1 > velVeiculo2) {
    alert(`Opa!!! ${nome} apuramos os dados e o veículo que chega na frente é o ${veiculo1} atingindo uma velocidade de ${velVeiculo1}Km/h`);

  } else if (velVeiculo2 > velVeiculo1) {
    alert(`Opa!!! ${nome} apuramos os dados e o veículo que chega na frente é o ${veiculo2} atingindo uma velocidade de ${velVeiculo2}Km/h`);

  } else if (velVeiculo1 === velVeiculo2) {
    alert(`Opa!!! ${nome} apuramos os dados e tivemos um empate entre os veículos, os dois chegam a exatamente a ${velVeiculo2}Km/h, portanto nenhum chega na frente.`);

  } else {
    alert("Está faltando dados importante finalizar a comparação entre veículos, por favor tente novamente.");
  };

} else if (escolha === "NÃO" || escolha === "NAO" || escolha === "N") {
  alert("Você optou por não continuar agora, tente novamente mais tarde. Bye, Bye!");

} else if (escolha === "") {
  alert("Você não inseriu nenhum dado relevante, tente novamente mais tarde.");
};