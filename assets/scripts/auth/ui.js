'use strict'

let store = require('./../store')

$('.game-board').hide()

const signUpSuccess = function () {
  console.log('signUpSuccess ran')
  $('#signup_message').text('signed up successfully!')
  $('#signup_message').removeClass()
  $('#signup_message').addClass('success')
}

const signUpFailure = function () {
  $('#signup_message').text('sign-up failed!')
  $('#signup_message').removeClass()
  $('#signup_message').addClass('failure')
  console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  // handle storying user data/token, if it exists
  store.user = data.user
  $('#signin_message').text('signed in successfully!')
  $('#signin_message').removeClass()
  $('#signin_message').addClass('success')
  $('#toggle').toggle()
  console.log('signInSuccess ran! User is', store.user)
  $('.game-board').show()
  $('.sign-in-sign-up').hide(500)
}

const signInFailure = function () {
  $('#signin_message').text('sign in failed!')
  $('#signin_message').removeClass()
  $('#signin_message').addClass('failure')
  console.error('signInFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
