'use strict';

require.config({
    baseUrl: "js",
    paths: {
        'angular': 'vendor/angular/angular.min.js',
        'angular-route': 'vendor/angular/angular-route.min',
        'angular-resource': 'vendor/angular/angular-resource.min',
        'angularAMD': 'vendor/angularAMD/angularAMD.min'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'], 'angular-resource': ['angular'] },
    deps: ['app']
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

    $scope.userResult   = {};
    $scope.lastPath     = '';

    // ===================================================================================
    // Set JSON data to $scope variable
    dataUser.query().$promise.then(function(data) {
        $scope.userResult = data.user;
    });

    console.log( $scope );
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