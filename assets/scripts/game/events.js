'use strict'

const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const game = require('./game')
let player = 'X'

const onClickBoard = function () {
  const cellValue = $(event.target).text()
  if (!store.over === true) {
    if (cellValue !== '') {
      $('#messages').text('this space is occupied!')
    } else {
      store.index = $(event.target).attr('id')
      store.value = player
      game.playedMove(store.value, store.index)
      ui.makeMoveOnBoard()
      ui.displayMessage()
      api.updateGame(store.id, store.index, store.value, store.over)
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
}

const onNewBoard = function () {
  player = 'X'
  api.newGame()
    .then(ui.boardClear)
    .catch(ui.newGameFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onClickBoard,
  player,
  onNewBoard,
  onGetGame
}
