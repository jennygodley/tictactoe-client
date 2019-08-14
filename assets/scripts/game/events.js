'use strict'

const store = require('../store')
const ui = require('./ui')
const game = require('./game')
let player = 'X'

const onClickBoard = function () {
  store.value = player
  const cellValue = $(event.target).text()
  if (cellValue !== '') {
    $('#messages').text('this space is occupied!')
  } else {
    ui.makeMoveOnBoard()
    store.index = $(event.target).attr('id')
    game.playedMove(store.value, store.index)
    ui.displayMessage()
    if (store.value === 'O') {
      player = 'X'
    } else if (store.value === 'X') {
      player = 'O'
    }
    store.value = player
    game.checkForWin()
    if (game.checkForWin() === true) {
      player = 'X'
    }
  }
}

const onBoardClear = function () {
  game.gameBoard = ['', '', '', '', '', '', '', '', '']
  ui.boardClear()
}

module.exports = {
  onClickBoard,
  player,
  onBoardClear
}
