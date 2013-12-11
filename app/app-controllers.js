(function () {
    "use strict";

    var module = angular.module('App.controllers', []);

    module.controller('AppCtrl', function ($scope, AppModel, $state, $window) {

        $scope.mainModel = AppModel;
//
//        $scope.onPage = function(item){
//            AppModel.activeNavItem = item;
//
//            var state = $state.current.name;
//            var key = state + "Id";
//            var obj = {};
//            obj[key] = item.page;
//            var params =  obj;
//            var options =  {location:'replace'};
//
//            $state.go(state, params, options);
//        }
//
//        $scope.onLink = function(item){
//            console.log('onLink');
//            var state = item.link;
//            $state.go('territoire', {}, {});
//        }
//
//        $scope.onBack = function () {
//            $state.params.isBack = true;
//            $window.history.back();
//        }
//
//        $scope.isActiveNavItem = function (item) {
//            return AppModel.activeNavItem === item;
//        }
//
//        $scope.findActiveNavItem = function(items, value){
//
//            var res = null;
//            angular.forEach(items, function(item){
//                if(item.page === value){
//                    res = item;
//                }
//            });
//
//            return res;
//        }

    });

})();

