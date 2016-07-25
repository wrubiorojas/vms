define( ['angularAMD'], function(angularAMD){

    'use strict';

    angularAMD.directive("subfolderContent", function(){

        return {
            restrict: 'E',
            templateUrl: 'views/content/contentDirective.html',
            replace: true
        }
    });

});
