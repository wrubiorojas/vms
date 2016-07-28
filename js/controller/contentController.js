define( [ 'app' ], function(app){

    'use strict';

    app.register.controller("contentController", ["$scope", "$routeParams", "$location", "dataUser", function($scope, $routeParams, $location, dataUser) {

        // ===================================================================================
        // Controls access to the root
        $scope.setRoot      = 'root';
        $scope.subFolder    = false;

        $scope.showSubFolder = function() {
            $scope.getDataClick = $(this);
            $scope.setDataClick = $scope.getDataClick[0];
            $scope.nameFolder   = $scope.setDataClick.fl.folder.nameFolder;
            $scope.setRoot      = 'not root';
            $scope.subFolder    = true;

            $scope.getSubfolder = $scope.setDataClick.fl;
        };

        $scope.goRoot = function(){
            $scope.setRoot      = 'root';
            $scope.subFolder    = false;
        };

        $scope.getFolderInfo = function(){
            $scope.folderData = $(this);
            console.log( $scope.folderData[0].fl );
        }

    }]);

});
