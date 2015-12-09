'use strict';

/**
 * @ngdoc function
 * @name clickspotMobileApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clickspotMobileApp
 */
angular.module('clickspotMobileApp')
  .controller('LoginCtrl', function ($scope, $location) {
    
    $scope.user = {};

    $scope.login = function(user)
    {
    	 $location.path('/main');
    }
   
  });