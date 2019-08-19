'use strict'

const store = require('../store')
const ui = require('./ui')
const api = require('./api')
const game = require('./game')
let player = 'X'

const onClickBoardSolo = function () {
  const cellValue = $(event.target).text()
  if (!store.over === true) {
    if (cellValue !== '') {
      $('#messages').text('this space is occupied')
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

const onClickBoardVsComputer = function () {
  const cellValue = $(event.target).text()
  if (!store.over === true) {
    if (cellValue !== '') {
      $('#messages').text('this space is occupied')
    } else {
      store.index = $(event.target).attr('id').charAt(0)
      store.value = player
      game.playedMove(store.value, store.index)
      ui.makeMoveOnBoard()
      ui.displayMessageVsComputer()
      api.updateGame(store.id, store.index, store.value, store.over)
      if (store.value === 'O') {
        player = 'X'
      } else if (store.value === 'X') {
        player = 'O'
      }
      store.value = player
      game.checkForWinVsComputer()
      if (game.checkForWinVsComputer() === 'win') {
        $('#messages').replaceWith('<div id="messages" class="after-board">you win!</div>')
        $('#new-game-computer').html('<button class="new-game-computer btn btn-outline-info"">new game</button>')
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
  if (store.over === true) {
    return
  }
  if (store.gameBoard[number] === '') {
    store.value = player
    store.index = number
    store.gameBoard[number] = store.value
    ui.computerMakeMoveOnBoard(number)
    api.updateGame(store.id, store.index, store.value, store.over)
  } else {
    computerPlay()
  }
  game.checkForWinVsComputer()
  if (game.checkForWinVsComputer() === 'win') {
    setTimeout(function () {
      $('#messages').replaceWith('<div id="messages" class="after-board">the computer won!</div>')
      $('#new-game-computer').html('<button class="new-game-computer btn btn-outline-info"">new game</button>')
    }, 200)
  } if (game.checkForWinVsComputer() === 'tie') {
    setTimeout(function () {
      $('#messages').replaceWith('<div id="messages" class="after-board">it\'s a tie!</div>')
      $('#new-game-computer').html('<button class="new-game-computer btn btn-outline-info">new game</button>')
    }, 200)
  }
}

const onNewBoard = function () {
  store.singleGames++
  $('.game-board-computer').hide()
  $('.game-board').show()
  player = 'X'
  api.newGame()
    .then(ui.boardClear)
    .catch(ui.newGameFailure)
}

const onNewBoardVsComputer = function () {
  store.computerGames++
  $('.game-board').hide()
  $('.game-board-computer').show()
  player = 'X'
  api.newGame()
    .then(ui.boardClearVsComputer)
    .catch(ui.newGameFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onClickBoardSolo,
  onClickBoardVsComputer,
  player,
  onNewBoard,
  onGetGame,
  onNewBoardVsComputer
}
