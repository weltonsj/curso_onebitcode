/* ## Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

// Baralho para comparação de cartas
const baralho = [];
let sair = "";

do {
  // Informações que seram exibidas no menu
  let menu = prompt(`Bem vindo ao Baralho Big
  Baralho ${baralho.length}
  =========================
  [1] - Adicionar uma carta
  [2] - Pucxar uma carta
  [3] - Sair
  =========================`);
  switch (menu) {
    case "1":
      const carta = prompt (`Qual nome da carta?`);
      if (carta.length > 0) {
        baralho.unshift(carta);
        alert(`A carta "${carta}" foi adicionada ao baralho.`);
      } else {
        alert(`Nenhuma carta foi adicionada ao baralho.`);
      };
      break
    case "2":
      if (baralho.length > 0) {
         let cartaRetirada = "";
         cartaRetirada = baralho.shift();
         alert(`A carta "${cartaRetirada}" foi removida do baralho.`);
      } else {
        alert(`Não há carta no baralho.`);
      };
      break
    case "3":
      alert(`Sistema encerrado.`)
      sair = "3";
      break
    default:
      alert("Erro! Opção inválida.");
  };
} while (sair !== "3");