window.angular.module('starter')
  .factory('user', user)

var url = 'http://localhost:4000/users'

function user ($http) {
  return {
    getUsers: function () {
      return $http({
        url: url,
        method: 'GET'
      }).then(function (response) {
        return response.data
      })
    },
    storeUser: function (user) {
      return $http({
        url: url,
        method: 'POST',
        data: user
      }).then(function (response) {
        return response.data
      })
    }
  }
}
