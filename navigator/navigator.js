(function () {
    "use strict";

    var module = angular.module('Navigator', []);

    module.controller('NavigatorCtrl', function ($scope, AppModel, $state, $window) {

        console.log('NavigatorCtrl');

        $scope.onPage = function(item){
            AppModel.activeNavItem = item;

            var state = 'navigator.page';
            var params =  {pageId: item.pageId};
            var options =  {location:'replace'};

            $state.go(state, params, options);
        }

        $scope.onNav = function(item){
            console.log('onNav');
            var state = 'navigator.page';
            var params =  {navId: item.navId, pageId: item.pageId};
            var options =  {};


            $state.go(state, params, options);
        }

        $scope.onBack = function () {
            $state.params.isBack = true;
            $window.history.back();
        }

        $scope.isActiveNavItem = function (item) {
            return AppModel.activeNavItem === item;
        }

        $scope.findActiveNavItem = function(items, value){

            var res = null;
            angular.forEach(items, function(item){
                if(item.pageId === value){
                    res = item;
                }
            });

            return res;
        }


        $scope.mainModel = AppModel;
        $scope.navItems = AppModel[$state.params.navId];
        AppModel.activeNavItem = $scope.findActiveNavItem($scope.navItems, $state.params.pageId);

    });

})();

