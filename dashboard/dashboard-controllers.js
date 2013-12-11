(function () {
    "use strict";

    var module = angular.module('Dashboard.controllers', []);


    module.controller('DashboardCtrl', function ($scope, AppModel, $state, $window, Utils) {

        $scope.mainModel = AppModel;

        $scope.onTest = function(){
            console.log('test');
            Utils.test();
        }
    });

    module.controller('DashboardNavCtrl', function ($scope, AppModel, $state, ngLD) {

        $scope.mainModel = AppModel;
        $scope.navItems = AppModel.dashboardNav;
        AppModel.activeNavItem = $scope.findActiveNavItem($scope.navItems, 'dashboardId', $state.params.dashboardId);


//        $scope.onNav = function (item) {
//            $scope.activeItem = item;
//            $state.go(item.state, item.params);
//        }

//        $scope.isActive = function (item) {
//            return this.activeItem === item;
//        }

    });

})();

