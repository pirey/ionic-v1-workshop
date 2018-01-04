window.angular.module('starter')
.controller('TesController', TesController)

function TesController ($scope) {
  $scope.paket = [
    {
      nama: 'GIG1',
      harga: 1000
    },
    {
      nama: 'GIG-2',
      harga: 2000
    },
    {
      nama: 'GIG-3',
      harga: 3000
    }
  ]
}

TesController.$inject = ['$scope']
