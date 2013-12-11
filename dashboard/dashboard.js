(function () {
    "use strict";

    var module = angular.module('Dashboard',
            [
                'Dashboard.controllers'
            ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard/:dashboardId',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'dashboard/dashboard-page' + stateParams.dashboardId + '.html';
                            },
                            controller: 'DashboardCtrl'
                        },
                        'nav@': {
                            templateUrl: function (stateParams) {
                                return 'dashboard/dashboard-nav.html';
                            },
                            controller: 'DashboardNavCtrl'
                        }
                    }
                });
        });

})();

