define( [ 'app' ], function(app){

    'use strict';

    app.register.controller("contentController", ["$scope", "$routeParams", "$location", "dataUser", "$timeout", function($scope, $routeParams, $location, dataUser, $timeout) {

        // ===================================================================================
        // Controls access to the root
        $scope.setRoot          = 'root';
        $scope.subFolder        = false;
        $scope.loadSubfolder    = false;
        $scope.getFormat        = '';

        $scope.showSubFolder = function() {
            $scope.getDataClick     = $(this);
            $scope.setDataClick     = $scope.getDataClick[0];
            $scope.nameFolder       = $scope.setDataClick.fl.folder.nameFolder;
            $scope.setRoot          = 'not root';
            $scope.subFolder        = true;
            $scope.loadSubfolder    = true;

            $scope.getSubfolder = $scope.setDataClick.fl;
            $scope.getFormat    = '';
        };

        $scope.goRoot = function(){
            $scope.setRoot          = 'root';
            $scope.subFolder        = false;
            $scope.loadSubfolder    = false;
            $scope.getFormat        = '';
        };

        // ===================================================================================
        // Controls access to the root
        $scope.dblSubfolderClick = function(){
            $scope.loadSubfolder    = false;
            $scope.getDataClick     = '';
            $scope.getDataClick     = $(this);
            $scope.setDataClick     = $scope.getDataClick[0];
            $scope.nameFolder       = $scope.setDataClick.fl2.folder.nameFolder;
            $scope.getSubfolder = $scope.setDataClick.fl2;
            $scope.getFormat    = '';
            $timeout( function(){
                console.log( $scope.nameFolder );
                $scope.loadSubfolder  = true;
            }, 100 )
        };

        // ===================================================================================
        // Controls access to the root
        $scope.getFolderInfo = function(){

            $scope.folderData           = $(this);
            $scope.getLengthFiles       = 0;
            $scope.getLengthsubfolder   = 0;


            if( $scope.folderData[0].fl != undefined ) {
                $scope.setFolderData        = $scope.folderData[0].fl;
                if( $scope.folderData[0].fl.folder.files ) { $scope.getLengthFiles = $scope.folderData[0].fl.folder.files.length; }
                if( $scope.folderData[0].fl.folder.media ) { $scope.getLengthsubfolder   = $scope.folderData[0].fl.folder.media.length; }
                console.log( $scope.getLengthFiles, $scope.getLengthsubfolder );
            }

            if( $scope.folderData[0].fl2    != undefined ) {
                $scope.setFolderData = $scope.folderData[0].fl2;
                if( $scope.folderData[0].fl2.folder.files ) { $scope.getLengthFiles = $scope.folderData[0].fl2.folder.files.length; }
                if( $scope.folderData[0].fl2.folder.media ) { $scope.getLengthsubfolder   = $scope.folderData[0].fl2.folder.media.length; }
                console.log( $scope.getLengthFiles, $scope.getLengthsubfolder );
            }

            if( $scope.folderData[0].rfiles != undefined ) { $scope.setFolderData = $scope.folderData[0].rfiles; }

            if( $scope.folderData[0].files  != undefined ) { $scope.setFolderData = $scope.folderData[0].files; }

            if( $scope.setFolderData.folder != undefined ) { $scope.getFormat = 'folder'; }
            if( $scope.setFolderData.img    != undefined ) { $scope.getFormat = 'img'; }
            if( $scope.setFolderData.video  != undefined ) { $scope.getFormat = 'video'; }
            //console.log( $scope.setFolderData, $scope.getFormat );
        }

    }]);

});
