define( [ 'app' ], function(app){

    'use strict';

    app.register.controller("contentController", ["$scope", "$routeParams", "$location", "dataUser", function($scope, $routeParams, $location, dataUser) {

        // ===================================================================================
        // Controls access to the root
        $scope.setRoot  = 'root';

        $scope.showSubFolder = function() {
            $scope.getDataClick = $(this);
            $scope.setDataClick = $scope.getDataClick[0];
            $scope.nameFolder   = $scope.setDataClick.fl.folder.nameFolder;
            $scope.setRoot  = 'not root';
        };

        $scope.goRoot = function(){
            $scope.setRoot = 'root';
        };


    }]);

});
