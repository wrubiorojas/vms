define( [ 'app' ], function(app){

    'use strict';

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

});