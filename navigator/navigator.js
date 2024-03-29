(function () {
    "use strict";

    var module = angular.module('Navigator', [])
        .config(function ($urlRouterProvider, $stateProvider) {

            $stateProvider
                .state('navigator', {
                    url: '/navigator/:navId',
                    views: {
                        'nav@': {
                            templateUrl: function (stateParams) {
                                return 'navigator/navigator.html';
                            },
                            controller: 'NavigatorCtrl'
                        }
                    }
                })
                .state('navigator.page', {
                    url: '/page/:pageId',
                    views: {
                        'page@': {
                            data: {
                              sticky: true
                            },
                            templateUrl: function (stateParams) {

                                var page = stateParams.pageId.split('_')[0];

                                return 'page/' + page + '.html';
                            }
//                            controller: 'DashboardCtrl'
                        }
                    }
                });


            $urlRouterProvider.otherwise("/navigator/dashboard/page/widgets");
        })
        .run(
        function ($rootScope, $state, $stateParams, $log) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

                var direction = !fromParams.isBack;

                $rootScope.vewSlideAnimation = {
                    enter: direction ? 'slide-left-enter' : 'slide-right-enter',
                    leave: direction ? 'slide-left-leave' : 'slide-right-leave'
                }
            });
        });



})();

