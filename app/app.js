var app = angular.module('ninjaApp', ['ngMaterial']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);