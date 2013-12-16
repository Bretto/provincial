(function () {
    "use strict";

    var module = angular.module('Commune', []);


    module.controller('CommuneCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

        $scope.pieData =[{"label":"Root Scope", "value":1},
            {"label":"Parent Scope", "value":1},
            {"label":"Child Scope", "value":1}
        ]

    });



})();

