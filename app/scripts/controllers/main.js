'use strict';

/**
 * @ngdoc function
 * @name clickspotMobileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickspotMobileApp
 */
angular.module('clickspotMobileApp')
  .controller('MainCtrl', function ($scope, $location) {

    var cities = [
    {
        city : 'Paris',
        desc : 'This is the best city in the world!',
        lat : 48.8566140,
        long : 2.3522219
    },
    {
        city : 'Marseille',
        desc : 'This city is hot!',
        lat : 43.2964820,
        long : 5.3697800
    }
];

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(48.8566140, 2.3522219),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    var i;
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

    $scope.addRestaurant = function(eID)
    {
        $location.path('/addRestaurant_p1');
    }
});;
