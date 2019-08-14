'use strict'

const store = require('../store')
// const ui = require('./ui')
const game = require('./game')
let player = 'X'

const onClickBoard = function () {
  const cellValue = $(event.target).text()
  if (cellValue !== '') {
    console.error('already a move here')
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
    console.log(player)
  }
}

module.exports = {
  onClickBoard
}
