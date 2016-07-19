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