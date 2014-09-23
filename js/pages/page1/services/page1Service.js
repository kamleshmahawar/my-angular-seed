(function(){
   'use strict';
   edh.services.service('page1Service',['$http','$q','backendURLs',function($http,$q,backendURLs){
      this.getData = function(){
      	 return $http.get(backendURLs.ab);
      }

       

   }])

})();