'use strict'

const store = require('../store')
const ui = require('./ui')
const game = require('./game')
let player = 'X'

const onClickBoard = function () {
  const cellValue = $(event.target).text()
  if (cellValue !== '') {
    $('#messages').text('this space is occupied!')
  } else {
    store.value = player
    store.index = $(event.target).attr('id')
    game.playedMove(store.value, store.index)
    $(event.target).text(player)
    if (player === 'O') {
      player = 'X'
    } else {
      player = 'O'
    }
    $('#messages').text('player ' + player + '\'s turn!')
  }
}

const onReset = function () {
  ui.boardClear
}


module.exports = {
  onClickBoard,
  player
}
