window.angular.module('starter').controller('IonController', IonController)

function IonController ($scope) {
  $scope.paket = [
    {
      nama: 'GIG-1',
      harga: 2000
    },
    {
      nama: 'GIG-10',
      harga: 2500
    },
    {
      nama: 'GIG-15',
      harga: 2600
    }
  ]
}
