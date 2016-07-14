'use strict';

var vmsApp = angular.module("vmSignage", ['ngRoute', 'ngResource']);

// =======================================================================================
// Consume Json with user data
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
vmsApp.controller("userInformation", ["$scope", "dataUser", function($scope, dataUser) {

    $scope.userResult = {};

    dataUser.query().$promise.then(function(data) {
        $scope.userResult = data.user;
    });

}]);