(function () {
    "use strict";

    var module = angular.module('App.controllers', []);

    module.controller('AppCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;
        $scope.mainModel.toggleNavOpen = true;

    });

})();

