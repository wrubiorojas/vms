'use strict';

var vmsApp = angular.module("vmSignage", ['ngRoute', 'ngResource']);

// =======================================================================================
// Routes config
// =======================================================================================
vmsApp.config( function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:    'views/content/content.html',
            controller:     'views/content/contentController.js'
        })
        .when('/content', {
            templateUrl:    'views/content/content.html',
            controller:     'views/content/contentController.js'
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
vmsApp.controller("userInformation", ["$scope", "$location", "dataUser", function($scope, $location, dataUser) {

    $scope.userResult = {};

    dataUser.query().$promise.then(function(data) {
        $scope.userResult = data.user;
    });

}]);