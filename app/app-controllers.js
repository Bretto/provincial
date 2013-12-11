(function () {
    "use strict";

    var module = angular.module('App.controllers', []);

    module.controller('AppCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;

        $scope.onNav = function(item){
            AppModel.activeNavItem = item;

            var params =  item.params || {};
            var options =  item.options || {};

            $state.go(item.state,params, options);
        }

        $scope.onBack = function () {
            $state.params.isBack = true;
            $window.history.back();
        }

        $scope.isActiveNavItem = function (item) {
            return AppModel.activeNavItem === item;
        }

        $scope.findActiveNavItem = function(items, key, value){

            var res = null;
            angular.forEach(items, function(item){
                if(item.params && item.params[key] === value){

                    res = item;
                }
            });

            return res;
        }

    });

})();

