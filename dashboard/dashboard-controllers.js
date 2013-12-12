(function () {
    "use strict";

    var module = angular.module('Dashboard.controllers', []);


    module.controller('DashboardCtrl', function ($scope, AppModel, $state, $window, Utils) {

        console.log('DashboardCtrl');
        $scope.mainModel = AppModel;

    });



})();

