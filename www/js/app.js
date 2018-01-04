// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
window.angular.module('starter', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .state('paket', {
        url: '/paket',
        templateUrl: 'templates/paket.html'
      })
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        window.cordova.plugins.Keyboard.disableScroll(true)
      }
      if (window.StatusBar) {
        window.StatusBar.styleDefault()
      }
    })
  })
