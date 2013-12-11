(function () {
    "use strict";

    var module = angular.module('Province', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('province', {
                    url: '/province/:provinceId',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'province/province-' + stateParams.provinceId + '.html';
                            },
                            controller: 'ProvinceCtrl'
                        },
                        'nav@': {
                            templateUrl: function (stateParams) {
                                return 'province/province-nav.html';
                            },
                            controller: 'ProvinceNavCtrl'
                        }
                    }
                })
        });



    module.controller('ProvinceCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });

    module.controller('ProvinceNavCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;
        $scope.navItems = AppModel[$state.params.provinceId + 'Nav'];
        AppModel.activeNavItem = null;

    });

})();

