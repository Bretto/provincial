(function () {
    "use strict";

    var module = angular.module('App.services', []);

    module.factory('AppModel', function () {

        var appModel = {};

        appModel.dashboardNav = [
            {label:'Widjets 1', state:'dashboard', params:{dashboardId:'1'}, options:{location:'replace'}},
            {label:'Widjets 2', state:'dashboard', params:{dashboardId:'2'}, options:{location:'replace'}},
            {label:'Territoire', state:'territoire'}
        ];

        appModel.territoireNav = [
            {label:'Province Nord', state:'province', params:{provinceId:'nord'}},
            {label:'Province Sud', state:'province', params:{provinceId:'sud'}},
            {label:'Province des îles Loyauté', state:'province', params:{provinceId:'iles'}}
        ];

        appModel.nordNav = [
            {label:'communes 1', state:'commune', params:{communeId:'commune1'}},
            {label:'communes 2', state:'commune', params:{communeId:'commune2'}}
        ];

        appModel.sudNav = [
            {label:'communes 3', state:'commune', params:{communeId:'commune3'}},
            {label:'communes 4', state:'commune', params:{communeId:'commune4'}}
        ];

        appModel.ilesNav = [
            {label:'communes 5', state:'commune', params:{communeId:'commune5'}},
            {label:'communes 6', state:'commune', params:{communeId:'commune6'}}
        ];

        appModel.commune1Nav = [
            {label:'Bureau de vote 1', state:'commune.bureau', params:{bureauId:'bureau1'}, options:{location:'replace'}},
            {label:'Bureau de vote 2', state:'commune.bureau', params:{bureauId:'bureau2'}, options:{location:'replace'}}
        ];

        appModel.commune2Nav = [
            {label:'Bureau de vote 3', state:'commune.bureau', params:{bureauId:'bureau3'}, options:{location:'replace'}},
            {label:'Bureau de vote 4', state:'commune.bureau', params:{bureauId:'bureau4'}, options:{location:'replace'}}
        ];

        appModel.activeNavItem = null;


        return appModel;

    });
})();