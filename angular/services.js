'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('Example', ['$resource',
	function ($resource) {
		return $resource('/examples/examples.json');
	}
]);

services.factory('Examples', ['$q', 'Example', 
	function ($q, Example) {
		return function () {
			var delay = $q.defer();
			Example.query(function (examples) {
				delay.resolve(examples);
			});
			return delay.promise;
		};
	}
]);


services.factory('Instrument', ['$resource',
	function ($resource) {
		return $resource('/instruments/instr.json');
	}
]);