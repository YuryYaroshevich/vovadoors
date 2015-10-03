'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('Example', ['$resource',
	function($resource) {
		return $resource('/doors/doors.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}
]);


services.factory('Instrument', ['$resource',
	function($resource) {
		return $resource('/instruments/instr.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}
]);

/*phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);*/

/*services.factory('Examples', ['$resource', '$q',
	function($resource, $q) {
		return function() {
			var delay = $q.defer();
			$resource('/doors/doors.json').get(function(examples) {
				console.log(examples)
				delay.resolve(examples);
			}, function() {
				delay.reject('Unable to load examples.');
			});
			return delay.promise;
		}
	}
]);*/