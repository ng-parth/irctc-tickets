angular.module('tickets')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('ticket', {
                url: '/ticket/:id',
                templateUrl: function(params) {
                    if (params.id < 20) return './' + params.id + '.htm';
                    else return './' + params.id + '.html';
                }
            }
        );
        $urlRouterProvider.otherwise('/ticket/9');
    }]);