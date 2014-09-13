'use strict';

/**
 * @ngdoc overview
 * @name hungApp
 * @description
 * # hungApp
 *
 * Main module of the application.
 */
angular
  .module('hungApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/category/:category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('Categories', [function () {
    return [
      {
        name: 'Test Category',
        slug: 'test-category',
        words: [
          'Byron',
          'Black'
        ]
      },
      {
        name: 'Test Category 2',
        slug: 'test-category-2',
        words: [
          'Yarp',
          'Narp'
        ]
      },
    ];
  }]);
