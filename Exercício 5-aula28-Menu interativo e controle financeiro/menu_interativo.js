/* ## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado. */

let sistema = parseFloat(prompt(`Deseja iniciar o sistema?
1 - Sim
2 - Não`));

if (sistema === 1) {
  alert(`Iniciando Sistema Por favor aguarde...`);
  confirm(`Sistema iniciado com sucesso!`);
  let opcao = 0;
  do {
    let menu = parseFloat(prompt(`Bem vindo ao Menu Interativo!
    Qual dessas opções você deseja?
    1 - TV
    2 - Filmes
    3 - Séries
    4 - Gravações
    5 - Encerrar`));

    switch (menu) {
      case 1:
        alert(`Opção ${menu} - TV Selecionada.`);
        confirm(`Assistindo TV...`);
        break

      case 2:
        alert(`Opção ${menu} - Filmes Selecionada.`);
        confirm(`Assistindo a Filmes...`);
        break

      case 3:
        alert(`Opção ${menu} - Séries Selecionada.`);
        confirm(`Assistindo a Séries...`);
        break

      case 4:
        alert(`Opção ${menu} - Gravações Selecionada.`);
        confirm(`Procurando Gravações...`);
        break

      case 5:
        alert(`Opção ${menu} - Encerrar Selecionada.`);
        confirm(`Sistema está sendo encerrado... Aguarde.`);
        opcao = 5
        break

      default:
        alert(`Opção inválida!
      escolha uma das opções exibida.`)
    };

  } while (opcao !== 5);

  alert(`Sistema Encerrado com Sucesso! Bye, Bye.`);

} else if (sistema === 2) {
  alert(`Bye, Bye...`);

} else {
  alert(`Digite uma opção válida.`);
};