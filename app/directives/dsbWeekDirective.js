"use strict";

angular.module('app').directive('dsbWeek', ['$localStorage', function($localStorage){
    return {
        scope:{

        },
        template: '<dashboard></dashboard>',
        link:function(scope){

            scope.title = 'Dashboard';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20,20],
                outerMargin:false,
                pushing:true,
                floating:true,
                swapping:false

            },

                scope.widgetDefinitions =[
                    {
                        title:'To do this week',
                        settings:{
                            sizeX:3,
                            sizeY:3,
                            minSizeX:2,
                            minSizeY:2,
                            template: '<dsb-template></dsb-template>',
                            widgetSettings:{
                                id:1000
                            }
                        }

                    }
                ],

            scope.widgets = $localStorage.widgets || [
                    {
                        title:"First",
                        sizeX:3,
                        sizeY:3,
                        row: 0,
                        col:0
                    }

                ];

            scope.$watch('widgets', function(){
                $localStorage.widgets = scope.widgets;
            }, true);
        }
    }
}]);