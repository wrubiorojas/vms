define( ['angularAMD', 'angular-route', 'angular-resource', 'directive/contentDirective', 'directive/infoFilesDirective' ], function(angularAMD){

    'use strict';

    var app = angular.module("vmSignage", ['ngRoute', 'ngResource']);

    // =======================================================================================
    // Routes config
    // =======================================================================================
    app.config( function($routeProvider) {

        $routeProvider
            .when('/', angularAMD.route ({
                templateUrl:    'views/content/content.html',
                controller:     'contentController',
                controllerUrl:  'controller/contentController'
            }))
            .when('/content', angularAMD.route ({
                templateUrl:    'views/content/content.html',
                controller:     'contentController',
                controllerUrl:  'controller/contentController'
            }))
            .when('/setlg', angularAMD.route ({
                templateUrl:    'views/setlg/setlg.html',
                controller:     '',
                controllerUrl:  ''
            }))
            .when('/setplaylist', angularAMD.route ({
                templateUrl:    'views/setplaylist/setplaylist.html',
                controller:     '',
                controllerUrl:  ''
            }))
            .when('/setshcedule', angularAMD.route ({
                templateUrl:    'views/setschedule/setschedule.html',
                controller:     '',
                controllerUrl:  ''
            }));

    });

    // =======================================================================================
    // Consume JSON with user data
    // =======================================================================================
    app.service("dataUser", ["$resource", function($resource) {

        return $resource("data/data.json", {}, {
            getData: {
                method: "GET",
                isArray: false
            }
        });

    }]);

    // =======================================================================================
    // Header user config controller
    // =======================================================================================
    app.controller("userInformation", ["$scope", "$routeParams", "$location", "dataUser", function($scope, $routeParams, $location, dataUser) {

        $scope.userResult   = {};
        $scope.lastPath     = '';

        // ===================================================================================
        // Set JSON data to $scope variable
        dataUser.getData().$promise.then(function(data) {
            $scope.userResult = data.user;
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

        //borrar esto
        $('.image-link').on('mfpOpen', function(e /*, params */) {
            console.log('Popup opened',  $.magnificPopup.instance);
        });

    }]);

    // Bootstrap Angular when DOM is ready
    angularAMD.bootstrap(app);

    return app;

});