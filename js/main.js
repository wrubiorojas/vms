'use strict';

require.config({
    baseUrl: "js",
    paths: {
        'angular': 'vendor/angular/angular.min',
        'angular-route': 'vendor/angular/angular-route.min',
        'angular-resource': 'vendor/angular/angular-resource.min',
        'angularAMD': 'vendor/angularAMD/angularAMD.min',
        'dataService': 'service/dataService',
        'contentController': 'controller/contentController'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'], 'angular-resource': ['angular'] },
    deps: ['app']
});