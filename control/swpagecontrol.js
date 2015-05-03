(function(){
	
	
	var PageController = function($scope){
		$scope.names = ['a','b','c','d'];
		
	};
	

	angular.module('demoApp').controller('PageController',PageController);
	
	
}());