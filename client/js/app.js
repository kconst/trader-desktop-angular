var traderDesktopApp = angular.module('traderDesktopApp', [
    'ngRoute',
    'traderDesktopControllers'
]),
traderDesktopControllers,
App = {
    services : {},
    controllers : {},
    models : {}
};

traderDesktopApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: '/modules/login/login.html',
                controller: 'LoginController'
            }).
            when('/:userId', {
                templateUrl: '/modules/desk/desk.html',
                controller: 'DeskController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);

traderDesktopControllers = angular.module('traderDesktopControllers', [
    'userModule',
    'deskModule'
]);