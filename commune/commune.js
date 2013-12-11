(function () {
    "use strict";

    var module = angular.module('Commune', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('commune', {
                    url: '/commune/:communeId',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'commune/commune-page.html';
                            },
                            controller: 'CommuneCtrl'
                        },
                        'nav@': {
                            templateUrl: function (stateParams) {
                                return 'commune/commune-nav.html';
                            },
                            controller: 'CommuneNavCtrl'
                        }
                    }
                });
        });



    module.controller('CommuneCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

    });

    module.controller('CommuneNavCtrl', function ($scope, AppModel, $state, $window) {

        console.log('CommuneNavCtrl')

        $scope.mainModel = AppModel;
        $scope.navItems = AppModel[$state.params.communeId + 'Nav'];
        AppModel.activeNavItem = $scope.findActiveNavItem($scope.navItems, 'bureauId', $state.params.bureauId);

        $scope.onCommuneSelect = function(){

            var state = 'commune';
            var params =  {communeId: $state.params.communeId};
            var options =  {location:'replace'};

            $state.go(state, params, options);
            AppModel.activeNavItem = null;
        }
    });

})();

