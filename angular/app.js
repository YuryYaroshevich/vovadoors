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
    'controllers',
    'services',
    'directives',
    'ui.bootstrap.modal',
    'ui.bootstrap.collapse',
    'ui.bootstrap.tooltip',
    'ngAnimate',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $tooltipProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .state('examples', {
        //parent: 'root',
        url: '/examples',
        templateUrl: '/views/examples.html',
        controller: 'ExampleCtrl',
        resolve: {
          examples: function(Examples) {
            return Examples();
          }
        }
      })
      .state('instruments', {
        url: '/instruments',
        templateUrl: '/views/instruments.html',
        controller: 'InstrumentCtrl',
        resolve: {
          instruments: function(Instrument) {
            return Instrument.query();
          }
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: '/views/certificate.html'        
      })

      $tooltipProvider.setTriggers({
        'mouseenter': 'mouseleave click',
        'click': 'click',
        'focus': 'blur',
        'never': 'mouseleave'
      });
  });