(function(){

'use strict';
var edh = angular.module('edh', [
  'ngRoute',
  'edh.filters',
  'edh.services',
  'edh.directives',
  'edh.controllers'
]);

edh.controller = angular.module('edh.controllers',[]).controller;
edh.services = angular.module('edh.services',[]);
edh.directive = angular.module('edh.directives',[]).directive;
edh.filter = angular.module('edh.filters',[]).filter;

window.edh = edh;
})();