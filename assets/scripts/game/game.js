'use strict'

const ui = require('./ui')
const store = require('./../store')

let gameBoard = ['', '', '', '', '', '', '', '', '']

// create function that accepts value and index from events
// push value to gameboard index

const playedMove = function (value, index) {
  gameBoard[index] = value
  console.log(gameBoard)
  function checkForWin () {
    if ((gameBoard[0] !== ('') && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
    (gameBoard[3] !== ('') && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
    (gameBoard[6] !== ('') && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
    (gameBoard[0] !== ('') && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
    (gameBoard[1] !== ('') && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
    (gameBoard[2] !== ('') && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
    (gameBoard[0] !== ('') && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
    (gameBoard[2] !== ('') && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])) {
      $('#messages').replaceWith('<div id="messages">player ' + store.value + ' wins!</div>')
      $('#reset').html('<button>reset</button>')
    }
  }
  checkForWin()
}

const resetBoard = function () {
  gameBoard = ['', '', '', '', '', '', '', '', '']
}

// check for win condition

module.exports = {
  playedMove,
  resetBoard
}
