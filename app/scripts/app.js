'use strict';

/**
 * @ngdoc overview
 * @name clickspotMobileApp
 * @description
 * # clickspotMobileApp
 *
 * Main module of the application.
 */
angular
  .module('clickspotMobileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/addRestaurant_p1', {
        templateUrl: 'views/addRestaurant_p1.html',
        controller: 'AddRestaurantCtrl'
      })
       .when('/addRestaurant_p2', {
        templateUrl: 'views/addRestaurant_p2.html',
        controller: 'AddRestaurantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
