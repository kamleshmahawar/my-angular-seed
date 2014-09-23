(function(){
'use strict';

edh.config(['$routeProvider', function($routeProvider) {
  
$routeProvider.when('/view1', {templateUrl: 'js/pages/page1/partials/page1partial.html', controller: 'myCtrl1'});
 
$routeProvider.when('/view2', {templateUrl: 'js/pages/page2/partials/page2partial.html', controller: 'myCtrl2'});

$routeProvider.when('/view3', {templateUrl: 'js/pages/page3/partials/page3partial.html', controller: 'page3Ctrl'});
  
$routeProvider.otherwise({redirectTo: '/view1'});

}]);

})();