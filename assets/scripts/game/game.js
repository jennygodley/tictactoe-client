'use strict'

// const ui = require('./ui')
const store = require('./../store')
const api = require('./api')
// const events = require('./events')

let gameBoard = ['', '', '', '', '', '', '', '', '']
store.gameBoard = gameBoard

const playedMove = function (value, index) {
  store.gameBoard[index] = value
}

function checkForWin () {
  const tie = store.gameBoard.some(function (element) {
    if (element === '') return true
  })
  if ((store.gameBoard[0] !== ('') && store.gameBoard[0] === store.gameBoard[1] && store.gameBoard[0] === store.gameBoard[2]) ||
  (store.gameBoard[3] !== ('') && store.gameBoard[3] === store.gameBoard[4] && store.gameBoard[3] === store.gameBoard[5]) ||
  (store.gameBoard[6] !== ('') && store.gameBoard[6] === store.gameBoard[7] && store.gameBoard[6] === store.gameBoard[8]) ||
  (store.gameBoard[0] !== ('') && store.gameBoard[0] === store.gameBoard[3] && store.gameBoard[0] === store.gameBoard[6]) ||
  (store.gameBoard[1] !== ('') && store.gameBoard[1] === store.gameBoard[4] && store.gameBoard[1] === store.gameBoard[7]) ||
  (store.gameBoard[2] !== ('') && store.gameBoard[2] === store.gameBoard[5] && store.gameBoard[2] === store.gameBoard[8]) ||
  (store.gameBoard[0] !== ('') && store.gameBoard[0] === store.gameBoard[4] && store.gameBoard[0] === store.gameBoard[8]) ||
  (store.gameBoard[2] !== ('') && store.gameBoard[2] === store.gameBoard[4] && store.gameBoard[2] === store.gameBoard[6])) {
    store.over = true
    return 'win'
  } else if (tie === false) {
    store.over = true
    return 'tie'
  } else {
    $('#messages').text('player ' + store.value + '\'s turn!')
    store.over = false
  }
}

module.exports = {
  playedMove,
  checkForWin
}
