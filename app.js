// Place the mark X
// Switch Turns with O
// Check for Win on either X or O
// Check for Draw

let currentPlayer = 'X'

let gameActive = true

function switchPlayers() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

//Make it so you cant change the input of the cell after you have entered a mark
document.querySelector('.cell1').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell1').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell1').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell2').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell2').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell2').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell3').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell3').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell3').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell4').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell4').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell4').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell5').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell5').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell5').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell6').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell6').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell6').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell7').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell7').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell7').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell8').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell8').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell8').innerText = currentPlayer
      switchPlayers()
    }
  }
}

document.querySelector('.cell9').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell9').innerText = currentPlayer
      switchPlayers()
    } else {
      document.querySelector('.cell9').innerText = currentPlayer
      switchPlayers()
    }
  }
}
