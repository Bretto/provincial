(function () {
    "use strict";

    var module = angular.module('Dashboard.controllers', []);


    module.controller('DashboardCtrl', function ($scope, AppModel, $state, $window, Utils) {

        console.log('DashboardCtrl');
        $scope.mainModel = AppModel;

    });

    module.controller('DashboardNavCtrl', function ($scope, AppModel, $state, ngLD) {

        console.log('DashboardNavCtrl');
        $scope.mainModel = AppModel;
        $scope.navItems = AppModel.dashboardNav;
        AppModel.activeNavItem = $scope.findActiveNavItem($scope.navItems, $state.params.dashboardId);


//        $scope.onNav = function (item) {
//            $scope.activeItem = item;
//            $state.go(item.state, item.params);
//        }

//        $scope.isActive = function (item) {
//            return this.activeItem === item;
//        }

    });

})();

