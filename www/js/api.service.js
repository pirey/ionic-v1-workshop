window.angular.module('starter')
  .factory('api', api)

function api ($http) {
  return {
    get: function (url) {
      return $http({
        method: 'GET',
        url: url
      })
    }
  }
}

api.$inject = ['$http']
