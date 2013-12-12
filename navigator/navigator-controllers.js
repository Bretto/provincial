(function () {
    "use strict";

    var module = angular.module('Navigator.controllers', []);

    module.controller('NavigatorCtrl', function ($scope, AppModel, $state, $window) {

        $scope.onPage = function(item){
            $scope.activeNavItem = item;

            var state = 'navigator.page';
            var params =  {pageId: item.id};
            var options =  {location:'replace'};

            $state.go(state, params, options);
        }

        $scope.onNav = function(item){

            var state = 'navigator.page';
            var params =  {navId: item.id, pageId: item.id};
            var options =  {};

            $state.go(state, params, options);
        }

        $scope.onBack = function () {
            $state.params.isBack = true;
            $window.history.back();
        }

        $scope.isActiveNavItem = function (item) {
            return $scope.activeNavItem === item;
        }

        $scope.findActiveNavItem = function(items, value){

            var res = null;
            angular.forEach(items, function(item){
                if(item.id === value){
                    res = item;
                }
            });

            return res;
        }


        $scope.mainModel = AppModel;
        $scope.navItems = AppModel[$state.params.navId];
        $scope.activeNavItem = $scope.findActiveNavItem($scope.navItems, $state.params.pageId);

    });

})();

