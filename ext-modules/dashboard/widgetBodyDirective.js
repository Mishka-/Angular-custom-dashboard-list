"use strict";

angular.module('dashboard').directive('widgetBody',
    ['$compile', '$localStorage',
        function ($compile, $localStorage) {
            return {

                templateUrl: 'ext-modules/dashboard/widgetBodyTemplate.html',
                link: function (scope, element, attrs) {
                    var newElement = angular.element(scope.item.template);

                    element.append(newElement);
                    $compile(newElement)(scope);
                    newElement.scope.todos = [{}];


                    scope.todos = [{

                    }];

                    scope.todos.splice(scope.todos[0], 1);


                    /*scope.$watch('todos', function(){
                        $localStorage.todos = scope.todos;
                    }, true);*/

                    scope.addTodo = function () {
                        scope.todos.push({text:scope.formTodoText, done:false});
                        scope.formTodoText = '';

                    };


                    scope.close = function () {
                        scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                    };
                },
            };
        }
    ]);