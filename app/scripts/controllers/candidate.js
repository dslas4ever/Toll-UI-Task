'use strict';

/**
 * @ngdoc function
 * @name lasathaAngulaJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lasathaAngulaJsApp
 */
angular.module('tollAngulaJsApp')
  .controller('AboutCtrl', function ($scope,$routeParams) {
	 $scope.candidates=[
		{
			"id":1,
			"name": "James Grice",
			"aaDate": "2015/01/01",
			"email": "jamesg@talentinternational.com.au",
			"address": "111/222, State, Country",
			"state": "VIC",
			"salary": "12345",
			"employed": "No",
			"img": "images/James-Grice.jpg"
		},
		{
			"id":2,
			"name": "Lasantha Perera",
			"aaDate": "2015/01/02",
			"email": "xyz@pqr.com",
			"address": "222/333, State, Country",
			"state": "VIC",
			"salary": "54321",
			"employed": "Yes",
			"cSalary": "12345",
			"img": "images/lasantha-perera.jpg"
		}
	]
	$scope.currentCandidate={};

	if ($routeParams.id == undefined)
	{
		$scope.isCandidateSelected = false;
	}else
	{
		$scope.isCandidateSelected = true;
		$scope.currentCandidate=$scope.candidates[parseInt($routeParams.id)-1];
	}

	$scope.save=function(){
		alert("Ready to save");
	}


  });
