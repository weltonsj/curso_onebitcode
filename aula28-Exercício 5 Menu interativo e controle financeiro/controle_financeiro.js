/* ## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o opcao com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

alert("ATENÇÃO! Para ter acesso aos nossos serviços você precisa efetuar um pequeno cadastro.");
let nome = "";
let senha = "";
let valorInicial = 0;
// Cadastro de nome
while (nome.length === 0) {
  const cadastroNome = prompt("Qual é seu nome?");
  if (cadastroNome.length > 0) {
    nome = cadastroNome;
  } else if (cadastroNome.length === 0) {
    alert("Insira seu nome para continuar.");
  }
};
// Cadastro de senha
while (senha.length === 0) {
  const cadstroSenha = prompt("Digite uma senha:");
  const repetirCadstroSenha = prompt("Repita a senha:");
  if (cadstroSenha === repetirCadstroSenha && cadstroSenha.length > 0 && repetirCadstroSenha.length > 0) {
    senha = cadstroSenha;
  } else {
    alert("As senhas não conferem ou há campo vazio, tente mais tarde!")
  };
};
// Primeiro depósito
while (valorInicial === 0) {
  const deposito = parseFloat(prompt("Valor de depósito"));
  if (typeof (deposito) === "number" && deposito >= 50) {
    const confirmeDeDeposito = confirm(`${nome} Será efetuado o depósito no valor de R$ ${deposito}?`);
    if (confirmeDeDeposito === true) {
      valorInicial = deposito;
      alert("Depósito efetuado com sucesso!");
    } else {
      alert("Ação cancelada pelo usúario.");
    };
  } else {
    alert("Você precisa depósitar no mínimo R$ 50.00 para completar seu cadastro.");
  };
};
alert(`${nome} seu cadastro foi concluído com sucesso!`)
alert(`Iniciando sistema de caixa...`)

let adicionarDinheiro = 0;
let retirarDinheiro = 0;
let opcao = 0;

do {
  let menu = parseFloat(prompt(`Bem vindo ao seu caixa ${nome}.
  Seu saldo atual é de ${new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valorInicial)}
  ------------------------------------
  Use uma das opções para adicionar ou retirar dinheiro.

  1 - Adicionar Dinheiro
  2 - Retirar Dinheiro
  3 - Sair`));

  switch (menu) {
    case 1:
      alert(`Opção ${menu} - Adicionar Dinheiro.`);
      let valorEntrada = prompt("Quanto vai Adicionar?");
      if (valorEntrada.length > 0) {
        valorInicial += parseFloat(valorEntrada);
      } else {
        alert("ERRO! Operação cancelada, valor não informado.");
      };
      break

    case 2:
      alert(`Opção ${menu} - Adicionar Dinheiro.`);
      let valorRetirada = prompt("Quanto vai Adicionar?");
      if (valorRetirada.length > 0) {
        valorInicial -= parseFloat(valorRetirada);
      } else {
        alert("ERRO! Operação cancelada, valor não informado.");
      };
      break

    case 3:
      alert(`Opção ${menu} - Sair Selecionada.`);
      let confirmacao = confirm(`Sistema está sendo encerrado, Aguarde...`);
      if (confirmacao === true) {
        opcao = 3
        break
      } else {
        alert("Ação cancelada pelo usuário. Retornando ao sistema...")
      };
  }
} while (opcao !== 3);
alert("O sistema foi encerrado com sucesso.")