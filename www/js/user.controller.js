window.angular.module('starter')
  .controller('UserController', UserController)

function UserController ($scope, user, $ionicLoading) {
  $scope.users = []
  $scope.newUser = { name: '', email: '' }

  $scope.storeUser = function () {
    $ionicLoading.show()
    user.storeUser($scope.newUser).then(function (users) {
      $scope.users = users
      $scope.newUser = { name: '', email: '' }
    }).catch(function () {
      window.alert('store user: terjadi error')
    }).finally(function () {
      $ionicLoading.hide()
    })
  }

  function init () {
    $ionicLoading.show()
    user.getUsers().then(function (users) {
      $scope.users = users
    }).catch(function () {
      window.alert('fetch users: terjadi error')
    }).finally(function () {
      $ionicLoading.hide()
    })
  }

  init()
}

UserController.$inject = ['$scope', 'user', '$ionicLoading']
