(function () {
    "use strict";

    var module = angular.module('PieChart',
            [

            ]);



    module.directive('pieMenu', function ($log, $parse) {


        function linkr(scope, elem, attr, ctrl) {

            var vis, paths, arc, arcs, pie, texts;

//            scope.$watch(function(){return scope.showMenu}, function(newValue){
//                if(newValue){
//                    openMenu();
//                }
//
//                else{
//                    closeMenu();
//                }
//
//            });


            elem.attr('width',(attr.radius * 2).toString());
            elem.attr('height',(attr.radius * 2).toString());

            var w = parseInt(attr.radius * 2),
                h = parseInt(attr.radius * 2),
                r = parseInt(attr.radius),
                outerRadius = Math.min(w, h) / 2,
                innerRadius = outerRadius * .1;
//            color = d3.scale.category20c();


            scope.renderComplete = function () {

                //$log.info('renderComplete');

                vis = d3.select(elem[0])
                    .data([scope.data])

                arc = d3.svg.arc()
                //.innerRadius(innerRadius)
                //.outerRadius(r);

                pie = d3.layout.pie()
                    .value(function (d) {
                        return d.value;
                    });

                arcs = vis.selectAll("g.arc")
                    .data(pie)
                    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

                paths = vis.selectAll("path.path")
                    .data(pie);

                texts = vis.selectAll("text.text")
                    .data(pie)
                    .style("opacity", 0)
                    .attr("transform", function (d) {

                        d.innerRadius = 0;
                        d.outerRadius = r;
                        return "translate(" + arc.centroid(d) + ")";

                    })
                    .attr("text-anchor", "middle")
                    .text(function (d, i) {
                        return d.data.label;
                    });

                openMenu();

            }

            function openMenu(){

                elem.css('display','block');

                paths.transition()
                    .ease("exp-out")
                    .duration(500)
                    .attr("d", arc)
                    .each("end", open)
                    .attrTween("d", tweenPie);

                function tweenPie(b) {
                    b.outerRadius = r;
                    b.innerRadius = innerRadius;
                    var i = d3.interpolate({startAngle: 0, endAngle: 0, outerRadius: 0, innerRadius: 0}, b);
                    return function(t) {
                        return arc(i(t));
                    };
                }

                function open(){
                    texts.transition()
                        .ease("exp-out")
                        .duration(200)
                        .style("opacity", 1);
                }
            }

            function closeMenu(){


                texts.transition()
                    .ease("exp-out")
                    .duration(200)
                    .style("opacity", 0);

                paths.transition()
                    .ease("exp-in")
                    .duration(500)
                    .each("end", destroy)
                    .attrTween("d", tweenPie);

                function tweenPie(b) {

                    b.outerRadius = r;
                    b.innerRadius = innerRadius;

                    var i = d3.interpolate(b, {startAngle: 0, endAngle: 0, outerRadius: 0, innerRadius: 0});
                    return function(t) {
                        return arc(i(t));
                    };
                }

                function destroy(d, i){

                    if(i === 0){
                        elem.css('display','none');
//                    scope.data = [];
//                    scope.$destroy();
//                    vis.remove();
//                    $log.info('destroy',scope.$id);
                    }
                }
            }

            scope.onSelect = function(obj, e){
                e.stopImmediatePropagation();
                closeMenu();
                //scope.$parent.onMenuPieSelect(obj);
            }

        }

        return {
            replace:true,
            restrict:'E',
            scope:{
                data:'=',
                showMenu:'='
            },
            templateUrl:'pie-chart/pie-menu.html',
            link:linkr
        }
    });

    module.directive('pieMenuData', function ($log) {
        return {
            replace: true,
            restrict:'A',
            templateUrl: 'pie-chart/pie-menu-data.html',
            scope:{
                pieMenuData:'='
            }
        }
    });


//    module.controller('DashboardCtrl', function ($scope, AppModel, $state, $window, Utils) {
//
//        console.log('DashboardCtrl');
//        $scope.mainModel = AppModel;
//
//    });


})();

