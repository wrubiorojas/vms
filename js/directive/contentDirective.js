define( ['angularAMD'], function(angularAMD){

    'use strict';

    angularAMD.directive("subfolderContent", function(){

        return {
            restrict: 'E',
            template: '<div>hola mundo </div>',
            replace: false
        }
    });

});
