'use strict';

/**
 * @ngdoc function
 * @name hungApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hungApp
 */
angular.module('hungApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
