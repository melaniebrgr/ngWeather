angular.module('OWMApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'home.html',
            controller : 'HomeCtrl'
		});
	}])
	.controller('HomeCtrl', function($scope) {});