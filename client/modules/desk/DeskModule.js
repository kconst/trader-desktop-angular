var deskModule = angular.module('deskModule', ['ngResource']);

deskModule.factory('tradesService', ['$resource', function($resource) {
    return App.services.TradesService.bind($resource)();
}]);

deskModule.factory('tradesModel', ['tradesService', '$rootScope', function(tradesService, $rootScope) {
    return App.models.TradesModel.apply(this, [tradesService, $rootScope]);
}]);

deskModule.controller('DeskController', ['$scope', 'tradesService', 'tradesModel', 'userService', '$routeParams', App.controllers.DeskController]);