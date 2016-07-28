define( ['angularAMD'], function(angularAMD){

    'use strict';

    angularAMD.directive("informationFiles", function(){

        return {
            restrict: 'E',
            templateUrl: 'views/content/informationFiles.html',
            replace: true
        }
    });

});