(function () {
    "use strict";

    var module = angular.module('Territoire', [])

    module.controller('TerritoireCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

//        $state.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
//            console.log('$stateChangeStart');
//        });

    });



})();

