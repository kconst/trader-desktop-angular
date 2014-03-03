var traderDesktopApp = angular.module('traderDesktopApp', [
    'ngRoute',
    'traderDesktopControllers'
]),
traderDesktopControllers,
App = {
    services : {},
    controllers : {},
    models : {},
    socket : io && io.connect('http://localhost')
};

traderDesktopApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl : '/modules/login/login.html',
                controller : 'LoginController'
            }).
            when('/:userId', {
                templateUrl : '/modules/desk/desk.html',
                controller : 'DeskController'
            }).
            otherwise({
                redirectTo : '/login'
            });
    }]);

traderDesktopControllers = angular.module('traderDesktopControllers', [
    'userModule',
    'deskModule'
]);

traderDesktopApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope){
    App.socket.on('orderCreatedEvent', (function(order) {
        console.log(order);

        this.$emit('orderCreatedEvent', order);
    }).bind($rootScope));

    App.socket.on('placementCreatedEvent', (function(placement) {
        console.log(placement);

        this.$emit('placementCreatedEvent', placement);
    }).bind($rootScope));

    App.socket.on('executionCreatedEvent', (function(execution) {
        console.log(execution);

        this.$emit('executionCreatedEvent', execution);
    }).bind($rootScope));

    App.socket.on('allOrdersDeletedEvent', (function(data) {
        console.log('allOrdersDeletedEvent');

        this.$emit('allOrdersDeletedEvent', data);
    }).bind($rootScope));
}]);