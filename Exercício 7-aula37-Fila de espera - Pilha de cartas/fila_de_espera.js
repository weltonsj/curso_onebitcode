// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let listaDeEspera = [];
let emConsulta = [];
let nome = "";
let sair = 0;
do {
  //Tela de Lista de Espera dos Pacientes
  let listaPacientes = "";
  for (let i = 0; i < listaDeEspera.length; i++) {
    listaPacientes += [i + 1] + "º" + " " + listaDeEspera[i] + "\n";
  };
  //Menu de Escolha para Consulta
  let menu = parseFloat(prompt(`Bem-vindo ao consultório Dr.Weltinho.
Lista de Espera
${listaPacientes}    
[1] - Novo Paciente
[2] - Consultar Paciente
[3] - Sair

Paciente em Consulta.
${emConsulta}`));
  // Opções do menu
  switch (menu) {
    case 1:
      nome = prompt("Qual é seu nome?");
      listaDeEspera.push(nome);
      break
    case 2:
      if (listaDeEspera.length > 0) {
        emConsulta = listaDeEspera.shift();
      } else {
        alert("Não há paciente na fila")
        emConsulta = [];
      };
      break
    case 3:
      sair = 3;
      break
    default:
      alert("Erro! Digite uma das opções válida.");
  };
} while (sair != 3);