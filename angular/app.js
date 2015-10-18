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
    'services',
    'directives',
    'ui.bootstrap.modal'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/examples', {
        templateUrl: '/views/examples.html',
        controller: 'ExampleCtrl',
        resolve: {
          examples: function(Examples) {
            return Examples();
          }
        }
      })
      .when('/instruments', {
        templateUrl: '/views/instruments.html',
        controller: 'InstrumentCtrl',
        resolve: {
          instruments: function(Instrument) {
            return Instrument.query();
          }
        }
      })
      .when('/about', {
        templateUrl: '/views/certificate.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
