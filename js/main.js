'use strict';

var vmsApp = angular.module("vmSignage", ['ngRoute', 'ngResource']);

// =======================================================================================
// Routes config
// =======================================================================================
vmsApp.config( function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:    'views/content/content.html',
            controller:     'contentController'
        })
        .when('/content', {
            templateUrl:    'views/content/content.html',
            controller:     'contentController'
        });
});

// =======================================================================================
// Consume JSON with user data
// =======================================================================================
vmsApp.service("dataUser", ["$resource", function($resource) {

    return $resource("data/data.json", {}, {
        query: {
            method: "GET",
            isArray: false
        }
    });

}]);

// =======================================================================================
// Header user config controller
// =======================================================================================
vmsApp.controller("userInformation", ["$scope", "$routeParams", "$location", "dataUser", function($scope, $routeParams, $location, dataUser) {

    $scope.userResult = {};

    dataUser.query().$promise.then(function(data) {
        $scope.userResult = data.user;
    });

    $scope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
    });

}]);