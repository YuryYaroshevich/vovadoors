'use strict';

/**
 * @ngdoc overview
 * @name vovadoorsApp
 * @description
 * # vovadoorsApp
 *
 * Main module of the application.
 */
angular
  .module('vovadoorsApp', [
    'ngResource',
    'ngRoute',
    'controllers',
    'services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExampleCtrl'/*,
        resolve: {
              examples: function(Examples) {
                  return Examples();
              }
        }*/
      })
      .when('/instruments', {
        templateUrl: 'views/instruments.html',
        controller: 'InstrumentCtrl'
      })
      .when('/recalls', {
        templateUrl: 'views/recalls.html',
        controller: 'RecallCtrl'
      })
  });
