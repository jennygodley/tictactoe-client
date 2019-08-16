'use strict'

const store = require('./../store')
const gameEvents = require('./../game/events')

$('.game-board').hide()
$('.signed-in-options').hide()

const signUpSuccess = function () {
  $('#signup_message').text('signed up successfully!').delay(1000).fadeOut()
  $('#signup_message').removeClass()
  $('#signup_message').addClass('success')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#signup_message').text('sign-up failed!').delay(1000).fadeOut()
  $('#signup_message').removeClass()
  $('#signup_message').addClass('failure')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#signin_message').text('signed in successfully!').delay(1000).fadeOut()
  $('#signin_message').removeClass()
  $('#signin_message').addClass('success')
  $('#toggle').toggle()
  $('.game-board').show()
  gameEvents.onNewBoard()
  $('.signed-in-options').show()
  $('.sign-in-sign-up').hide(500)
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#signin_message').text('sign in failed!').delay(1000).fadeOut()
  $('#signin_message').removeClass()
  $('#signin_message').addClass('failure')
  console.error('signInFailure ran')
}

const passwordSuccess = function () {
  $('#password_message').text('password changed!').delay(1000).fadeOut()
  $('#password_message').removeClass()
  $('#password_message').addClass('success')
  $('#password').trigger('reset')
}

const passwordFailure = function () {
  $('#password_message').text('password not changed!').delay(1000).fadeOut()
  $('#password_message').removeClass()
  $('#password_message').addClass('failure')
  console.error('passwordFailure ran')
}

const signOutSuccess = function () {
  store.user = null
  $('#signout_message').text('signed out!').delay(1000).fadeOut()
  $('#signout_message').removeClass()
  $('#signout_message').addClass('success')
  $('#toggle').toggle()
  $('.game-board').hide(500)
  $('#messages').hide(500)
  $('#new-game').hide(500)
  $('.signed-in-options').hide(500)
  $('.sign-in-sign-up').show()
}

const signOutFailure = function () {
  $('#signout_message').text('sign out failed!').delay(1000).fadeOut()
  $('#signout_message').removeClass()
  $('#signout_message').addClass('failure')
  console.error('signOutFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordSuccess,
  passwordFailure,
  signOutSuccess,
  signOutFailure
}
