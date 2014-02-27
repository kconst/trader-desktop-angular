var deskModule = angular.module('deskModule', ['ngResource']);

deskModule.factory('tradeService', ['$resource', function($resource) {
    return App.services.TradesService.bind($resource)();
}]);

deskModule.controller('DeskController', ['$scope', 'tradeService', '$rootScope', App.controllers.DeskController]);