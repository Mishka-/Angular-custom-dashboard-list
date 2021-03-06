"use strict";

angular.module('dashboard').directive('dashboard', function(){
    return {
            templateUrl: 'ext-modules/dashboard/dashboardTemplate.html',
            link:function(scope,element,attrs){
                scope.addNewWidget = function(widget){
                    var newWidget = angular.copy(widget.settings);
                    scope.widgets.push(newWidget);
                }
            }
    };
});