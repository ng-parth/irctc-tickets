angular.module('tickets')
    .directive('irctcForm', [function() {
        return {
            templateUrl: '../app/irctcForm.directive.html',
            restrict: 'EAC',
            scope: {
                ticketDetails: '='
            },
            link: function ($scope, $elem, $attr) {
                console.log($scope.ticketDetails);
            }
        }
    }]);