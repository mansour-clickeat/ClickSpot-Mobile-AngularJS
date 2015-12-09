'use strict';

/**
 * @ngdoc function
 * @name clickspotMobileApp.controller:MainCtrl
 * @description
 * # AddRestaurantCtrl
 * Controller of the clickspotMobileApp
 */
angular.module('clickspotMobileApp')
  .controller('AddRestaurantCtrl', function ($scope, $location) {
    
    $scope.user = {};

    $scope.addRestaurant = function(eID)
    {
      if(eID == 0)
      {  
        $location.path('/main');
      }
      else if (eID == 1)
      {
      	  $location.path('/addRestaurant_p1');
      }
      else if (eID == 2)
      {
      	  $location.path('addRestaurant_p2');
      }
      else if (eID == 3)
      {
      	  $location.path('addRestaurant_p3');
      }
    }

    $scope.typeofRestaurant = [
    {
      name: 'Chinois',
      checked: false
    }, 
    {
      name: 'Americain',
      checked: false
    }, 
    {
      name: 'Francais',
      checked: true
    }, 
    {
      name: 'Indien',
      checked: false
    }, 
    {
      name: 'Italien',
      checked: false
    }, 
    {
      name: 'Africain',
      checked: false
    }];

    $scope.typeofProduits = [
    {
      name: 'Bagel',
      checked: false
    }, 
    {
      name: 'Burger',
      checked: false
    }, 
    {
      name: 'Pate',
      checked: true
    }, 
    {
      name: 'Fruit de Mer',
      checked: false
    }, 
    {
      name: 'Boeuf bourgignon',
      checked: false
    }, 
    {
      name: 'Pizza',
      checked: false
    }];


    $scope.updateSelection = function(position, entities)
    {
      angular.forEach(entities, function(option, index) 
      {
        if (position != index)
        {
        	option.checked = false;
        } 
        console.log(option);
      });
    }

  });