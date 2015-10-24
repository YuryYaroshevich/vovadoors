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
    'ngAnimate',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      /*.state('root', {
        abstract: true,
        params: {isCollapsed: true},
        template: '<ui-view/>'
      })
      */.state('main', {
        //parent: 'root',
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
        //parent: 'root',
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
        //parent: 'root',
        url: '/about',
        templateUrl: '/views/certificate.html'        
      })
  });