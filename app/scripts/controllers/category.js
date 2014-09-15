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

    function selectWord(category) {
    	var words = category.words,
    		toUse = Math.floor(Math.random() * words.length);

    	return words[toUse];
    }

    $scope.category = undefined;

    for (var key in Categories) {
    	category = Categories[key];

    	if (category.slug === toFind) {
    		$scope.category = category;
    		break;
    	}
    }

    $scope.word = selectWord($scope.category);
    $scope.guessed = [];
    $scope.misses = 0;

    $scope.splitWord = $scope.word.split('').map(function (letter) {
    	return {
    		letter: letter.toUpperCase(),
    		revealed: false
    	};
    });

    $scope.reveal = function (letter) {
        var found = 0,
            split = $scope.splitWord;
        letter = letter.toUpperCase();

        for (var key in split) {
            if (letter === split[key].letter) {
                found++;

                split[key].revealed = true;
            }
        }

        if (!found) {
            $scope.misses++;
        }

        return !!found;
    };

    $scope.keyboard = [
        'QWERTYUIOP',
        'ASDFGHJKL',
        'ZXCVBNM'
    ].map(function (row) {
        return row.split('');
    });
  }]);
