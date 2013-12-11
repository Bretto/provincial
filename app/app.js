(function () {
    "use strict";



    var module = angular.module('App',
            [
                'Globals',
                'Utils',
                'ngMobile',
                'ui.router',
                'App.controllers',
                'App.directives',
                'App.services',
                'Dashboard',
                'Territoire',
                'Province',
                'Commune',
                'Bureau'
            ])
        .config(function ($urlRouterProvider) {
            $urlRouterProvider.otherwise("/dashboard/1");
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










