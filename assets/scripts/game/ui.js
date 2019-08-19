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
    if (store.value === 'X') {
      store.xWin++
    } if (store.value === 'O') {
      store.oWin++
    }
  } else if
  ((game.checkForWin() === 'tie') || (game.checkForWinVsComputer() === 'tie')) {
    $('#messages').replaceWith('<div id="messages" class="after-board">it\'s a tie!</div>')
    $('#new-game-solo').html('<button id="new-game-solo" class="btn btn-outline-info">reset</button>')
    store.xoTie++
  }
}

const displayMessageVsComputer = function () {
  if ((game.checkForWin() === 'win') || (game.checkForWinVsComputer() === 'win')) {
    $('#new-game-computer').html('<button id="new-game-computer" class="btn btn-outline-info"">new game</button>')
    if (store.value === 'X') {
      store.youWin++
    } else {
      store.computerWin++
    }
  } else if
  ((game.checkForWin() === 'tie') || (game.checkForWinVsComputer() === 'tie')) {
    $('#messages').replaceWith('<div id="messages" class="after-board">it\'s a tie!</div>')
    $('#new-game-computer').html('<button id="new-game-computer" class="btn btn-outline-info">reset</button>')
    store.computerTie++
  }
}

const newGameFailure = function () {
  $('#messages').replaceWith('<div id="messages" class="after-board">please try again</div>').delay(1000).fadeOut()
}

const getGameSuccess = function (data) {
  $('#get-game-messages').replaceWith('<div id="get-game-messages">all time, you\'ve played ' + data.games.length + ' games!<hr>this session, you\'ve started ' + store.computerGames + ' games against the computer.<br>you\'ve won ' + store.youWin + ' games against the computer.<br>you\'ve lost ' + (store.computerGames - store.youWin - store.computerTie) + ' games against the computer.<br>you\'ve tied ' + store.computerTie + ' games against the computer.<hr>this session, you\'ve started ' + store.singleGames + ' games against yourself.<br>X won ' + store.xWin + ' games.<br>O won ' + store.oWin + ' games.<br>X and O tied ' + store.xoTie + ' games.</div>')
  // setTimeout(() => {
  //   $('#get-game-messages').replaceWith('<div id="get-game-messages"></div>').fadeOut()
  // }, 10000)
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
