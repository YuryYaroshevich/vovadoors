'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope) {});

controllers.controller('ExampleCtrl', ['$scope', '$modal', 'examples','$state',
  function($scope, $modal, examples,$state) {

    $scope.examples = examples;
    $scope.exampleRows = [];
    var row = [];
    for (var i in $scope.examples) {
      if ($scope.examples.hasOwnProperty(i)) {
        row.push($scope.examples[i]);
        if (row.length === 4) {
          $scope.exampleRows.push(row);
          row = [];
        }
      }
    }

    $scope.openModal = function(selectedIndex) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '../template/modal/content.html',
        windowTemplateUrl: '../template/modal/window.html',
        controller: 'ExampleModalCtrl',
        resolve: {
          examples: function() {
            return $scope.examples;
          },
          selectedIndex: function() {
            return selectedIndex;
          }
        },
        backdrop: 'static',
      });
    };
  }
]);

controllers.controller('ExampleModalCtrl', ['$scope', '$modalInstance', 'examples', 'selectedIndex',
  function($scope, $modalInstance, examples, selectedIndex) {
    $scope.examples = examples;
    $scope.selectedIndex = selectedIndex;

    $scope.close = function() {
      $modalInstance.close();
    };
  }
]);


controllers.controller('InstrumentCtrl', ['$scope', 'instruments', function($scope, instruments) {
  $scope.instruments = instruments;
  $scope.currentInstrumentIndex = 0;
}]);