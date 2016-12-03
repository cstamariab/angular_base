'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')

  .factory('rtmFactory',['$http',function($http) {
    var countries = [
      {name: 'USA',code :'us'},
      {name: 'RU',code :'uk'},
      {name: 'Francia',code :'fr'}
    ];
    return {
      getCountries: function(){
        return countries;
      },
      getPhotos : function(){
        // probando services
        return $http.get('https://jsonplaceholder.typicode.com/photos');
      }
    }
  }]);
