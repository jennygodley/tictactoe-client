'use strict'

let gameBoard = ['', '', '', '', '', '', '', '', '', ]

// create function that accepts value and index from events
// push value to gameboard index

const playedMove = function (value, index) {
  gameBoard[index] = value
  console.log(gameBoard)
  winCondition(value)
}

const winCondition = function (value) {
  if ((gameBoard[0] && gameBoard[1] && gameBoard[3]) ||
  (gameBoard[3] === gameBoard[4] === gameBoard[5]) ||
  (gameBoard[6] && gameBoard[7] && gameBoard[8]) ||
  (gameBoard[0] && gameBoard[3] && gameBoard[6]) ||
  (gameBoard[1] && gameBoard[4] && gameBoard[7]) ||
  (gameBoard[2] && gameBoard[5] && gameBoard[8]) ||
  (gameBoard[0] && gameBoard[4] && gameBoard[8]) ||
  (gameBoard[2] && gameBoard[4] && gameBoard[6])) {
    console.log('win')
  }
}

// check for win condition

module.exports = {
  playedMove
}
