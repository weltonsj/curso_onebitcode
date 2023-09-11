/* # 21 - Exercício 13
## Tic-Tac-Toe / Jogo da Velha

Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

- Deve ser possível incluir os nomes dos dois jogadores;
- O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
- Deve ser possível reiniciar o jogo para jogar novamente. */

let name1 = ''
let name2 = ''
let cont = 0
let player1 = []
let player2 = []

const label = document.getElementById('rp-label-1')
const input = document.getElementById('rp-1')
const playerWinner = document.getElementById('player-winner')
const buttonAdd = document.getElementById('button-add')
const buttonRestart = document.getElementById('button-restart')

input.focus()
buttonRestart.style.display = 'none'
playerWinner.style.display = 'none'

// Adiciona o nome do jogador 1
function addName1() {
  name1 = input.value
  input.value = ''
  label.innerText = 'Jogador 2'
  input.focus()
  return
}

// Adiciona o nome do jogador 2
function addName2() {
  name2 = input.value
  input.value = ''
  label.innerText = 'O Jogo Começou!'
  input.style.display = 'none'
  buttonAdd.style.display = 'none'

  buttonRestart.style.display = 'initial'
  playerWinner.style.display = 'initial'
  return 
}

// Adiciona os Jogadores ao Jogo
buttonAdd.addEventListener('click', () => {
  if (input.value !== '' && label.innerText === 'Jogador 1') {
    addName1()
    return

  } else if (input.value === '' && label.innerText === 'Jogador 1') {
    alert('Informe o nome do Jogador 1')
    input.focus()
    return
  }

  if (input.value !== '' && label.innerText === 'Jogador 2') {
    addName2()
    return

  } else if (input.value === '' && label.innerText === 'Jogador 2') {
    alert('Informe o nome do Jogador 2')
    input.focus()
    return
  }
})

// Cria O no Game Board
function creatNewO() {
  const newO = document.createElement('div')
  newO.className = 'o'
  return newO
}

// Cria X no Game Board
function creatNewX() {
  const newX = document.createElement('div')
  newX.className = 'x'
  return newX
}

// Gameplay
document.querySelectorAll('.square').forEach((ev) => {
  ev.addEventListener('click', (selectedSquare) => {
    if (playerWinner.innerText === `${name1} é o Vencedor!!!`) {
      alert(`${name1} Venceu!!!`)
      return
    } 
    
    else if (playerWinner.innerText === `${name2} é o Vencedor!!!`) {
      alert(`${name2} Venceu!!!`)
      return
    }

    else {
      if (name1 && name2 !== '') {
        if (selectedSquare.target.id !== '') {
          alert('Esse quadro já foi selecionado!')
          return
        }

        if (selectedSquare.target.className === 'x' || selectedSquare.target.className === 'o') {
          alert('Esse quadro já foi selecionado!')
          return

        } else {
          cont += 1
          selectedSquare.target.id = selectedSquare.target.innerText
        }

        if (cont % 2) {
          selectedSquare.target.appendChild(creatNewX())
          playerWinner.innerText = `É a vez de ${name2}...`
          player1.push(selectedSquare.target.id)

        } else {
          selectedSquare.target.appendChild(creatNewO())
          playerWinner.innerText = `É a vez de ${name1}...`
          player2.push(selectedSquare.target.id)
        }

        // As funções que checam o vencedor
        checkChampionPlayer()
        
      } else {
        alert('Porfavor informe os nomes dos Jogadores')
      }
    }
  })
})

buttonRestart.addEventListener('click', () => {
  document.location.reload()
})