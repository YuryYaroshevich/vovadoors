'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

controllers.controller('ExampleCtrl', ['$scope', 'Example', function ($scope, Example) {
    $scope.examples = Example.query();
    console.log($scope.examples); 
}]);


controllers.controller('InstrumentCtrl', ['$scope', 'Instrument', function ($scope, Instrument) {
    $scope.instruments = Instrument.query();
    console.log($scope.instruments);
  }]);

controllers.controller('RecallCtrl', function ($scope) {
    
  });  
  