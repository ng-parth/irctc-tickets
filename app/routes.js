angular.module('tickets')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('ticket', {
                url: '/ticket/:id',
                templateUrl: function(params) {
                    return './' + params.id + '.htm';
                }
            }
        );
        $urlRouterProvider.otherwise('/ticket/9');
    }]);