(function () {
    "use strict";

    var module = angular.module('Bureau', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('commune.bureau', {
                    url: '/bureau/:bureauId',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'bureau/bureau-page.html';
                            },
                            controller: 'BureauCtrl'
                        }
//                        'nav@': {
//                            templateUrl: function (stateParams) {
//                                return 'bureau/bureau-nav.html';
//                            },
//                            controller: 'BureauNavCtrl'
//                        }
                    }
                });
        });



    module.controller('BureauCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });



})();

