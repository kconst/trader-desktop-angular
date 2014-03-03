var deskModule = angular.module('deskModule', ['ngResource']);

deskModule.factory('tradesService', ['$resource', function($resource) {
    return App.services.TradesService.bind($resource)();
}]);

deskModule.controller('DeskController', ['$scope', 'tradesService', 'userService', '$routeParams', '$rootScope', App.controllers.DeskController]);