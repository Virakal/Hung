'use strict';

/**
 * @ngdoc function
 * @name hungApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hungApp
 */
angular.module('hungApp')
  .controller('SplashCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
