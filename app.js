// Place the mark X
// Switch Turns with O
// Check for Win on either X or O
// Check for Draw

let currentPlayer = 'Appelsinvand'

let gameActive = true

let gameState = ['', '', '', '', '', '', '', '', '']

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerText = currentPlayer
}
function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target

  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

  handleCellPlayed(clickedCell, clickedCellIndex)
}

//Not my own code
document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleCellClick))
