/* ## Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */

const nomeDoTurista = prompt("Qual é seu nome turista?")
let cidades = ""
let cont = 0
let continuar = true
while (continuar === true) {
  let visitouCidade = prompt("Você já visitou alguma cidade? Sim/Não")
  if (visitouCidade === "Sim") {
    let nomeDaCidade = prompt("Qual o nome da cidade?")
    cidades += " - " + nomeDaCidade + "\n"
    cont += 1
  } else if (visitouCidade === "Não") {
    break
  } else {
    alert("Por favor digite uma alternativa válida.")
  }
}
alert(`Nome do turista: ${nomeDoTurista}\nQuantidade de cidades visitadas: ${cont}\nCidades visitadas:\n${cidades}`)