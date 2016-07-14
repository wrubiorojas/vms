'use strict';

var vmsApp = angular.module("vmSignage", ['ngRoute', 'ngResource']);

//
// Consume Json with user data
//
vmsApp.service("dataUser", ["$resource", function($resource) {

    var getUserInformation = $resource("data/data.json", {}, {
        query: {
            method: "GET",
            isArray: false
        }
    });

    return getUserInformation;

}]);