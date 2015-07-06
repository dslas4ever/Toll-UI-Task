'use strict';

/**
 * @ngdoc overview
 * @name TollAngulaJsApp
 * @description
 * # TollAngulaJsApp
 *
 * Main module of the application.
 */
angular
  .module('tollAngulaJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/candidate/', {
        templateUrl: 'views/candidate.html',
        controller: 'AboutCtrl'
      })
	  
      .when('/candidate/:id', {
        templateUrl: 'views/candidate.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
