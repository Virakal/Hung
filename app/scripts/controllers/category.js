'use strict';

/**
 * @ngdoc function
 * @name hungApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hungApp
 */
angular.module('hungApp')
  .controller('CategoryCtrl', ['$scope', '$routeParams', 'Categories', function ($scope, $routeParams, Categories) {
    var toFind = $routeParams.category,
    	category;

    $scope.category = undefined;

    for (var key in Categories) {
    	category = Categories[key];

    	if (category.slug === toFind) {
    		$scope.category = category;
    		break;
    	}
    }
  }]);
