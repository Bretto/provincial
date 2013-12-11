(function () {
    "use strict";

    var module = angular.module('Territoire', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('territoire', {
                    url: '/territoire',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'territoire/territoire-page.html';
                            },
                            controller: 'TerritoireCtrl'
                        },
                        'nav@': {
                            templateUrl: function (stateParams) {
                                return 'territoire/territoire-nav.html';
                            },
                            controller: 'TerritoireNavCtrl'
                        }
                    }
                });
        });



    module.controller('TerritoireCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });

    module.controller('TerritoireNavCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;
        $scope.navItems = AppModel.territoireNav;
        AppModel.activeNavItem = null;
    });

})();

