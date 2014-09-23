(function(){
	'use strict';
	edh.controller('myCtrl1',function($scope,page1Service){
	   $scope.name = "partial1 page1";
	   page1Service.getData().then(function(response){
	   	   $scope.items = response.data;
	   })
	})

})();


