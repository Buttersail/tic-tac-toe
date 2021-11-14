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

//Check to see who has won the game, X / O ?
//1. Tjek for om felt 1,2,3 har de samme tegn --- DONE
//2. Tjek for om felt 4,5,6 har de samme tegn
//3. Tjek for om felt 7,8,9 har de samme tegn
//4. Tjek for om felt 1,4,7 har de samme tegn
//5. Tjek for om felt 2,5,8 har de samme tegn
//6. Tjek for om felt 3,6,9 har de samme tegn
//7. Tjek for om felt 1,5,9 har de samme tegn
//8. Tjek for om felt 3,5,7 har de samme tegn
//9. Sig hvem der har vundet
//Giv mulighed for at genstarte spillet (clear board)

document.querySelector('.cell1').onclick = function () {
  if (gameActive && document.querySelector('.cell1').innerText === '') {
    if (currentPlayer === 'X') {
      document.querySelector('.cell1').innerText = currentPlayer
    } else {
      document.querySelector('.cell1').innerText = currentPlayer
    }
    switchPlayers()
  }

  console.log(document.querySelector('.cell1').innerText)
  console.log(document.querySelector('.cell2').innerText)

  if (
    (document.querySelector('.cell1').innerText !== '' &&
      document.querySelector('.cell1').innerText === document.querySelector('.cell2').innerText &&
      document.querySelector('.cell2').innerText === document.querySelector('.cell3').innerText) ||
    (document.querySelector('.cell4').innerText !== '' &&
      document.querySelector('.cell4').innerText === document.querySelector('.cell5').innerText &&
      document.querySelector('.cell5').innerText === document.querySelector('.cell6').innerText)
  ) {
    console.log('Jeg vandt')
  }
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
}
