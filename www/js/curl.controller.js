window.angular.module('starter')
  .controller('CurlController', CurlController)

function CurlController (api, $scope, $ionicLoading) {
  $scope.akun = {
    nama: '',
    foto: ''
  }

  $scope.ambil = function () {
    $ionicLoading.show()
    var url = 'https://api.github.com/users/pirey'
    api.get(url).then(function (response) {
      var data = response.data
      $scope.akun.nama = data.name
      $scope.akun.foto = data.avatar_url
    }).catch(function (error) {
      console.log(error)
      window.alert('terjadi error')
    }).finally(function () {
      $ionicLoading.hide()
    })
  }
}

CurlController.$inject = ['api', '$scope', '$ionicLoading']
