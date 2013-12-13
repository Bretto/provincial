(function () {
    "use strict";

    var module = angular.module('App.controllers', []);

    module.controller('AppCtrl', function ($scope, AppModel, $state, $window, snapRemote) {

        $scope.mainModel = AppModel;

        $scope.opts = {
            disable: 'right',
            maxPosition: 300,
            minPosition: -300
        };

        snapRemote.open('left');

    });

})();

