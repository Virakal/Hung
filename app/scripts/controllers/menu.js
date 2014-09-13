'use strict';

/**
 * @ngdoc function
 * @name hungApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hungApp
 */
angular.module('hungApp')
  .controller('MenuCtrl', ['$scope', 'Categories', function ($scope, Categories) {
    $scope.categories = Categories;
  }]);
