'use strict';
angular.module('myApp',['ngMaterial','firebase','ngMap','ngRoute','angularMoment'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
})
.config(function($routeProvider){
	$routeProvider
		.when('/view',
			{
				//controller:'barController',
				templateUrl:'view/lineChart2.html'
					})
		.when('/view2',
			{
				//controller:'GraphController',
				templateUrl:'view/gali.html'
		
			})
		.otherwise({ redirectTo:'/view'});

})
.controller('BusInfoCtrl',["$scope" , "$firebaseObject",
	function($scope,$firebaseObject) {
		var falconhRef = new Firebase("https://falconh.firebaseio.com");

		$scope.submitValue = function(){

			console.log($scope.busPrimaryKey);
			$scope.busInfoObj = $firebaseObject(falconhRef.child("vehicleLocation").child($scope.busPrimaryKey));
			//$scope.map.center= [{lat:parseFloat($scope.busInfoObj.Latitude),lng:parseFloat($scope.busInfoObj.Longitude)}];
	//		$scope.markers.push({
	//			latitude: parseFloat($scope.busInfoObj.Latitude),
	//			longitude: parseFloat($scope.busInfoObj.Longitude)
	//		});
	//		console.log($scope.googleMap.markers);
		};

		$scope.toggleBounce = function() {
		      if (this.getAnimation() != null) {
		        this.setAnimation(null);
		      } else {
		        this.setAnimation(google.maps.Animation.BOUNCE);
		      }
		    };



	}]
);







