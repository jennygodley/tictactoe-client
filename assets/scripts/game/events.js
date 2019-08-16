'use strict'

const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const game = require('./game')
let player = 'X'

const onClickBoardOriginal = function () {
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
      game.checkForWinVsComputer()
      if (game.checkForWinVsComputer() === 'win') {
        $('#messages').replaceWith('<div id="messages">you win!</div>')
        $('#new-game').html('<button class="btn btn-outline-info"">new game</button>')
      }
      if (!(game.checkForWinVsComputer() === 'win') || (game.checkForWinVsComputer() === 'tie')) {
        computerPlay()
      }
      if (store.value === 'O') {
        player = 'X'
      } else if (store.value === 'X') {
        player = 'O'
      }
      if ((game.checkForWinVsComputer() === 'win') || (game.checkForWinVsComputer() === 'tie')) {
        store.over = true
      }
    }
  }
}
const randomNumber = function () {
  return Math.round(Math.random() * 8)
}

const computerPlay = function () {
  const number = randomNumber()
  if (store.gameBoard[number] === '') {
    store.value = player
    store.index = number
    store.gameBoard[number] = store.value
    ui.computerMakeMoveOnBoard(number)
    // $('#' + number).html('<h2>' + store.value + '</h2>')
    api.updateGame(store.id, store.index, store.value, store.over)
  } else {
    computerPlay()
    game.checkForWinVsComputer()
    if (game.checkForWinVsComputer() === 'win') {
      $('#messages').replaceWith('<div id="messages">the computer won!</div>')
      $('#new-game').html('<button class="btn btn-outline-info"">new game</button>')
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
