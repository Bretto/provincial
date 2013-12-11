(function () {
    "use strict";



    var module = angular.module('Utils',[])


    module.value('Utils', (function(ngLD){

        var utils = {};

        utils.findIndex = function (obj, iterator, context) {
            var idx;
            _.any(obj, function (value, index, list) {
                if (iterator.call(context, value, index, list)) {
                    idx = index;
                    return true;
                }
            });
            return idx;
        };




        return utils

    })());


})();










