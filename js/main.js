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
        })
        .when('/setlg', {
            templateUrl:    'views/setlg/setlg.html',
            controller:     ''
        })
        .when('/setplaylist', {
            templateUrl:    'views/setplaylist/setplaylist.html',
            controller:     ''
        })
        .when('/setshcedule', {
            templateUrl:    'views/setschedule/setschedule.html',
            controller:     ''
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

    $scope.userResult   = {},
    $scope.lastPath     = '';

    // ===================================================================================
    // Set JSON data to $scope variable
    dataUser.query().$promise.then(function(data) {
        $scope.userResult = data.user;
        $scope.mediaFiles = data.user.media;
    });

    // ===================================================================================
    // Get path to add and remove active class in the principal menu
    $scope.$on('$routeChangeSuccess', function(e, current, pre) {
        var setPath     = $location.path(),
            subStrPath  = setPath.substring(1);

        if( subStrPath == '' ) { subStrPath = 'content'; }

        $('#' + subStrPath ).addClass('active');

        if( $scope.lastPath != subStrPath && $scope.lastPath != '' ){
                $('#'+$scope.lastPath).removeClass('active');
        }

        $scope.lastPath = subStrPath;
    });

}]);