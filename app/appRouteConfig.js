"use strict";
angular.module('app').config(['$routeProvider', function($routeProvider){

    var routes = [
        {
            url:'/today',
            config: {
                template:'<dsb-today></dsb-today>'
            }
        },
        {
            url:'/week',
            config: {
                template:'<dsb-week></dsb-week>'
            }
        },
        {
            url:'/month',
            config: {
                template:'<dsb-month></dsb-month>'
            }
        }
    ];

    routes.forEach(function (route){
      $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({redirectTo: '/today'});
}]);