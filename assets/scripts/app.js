'use strict'

const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
// const ui = require('./game/ui')

$(() => {
  $('.solo').on('click', gameEvents.onClickBoardSolo)
  $('.computer').on('click', gameEvents.onClickBoardVsComputer)
  $('#new-game-solo').on('click', gameEvents.onNewBoard)
  $('#new-game-vs-computer').on('click', gameEvents.onNewBoardVsComputer)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#password').on('submit', authEvents.onPassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#get-game').on('click', gameEvents.onGetGame)
})
