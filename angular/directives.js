'use strict';

var directives = angular.module('directives', []);

directives.directive('arrows', [function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="arrow-container">' +
				 	'<a href="javascript:void(0);" class="arrow" ng-click="left()">' +
						'<i class="fa fa-chevron-left fa-2x"></i>' +
					'</a>' +
					'<a href="javascript:void(0);" class="arrow" ng-click="right()">' +
						'<i class="fa fa-chevron-right fa-2x"></i>' +
					'</a>' +
				  '</div>',
		scope: {
			currentItemIndex: '=',
			arrayLength: '@'
		},
		link: function (scope) {
			scope.left = function() {
				scope.$emit('left.arrow.clicked');
				if (scope.currentItemIndex > 0) {
					scope.currentItemIndex--;
				} else {
					scope.currentItemIndex = scope.arrayLength - 1;
				}
			};
			scope.right = function() {
				scope.$emit('right.arrow.clicked');
				if (scope.currentItemIndex < scope.arrayLength - 1) {
					scope.currentItemIndex++;
				} else {
					scope.currentItemIndex = 0;
				}
			};
		}
	};
}]);

directives.directive('collapsableNavbar', [function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			var anchors = $(elem).find('a');
			$.each(anchors, function (i, a) {
				$(a).click(function () {
					$(elem).toggle('slow');
				});
			});
		}
	};
}]);

directives.directive('imageOnLoad', [function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			var img = $(elem).find('img');
			var hidedElems = $('.hide');
			$(img).load(function () {
				$.each(hidedElems, function (i, hided) {			
					$(hided).removeClass('hide');
				});
				$('.spinner').addClass('hide');
			});
			
			var startPreloading = function () {
				$.each(hidedElems, function (i, hided) {			
					$(hided).addClass('hide');
				});
				$('.spinner').removeClass('hide');				
			};
			scope.$on('left.arrow.clicked', function () {
				startPreloading();
			});

			scope.$on('right.arrow.clicked', function () {
				startPreloading();
			});
		}
	};
}]);
