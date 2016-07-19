define( [ 'app' ], function(app){

    'use strict';

    app.register.controller("contentController", ["$scope", "$routeParams", "$location", "dataUser", function($scope, $routeParams, $location, dataUser) {

        $scope.algo = "algo por aca";

    }]);

});
