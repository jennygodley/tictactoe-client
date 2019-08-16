'use strict'

const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
// const ui = require('./game/ui')

$(() => {
  $('.box').on('click', gameEvents.onClickBoard)
  $('#new-game').on('click', gameEvents.onNewBoard)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#password').on('submit', authEvents.onPassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#get-game').on('click', gameEvents.onGetGame)
})
