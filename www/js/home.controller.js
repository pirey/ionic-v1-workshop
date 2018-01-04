window.angular.module('starter')
.controller('HomeController', function ($scope) {
  $scope.submit = function () {
    window.alert('submit')
  }
  $scope.akun = {
    first: '',
    last: '',
    email: ''
  }
})
