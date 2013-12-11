(function () {
    "use strict";

    var module = angular.module('App.services', []);

    module.factory('AppModel', function () {

        var appModel = {};

        appModel.dashboard = [
            {label:'Widgets', id:'widgets'},
            {label:'Territoire', id:'territoire', nav:true}
        ];

        appModel.territoire = [
            {label:'Province Nord', id:'province_nord', nav:true},
            {label:'Province Sud', id:'province_sud', nav:true},
            {label:'Province des îles Loyauté', id:'province_iles', nav:true}
        ];

        appModel.province_nord = [
            {label:'communes 1', id:'commune_1', nav:true},
            {label:'communes 2', id:'commune_2', nav:true}
        ];

        appModel.province_sud = [
            {label:'communes 3', id:'commune_3', nav:true},
            {label:'communes 4', id:'commune_4', nav:true}
        ];

        appModel.province_iles = [
            {label:'communes 5', id:'commune_5', nav:true},
            {label:'communes 6', id:'commune_6', nav:true}
        ];

        appModel.commune_1 = [
            {label:'Bureau de vote 1', id:'bureau_1'},
            {label:'Bureau de vote 2', id:'bureau_2'}
        ];

        appModel.commune_2 = [
            {label:'Bureau de vote 3', id:'bureau_3'},
            {label:'Bureau de vote 4', id:'bureau_4'}
        ];



        return appModel;

    });
})();