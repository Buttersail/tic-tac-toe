// Game state
let currentPlayer = 'X'
let gameActive = true

function switchPlayers() {
  // This is ternary, LEARN IT!
  // currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  document.querySelector('.gameStatus').innerText = 'Player Turn: ' + currentPlayer
}

function gameStatus() {
  if (
    (document.querySelector('.cell1').innerText !== '' &&
      document.querySelector('.cell1').innerText === document.querySelector('.cell2').innerText &&
      document.querySelector('.cell2').innerText === document.querySelector('.cell3').innerText) ||
    (document.querySelector('.cell4').innerText !== '' &&
      document.querySelector('.cell4').innerText === document.querySelector('.cell5').innerText &&
      document.querySelector('.cell5').innerText === document.querySelector('.cell6').innerText) ||
    (document.querySelector('.cell7').innerText !== '' &&
      document.querySelector('.cell7').innerText === document.querySelector('.cell8').innerText &&
      document.querySelector('.cell8').innerText === document.querySelector('.cell9').innerText) ||
    (document.querySelector('.cell1').innerText !== '' &&
      document.querySelector('.cell1').innerText === document.querySelector('.cell4').innerText &&
      document.querySelector('.cell4').innerText === document.querySelector('.cell7').innerText) ||
    (document.querySelector('.cell2').innerText !== '' &&
      document.querySelector('.cell2').innerText === document.querySelector('.cell5').innerText &&
      document.querySelector('.cell5').innerText === document.querySelector('.cell8').innerText) ||
    (document.querySelector('.cell3').innerText !== '' &&
      document.querySelector('.cell3').innerText === document.querySelector('.cell6').innerText &&
      document.querySelector('.cell6').innerText === document.querySelector('.cell9').innerText) ||
    (document.querySelector('.cell1').innerText !== '' &&
      document.querySelector('.cell1').innerText === document.querySelector('.cell5').innerText &&
      document.querySelector('.cell5').innerText === document.querySelector('.cell9').innerText) ||
    (document.querySelector('.cell3').innerText !== '' &&
      document.querySelector('.cell3').innerText === document.querySelector('.cell5').innerText &&
      document.querySelector('.cell5').innerText === document.querySelector('.cell7').innerText)
  ) {
    switchPlayers() // Calling this to print out who won properly.
    document.querySelector('.gameStatus').innerText = 'WINNER: ' + currentPlayer
    gameActive = false
  } else if (
    document.querySelector('.cell1').innerText !== '' &&
    document.querySelector('.cell2').innerText !== '' &&
    document.querySelector('.cell3').innerText !== '' &&
    document.querySelector('.cell4').innerText !== '' &&
    document.querySelector('.cell5').innerText !== '' &&
    document.querySelector('.cell6').innerText !== '' &&
    document.querySelector('.cell7').innerText !== '' &&
    document.querySelector('.cell8').innerText !== '' &&
    document.querySelector('.cell9').innerText !== ''
  ) {
    document.querySelector('.gameStatus').innerText = "It's a draw"
    gameActive = false
  }
}

document.querySelector('.ai').onclick = function () {
  if (!gameActive) return null

  const randomCell = document.querySelector('.cell' + Math.ceil(Math.random() * 9))

  if (randomCell.innerText === '') {
    randomCell.click()
  } else {
    document.querySelector('.ai').onclick()
  }
}

// Bit ugly code, but it does the job!
document.querySelector('.reset').onclick = function () {
  for (let i = 1; i <= 9; i++) {
    document.querySelector('.cell' + i).innerText = ''
  }
  currentPlayer = 'X'
  document.querySelector('.gameStatus').innerText = 'Restarted Game - Cleared Board!'
  gameActive = true
}

for (let i = 1; i <= 9; i++) {
  document.querySelector('.cell' + i).onclick = function () {
    if (!gameActive || document.querySelector('.cell' + i).innerText !== '') return null

    document.querySelector('.cell' + i).innerText = currentPlayer

    switchPlayers()
    gameStatus()
  }
}
