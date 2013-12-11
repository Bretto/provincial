(function () {
    "use strict";



    var module = angular.module('Globals',[])


    module.value('ngLD', (function(){

        if("_" in window){
            return _;
        }else{
            throw new Error("The Global _ is missing");
        }

    })());





})();










