"use strict";

angular.module("framework").directive("framework", function(){
    return {
      transclude:true,
        scope:{
            title:'@',
            subtitle:'@'
        },
        controller: "frameworkController",
        templateUrl: "ext-modules/framework/frameworkTemplate.html"
    };
});