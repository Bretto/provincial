(function () {
    "use strict";

    var module = angular.module('Commune', []);


    module.controller('CommuneCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });



})();

