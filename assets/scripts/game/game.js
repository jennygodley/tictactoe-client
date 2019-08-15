'use strict'

// const ui = require('./ui')
const store = require('./../store')
// const events = require('./events')

let gameBoard = ['', '', '', '', '', '', '', '', '']

// create function that accepts value and index from events
// push value to gameboard index

const playedMove = function (value, index) {
  gameBoard[index] = value
}

function checkForWin () {
  const tie = gameBoard.some(function (element) {
    if (element === '') return true
  })
  if ((gameBoard[0] !== ('') && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
  (gameBoard[3] !== ('') && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
  (gameBoard[6] !== ('') && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
  (gameBoard[0] !== ('') && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
  (gameBoard[1] !== ('') && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
  (gameBoard[2] !== ('') && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
  (gameBoard[0] !== ('') && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
  (gameBoard[2] !== ('') && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])) {
    return 'win'
  } else if (tie === false) {
    return 'tie'
  } else {
    $('#messages').text('player ' + store.value + '\'s turn!')
  }
}

const resetBoard = function () {
  gameBoard = ['', '', '', '', '', '', '', '', '']
}

module.exports = {
  playedMove,
  resetBoard,
  checkForWin
}
