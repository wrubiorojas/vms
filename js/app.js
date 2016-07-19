define( ['angularAMD', 'angular-route', 'angular-resource' ], function(angularAMD){

    'use strict';

    var vmsApp = angular.module("vmSignage", ['ngRoute', 'ngResource']);

    // =======================================================================================
    // Routes config
    // =======================================================================================
    vmsApp.config( function($routeProvider) {

        $routeProvider
            .when('/', angularAMD.route ({
                templateUrl:    'views/content/content.html',
                controller:     'contentController'
            }))
            .when('/content', angularAMD.route ({
                templateUrl:    'views/content/content.html',
                controller:     'contentController'
            }))
            .when('/setlg', angularAMD.route ({
                templateUrl:    'views/setlg/setlg.html',
                controller:     ''
            }))
            .when('/setplaylist', angularAMD.route ({
                templateUrl:    'views/setplaylist/setplaylist.html',
                controller:     ''
            }))
            .when('/setshcedule', angularAMD.route ({
                templateUrl:    'views/setschedule/setschedule.html',
                controller:     ''
            }));

    });

    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);

});