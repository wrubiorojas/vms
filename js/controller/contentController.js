define( [ 'app' ], function(app){

    'use strict';

    app.register.controller("contentController", ["$scope", "$routeParams", "$location", "dataUser", "$timeout", function($scope, $routeParams, $location, dataUser, $timeout) {

        // ===================================================================================
        // Get and show principal subfolder information
        // ===================================================================================
        $scope.setRoot          = 'root';
        $scope.subFolder        = false;
        $scope.loadSubfolder    = false;
        $scope.getFormat        = '';
        $scope.saveFather       = '';
        $scope.dblclickFather   = false;
        $scope.ctrReturnFolder  = 0;
        $scope.getParentFolder  = '';

        $scope.showSubFolder = function() {
            $scope.getDataClick     = $(this);
            $scope.setDataClick     = $scope.getDataClick[0];

            console.log( $scope.setDataClick.fl );

            $scope.saveLastFolder[0]   = $scope.setDataClick.fl;

            $scope.nameFolder       = $scope.setDataClick.fl.folder.nameFolder;

            $scope.dblclickFather   = true;

            $scope.setRoot          = 'not root';
            $scope.subFolder        = true;
            $scope.loadSubfolder    = true;

            $scope.getSubfolder = $scope.setDataClick.fl;
            $scope.getFormat    = '';
            // *******************************************************************************
            // Hide border of form tag
            var getDivContentinfo = $('.form-content-info');
            getDivContentinfo.css({
                'border':                   'none',
                '-webkit-border-radius':    '0',
                '-moz-border-radius':       '0',
                'border-radius':            '0'
            });

        };
        // ===================================================================================
        // Go to root folder and show information
        // ===================================================================================
        $scope.goRoot = function(){
            $scope.setRoot          = 'root';
            $scope.subFolder        = false;
            $scope.loadSubfolder    = false;
            $scope.getFormat        = '';
            // *******************************************************************************
            // Hide border of form tag
            var getDivContentinfo = $('.form-content-info');
            getDivContentinfo.css({
                'border':                   'none',
                '-webkit-border-radius':    '0',
                '-moz-border-radius':       '0',
                'border-radius':            '0'
            });
        };
        // ===================================================================================
        // Get and show dynamically the internal subfoder of folder
        // ===================================================================================
        $scope.ctrObjectFolders = 0;
        $scope.saveLastFolder   = [];

        $scope.dblSubfolderClick = function(){
            $scope.loadSubfolder    = false;
            $scope.dblclickFather   = true;

            $scope.getDataClick     = '';

            if( $scope.ctrReturnFolder == 1 ){
                delete $scope.saveLastFolder[$scope.ctrObjectFolders];
                $scope.ctrObjectFolders--;
                console.log( $scope.ctrObjectFolders );
                $scope.setDataClick     = $scope.saveLastFolder[ ($scope.ctrObjectFolders) ];
                $scope.ctrReturnFolder  = 0;
                console.log( $scope.saveLastFolder.length );

            } else {
                $scope.getDataClick     = $(this);
                $scope.setDataClick     = $scope.getDataClick[0];
                $scope.ctrObjectFolders++;
                $scope.saveLastFolder[$scope.ctrObjectFolders]   = $scope.setDataClick;
            }

            $scope.getSubfolder = $scope.setDataClick.fl2;
            $scope.nameFolder   = $scope.setDataClick.fl2.folder.nameFolder;

            console.log(  $scope.saveLastFolder );

            $scope.getFormat    = '';
            $timeout( function(){
                $scope.loadSubfolder  = true;
            }, 100 );
            // *******************************************************************************
            // Hide border of form tag
            var getDivContentinfo = $('.form-content-info');
            getDivContentinfo.css({
                'border':                   'none',
                '-webkit-border-radius':    '0',
                '-moz-border-radius':       '0',
                'border-radius':            '0'
            });
        };
        // ===================================================================================
        // Get and show de information of folder and files in the right menu
        // ===================================================================================
        $scope.getFolderInfo = function(){
            $scope.folderData           = $(this);
            $scope.getLengthFiles       = 0;
            $scope.getLengthsubfolder   = 0;
            $scope.loadVideoIcon        = 0;

            $('[data-toggle="tooltip"]').tooltip({
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow">asd</div><div class="tooltip-inner"></div></div>'
            });

            if( $scope.folderData[0].fl != undefined ) {
                $scope.setFolderData        = $scope.folderData[0].fl;
                if( $scope.folderData[0].fl.folder.files ) { $scope.getLengthFiles = $scope.folderData[0].fl.folder.files.length; }
                if( $scope.folderData[0].fl.folder.media ) { $scope.getLengthsubfolder   = $scope.folderData[0].fl.folder.media.length; }
            }

            if( $scope.folderData[0].fl2    != undefined ) {
                $scope.setFolderData = $scope.folderData[0].fl2;
                if( $scope.folderData[0].fl2.folder.files ) { $scope.getLengthFiles = $scope.folderData[0].fl2.folder.files.length; }
                if( $scope.folderData[0].fl2.folder.media ) { $scope.getLengthsubfolder   = $scope.folderData[0].fl2.folder.media.length; }
            }

            if( $scope.folderData[0].rfiles != undefined ) { $scope.setFolderData = $scope.folderData[0].rfiles; }

            if( $scope.folderData[0].files  != undefined ) { $scope.setFolderData = $scope.folderData[0].files; }

            if( $scope.setFolderData.folder != undefined ) {
                $scope.getFormat    = 'folder';
                $scope.saveFather   = $scope.setFolderData.folder.nameFolder;
            }

            if( $scope.setFolderData.img    != undefined ) { $scope.getFormat = 'img'; }
            if( $scope.setFolderData.video  != undefined ) {
                $scope.getFormat = 'video';
                checkLoad();
            }


            // *******************************************************************************
            // Show border of form tag
            var getDivContentinfo = $('.form-content-info');
            getDivContentinfo.css({
                'border':                   '1px solid #212121',
                '-webkit-border-radius':    '4px',
                '-moz-border-radius':       '4px',
                'border-radius':            '4px'
            });
        };
        // ===================================================================================
        // Function that verify the state of video in the right menu
        // ===================================================================================
        var checkLoad = function(){
            var getVideoElement = document.getElementById('video-info-folder');
            if( getVideoElement ) {
                var checkState = function () {
                    if (getVideoElement.readyState == 4) { $scope.loadVideoIcon = 1;
                    } else { $timeout(function () { checkState(); }, 100); }
                };
                checkState();
            } else { $timeout(function () { checkLoad(); }, 100); }
        };

        // ===================================================================================
        // Edit and Save change in content Information files
        // ===================================================================================
        $scope.btnEditInformation = function() {
            var getInput = $('.fg-inputs div input');
            getInput.attr('disabled', false);
        };
        $scope.btnSaveInformation = function() {
            var getInput = $('.fg-inputs div input');
            getInput.attr('disabled', true);
        }

        // ===================================================================================
        // Breadcrumb
        // ===================================================================================
        $scope.returnFolder = function(){

            if( $scope.saveLastFolder.length == 1 ){
                $scope.goRoot();
            }
            if( $scope.saveLastFolder.length == 2 && $scope.ctrObjectFolders == 1 ){
                $scope.showSubFolder();
                $scope.ctrReturnFolder  = 1;
            }
            if( $scope.saveLastFolder.length > 1 && $scope.ctrObjectFolders != 1 ){
                $scope.ctrReturnFolder  = 1;
                $scope.dblSubfolderClick();
            }
        };

    }]);

});
