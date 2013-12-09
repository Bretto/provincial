(function () {
    "use strict";

    var module = angular.module('App',
            [
                'App.controllers',
                'App.directives',
                'App.services',
                'ngMobile',
                'ui.compat'
            ])
        .config(function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {


            $stateProvider
                .state('nav', {
                    url: '/nav/:navId',
                    views: {
                        'nav@': {
                            templateUrl: 'partials/nav1.html'
                        }
                    }
                })
                .state('nav.page', {
                    url: '/page/:pageId',
                    views: {
                        'page@': {
                            templateUrl: function (stateParams) {
                                return 'partials/page'  + stateParams.pageId + '.html';
                            }//,
                            //controller: 'PageCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise("/nav/1/page/1");
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










