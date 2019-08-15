'use strict'

const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const game = require('./game')
let player = 'X'

const onClickBoard = function () {
  const cellValue = $(event.target).text()
  if (cellValue !== '') {
    $('#messages').text('this space is occupied!')
  } else {
    store.index = $(event.target).attr('id')
    store.value = player
    console.log(store.value, ' is store value at onClickBoard')
    game.playedMove(store.value, store.index)
    ui.makeMoveOnBoard()
    ui.displayMessage()
    api.updateGame(store.id, store.index, store.value, store.over)
    console.log(store.id, store.index, store.value, store.over)
    if (store.value === 'O') {
      player = 'X'
    } else if (store.value === 'X') {
      player = 'O'
    }
    store.value = player
    game.checkForWin()
    if ((game.checkForWin() === 'win') || (game.checkForWin() === 'tie')) {
      store.over = true
    }
  }
}

const onNewBoard = function () {
  game.gameBoard = ['', '', '', '', '', '', '', '', '']
  player = 'X'
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onClickBoard,
  player,
  onNewBoard
}
