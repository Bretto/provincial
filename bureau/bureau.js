(function () {
    "use strict";

    var module = angular.module('Bureau', []);




    module.controller('BureauCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });



})();

