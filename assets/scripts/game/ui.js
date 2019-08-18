'use strict'

const store = require('../store')
const game = require('./game')

const boardClear = function (data) {
  $('#new-game-solo').text('')
  $('#new-game-computer').text('')
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  store.game = data.game
  store.id = data.game.id
  store.over = false
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages" class="after-board">player X\'s turn!</div>')
  $('#new-game').html('')
}

const boardClearVsComputer = function (data) {
  $('#new-game-solo').text('')
  $('#new-game-computer').text('')
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  store.game = data.game
  store.id = data.game.id
  store.over = false
  $('.box').text('')
  $('#messages').replaceWith('<div id="messages" class="after-board">your turn!</div>')
  $('#new-game').html('')
}

const makeMoveOnBoard = function () {
  $(event.target).html('<h2>' + store.value + '</h2>')
}

const computerMakeMoveOnBoard = function (number) {
  setTimeout(function () {
    $('#' + number + number).html('<h2>' + 'O' + '</h2>')
  }, 200)
}

const displayMessage = function () {
  if ((game.checkForWin() === 'win') || (game.checkForWinVsComputer() === 'win')) {
    $('#messages').replaceWith('<div id="messages" class="after-board">player ' + store.value + ' wins!</div>')
    $('#new-game-solo').html('<button id="new-game-solo" class="btn btn-outline-info"">new game</button>')
  } else if
  ((game.checkForWin() === 'tie') || (game.checkForWinVsComputer() === 'tie')) {
    $('#messages').replaceWith('<div id="messages" class="after-board">it\'s a tie!</div>')
    $('#new-game-solo').html('<button id="new-game-solo" class="btn btn-outline-info">reset</button>')
  }
}

const displayMessageVsComputer = function () {
  if ((game.checkForWin() === 'win') || (game.checkForWinVsComputer() === 'win')) {
    $('#new-game-computer').html('<button id="new-game-computer" class="btn btn-outline-info"">new game</button>')
  } else if
  ((game.checkForWin() === 'tie') || (game.checkForWinVsComputer() === 'tie')) {
    $('#messages').replaceWith('<div id="messages" class="after-board">it\'s a tie!</div>')
    $('#new-game-computer').html('<button id="new-game-computer" class="btn btn-outline-info">reset</button>')
  }
}

const newGameFailure = function () {
  $('#messages').replaceWith('<div id="messages" class="after-board">please try again!</div>').delay(1000).fadeOut()
}

const getGameSuccess = function (data) {
  console.log(data.games)
  $('#get-game-messages').replaceWith('<div id="get-game-messages">you\'ve played ' + data.games.length + ' games!</div>').delay(1000).fadeOut()
  // let completedGames = 0
  // let unfinishedGames = 0
  // const overGames = function () {
  //   for (let i = 0; i > data.games; i++) {
  //     if (data.games.over === true) {
  //       completedGames++
  //     } else if (data.games.over === false) {
  //       unfinishedGames++
  //     }
  //   }
  // }
  // overGames()
  // const trueOver = data.games.over.values(true)
  // console.log(trueOver)
  // // console.log(data[100].games.over)
  // console.log('unfinishedGames is ', unfinishedGames, 'completedGames is ', completedGames)
}

const getGameFailure = function () {
  $('#get-game-messages').text('something\'s gone wrong!').delay(1000).fadeOut()
}

module.exports = {
  boardClear,
  displayMessage,
  makeMoveOnBoard,
  newGameFailure,
  getGameSuccess,
  getGameFailure,
  computerMakeMoveOnBoard,
  boardClearVsComputer,
  displayMessageVsComputer
}
