// Place the mark X --- DONE
// Switch Turns with O --- DONE
// Check for Win on either X or O --- DONE(?)
// Check for Draw
// CLear board

let currentPlayer = 'X'

let gameActive = true

function switchPlayers() {
  if (currentPlayer === 'X' && gameActive) {
    currentPlayer = 'O'
    document.querySelector('.gameStatus').innerText = 'Player Turn: ' + currentPlayer
  } else {
    currentPlayer = 'X'
    document.querySelector('.gameStatus').innerText = 'Player Turn: ' + currentPlayer
  }
}

// Current bug:
// It says X won if you click somewhere on the board after O wins
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
    switchPlayers() //Calling this to print out who won properly for now.
    document.querySelector('.gameStatus').innerText = 'WINNER: ' + currentPlayer
    gameActive = false
  }
}

document.querySelector('.cell1').onclick = function () {
  if (gameActive && document.querySelector('.cell1').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell1').innerText = currentPlayer
    } else {
      document.querySelector('.cell1').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell2').onclick = function () {
  if (gameActive && document.querySelector('.cell2').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell2').innerText = currentPlayer
    } else {
      document.querySelector('.cell2').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell3').onclick = function () {
  if (gameActive && document.querySelector('.cell3').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell3').innerText = currentPlayer
    } else {
      document.querySelector('.cell3').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell4').onclick = function () {
  if (gameActive && document.querySelector('.cell4').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell4').innerText = currentPlayer
    } else {
      document.querySelector('.cell4').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell5').onclick = function () {
  if (gameActive && document.querySelector('.cell5').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell5').innerText = currentPlayer
    } else {
      document.querySelector('.cell5').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell6').onclick = function () {
  if (gameActive && document.querySelector('.cell6').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell6').innerText = currentPlayer
    } else {
      document.querySelector('.cell6').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell7').onclick = function () {
  if (gameActive && document.querySelector('.cell7').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell7').innerText = currentPlayer
    } else {
      document.querySelector('.cell7').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell8').onclick = function () {
  if (gameActive && document.querySelector('.cell8').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell8').innerText = currentPlayer
    } else {
      document.querySelector('.cell8').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}

document.querySelector('.cell9').onclick = function () {
  if (gameActive && document.querySelector('.cell9').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell9').innerText = currentPlayer
    } else {
      document.querySelector('.cell9').innerText = currentPlayer
    }
    switchPlayers()
  }
  gameStatus()
}
