'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ListaImgCtrl', ['$scope','rtmFactory',
    function($scope,rtmFactory) {

      $scope.countries = rtmFactory.getCountries();

      rtmFactory.getPhotos().then(
        function(response){
          var photos = response.data;
          $scope.photos = photos;
        },
        function(response){
          //error mesage
        }
    );
  }
]);
