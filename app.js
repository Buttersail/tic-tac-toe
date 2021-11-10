// Place the mark X
// Switch Turns with O
// Check for Win on either X or O
// Check for Draw

let currentPlayer = 'X'

let gameActive = true

document.querySelector('.cell1').onclick = function () {
  if (gameActive) {
    if (currentPlayer === 'X') {
      document.querySelector('.cell1').innerText = currentPlayer
      currentPlayer = 'O'
    } else {
      document.querySelector('.cell1').innerText = currentPlayer
    }
  }
}

document.querySelector('.cell2').onclick = function () {
  document.querySelector('.cell2').innerText = currentPlayer
}

document.querySelector('.cell3').onclick = function () {
  document.querySelector('.cell3').innerText = currentPlayer
}

document.querySelector('.cell4').onclick = function () {
  document.querySelector('.cell4').innerText = currentPlayer
}

document.querySelector('.cell5').onclick = function () {
  document.querySelector('.cell5').innerText = currentPlayer
}

document.querySelector('.cell6').onclick = function () {
  document.querySelector('.cell6').innerText = currentPlayer
}

document.querySelector('.cell7').onclick = function () {
  document.querySelector('.cell7').innerText = currentPlayer
}

document.querySelector('.cell8').onclick = function () {
  document.querySelector('.cell8').innerText = currentPlayer
}

document.querySelector('.cell9').onclick = function () {
  document.querySelector('.cell9').innerText = currentPlayer
}
