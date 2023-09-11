function winner1() {
  alert(`${name1} Venceu!!!`)
  playerWinner.innerText = `${name1} é o Vencedor!!!`
}

function winner2() {
  alert(`${name2} Venceu!!!`)
  playerWinner.innerText = `${name2} é o Vencedor!!!`
}

function gameTied() {
  if (playerWinner.innerText != `${name1} é o Vencedor!!!` && playerWinner.innerText != `${name2} é o Vencedor!!!`) {
    playerWinner.innerText = `Partida Empatada!!!`
    alert(`A Partida Empatou!!! Não há vencedores.`)
    return
  }
}

function checkChampionPlayer() {
  if (player1.includes('1') && player1.includes('2') && player1.includes('3')) {
    colorMark(1, 2, 3)
    winner1()
    return
  } else if (player1.includes('4') && player1.includes('5') && player1.includes('6')) {
    colorMark(4, 5, 6)
    winner1()
    return
  } else if (player1.includes('7') && player1.includes('8') && player1.includes('9')) {
    colorMark(7, 8, 9)
    winner1()
    return
  } else if (player1.includes('1') && player1.includes('4') && player1.includes('7')) {
    colorMark(1, 4, 7)
    winner1()
    return
  } else if (player1.includes('2') && player1.includes('5') && player1.includes('8')) {
    colorMark(2, 5, 8)
    winner1()
    return
  } else if (player1.includes('3') && player1.includes('6') && player1.includes('9')) {
    colorMark(3, 6, 9)
    winner1()
    return
  } else if (player1.includes('1') && player1.includes('5') && player1.includes('9')) {
    colorMark(1, 5, 9)
    winner1()
    return
  } else if (player1.includes('3') && player1.includes('5') && player1.includes('7')) {
    colorMark(3, 5, 7)
    winner1()
    return
    // Player 2
  } else if (player2.includes('1') && player2.includes('2') && player2.includes('3')) {
    colorMark(1, 2, 3)
    winner2()
    return
  } else if (player2.includes('4') && player2.includes('5') && player2.includes('6')) {
    colorMark(4, 5, 6)
    winner2()
    return
  } else if (player2.includes('7') && player2.includes('8') && player2.includes('9')) {
    colorMark(7, 8, 9)
    winner2()
    return
  } else if (player2.includes('1') && player2.includes('4') && player2.includes('7')) {
    colorMark(1, 4, 7)
    winner2()
    return
  } else if (player2.includes('2') && player2.includes('5') && player2.includes('8')) {
    colorMark(2, 5, 8)
    winner2()
    return
  } else if (player2.includes('3') && player2.includes('6') && player2.includes('9')) {
    colorMark(3, 6, 9)
    winner2()
    return
  } else if (player2.includes('1') && player2.includes('5') && player2.includes('9')) {
    colorMark(1, 5, 9)
    winner2()
    return
  } else if (player2.includes('3') && player2.includes('5') && player2.includes('7')) {
    colorMark(3, 5, 7)
    winner2()
    return
  }

  if (cont === 9) {
    gameTied()
    return
  }
}

function colorMark(mark1, mark2, mark3) {
  const square1 = document.querySelector(".sq" + mark1)
  const square2 = document.querySelector(".sq" + mark2)
  const square3 = document.querySelector(".sq" + mark3)
  square1.style.backgroundColor = '#adff2f'
  square1.style.borderColor = '#08cb08'
  square2.style.backgroundColor = '#adff2f'
  square2.style.borderColor = '#08cb08'
  square3.style.backgroundColor = '#adff2f'
  square3.style.borderColor = '#08cb08'

  return mark1, mark2, mark3
}