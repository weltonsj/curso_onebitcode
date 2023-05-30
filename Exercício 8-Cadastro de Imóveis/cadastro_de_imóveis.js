/* Cadastro de Imóveis
Escreva um programa em javascript que funcione como um nome de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos. */
const imoveis = [];
let sair = "";

do {
  let menu = prompt(`============== Cadastro de Imóveis ==============
    Total de imóveis cadastrados: ${imoveis.length}\n
    1 - Cadastrar imóvel
    2 - Remover imóvel
    3 - Listar imóveis
    4 - Sair`)
  switch (menu) {
    case "1":
      const imovel = {};
      imovel.tipo = prompt(`Informe o tipo do imóvel`);
      imovel.prepietario = prompt(`Informe o nome do proprietário`);
      imovel.quartos = prompt(`Informe a quantidade de quartos`);
      imovel.banheiros = prompt(`Informe a quantidade de banheiros`);
      imovel.garagem = prompt(`Possui garagem Sim/Não?`);
      const confirmarCadastro = confirm(`Salvar esse imóvel?
      Tipo: ${imovel.tipo}
      Propietario: ${imovel.prepietario}
      Quartos: ${imovel.quartos}
      Banheiro: ${imovel.banheiros}
      Garagem: ${imovel.garagem}`);
      if (confirmarCadastro) {
        imoveis.push(imovel);
        alert(`Inmovél cadastrado com sucesso!`);
      } else {
        alert(`Cadastro cancelado, retornando ao menu...`)
      };
      break
    case "2":
      const confirmarExclusao = confirm(`Atenção essa ação apagara o imóvel e não é reversível.`)
      if (confirmarExclusao) {
        let inmovelParaExclusao = parseFloat(prompt(`Digite o número do imóvel que deseja excluir.`) - 1);
        if (imoveis.length > 0) {
            imoveis.splice(inmovelParaExclusao, 1);
        } else if (!inmovelParaExclusao) {
            alert(`Erro! Você não digitou um número válido`);
        } else {
            alert(`Não há imóvel para excluir.`);
        };
      };
      break
    case "3":
      alert(`Analisando ${imoveis.length} imóveis para serem exibidos.`);
      if (imoveis.length > 0) {
        for (let i = 0; i < imoveis.length; i++) {
        alert(`Imóvel número: ${i + 1}
        Tipo: ${imoveis[i].tipo}
        Propietario: ${imoveis[i].prepietario}
        Quartos: ${imoveis[i].quartos}
        Banheiro: ${imoveis[i].banheiros}
        Garagem: ${imoveis[i].garagem}`);
        };
      } else {
        alert(`Não há imóveis para serem exibidos.`);
      };
      break 
    case "4":
      sair = "4";
      break
    default:
      alert(`Erro! Opção inválida.`);
  };
} while (sair !== "4");