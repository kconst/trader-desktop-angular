(function(){
    var deskModule = angular.module('deskModule', ['ngResource']);

    App.Modules.deskModule = deskModule;

    deskModule.factory('tradesService', ['$resource', function($resource) {
        return App.Services.TradesService.bind($resource)();
    }]);

    deskModule.factory('tradesModel', ['tradesService', '$rootScope', function(tradesService, $rootScope) {
        return App.Models.TradesModel.apply(this, [tradesService, $rootScope]);
    }]);

    deskModule.controller('DeskController', ['$scope', 'tradesService', 'tradesModel', 'userService', '$routeParams', App.Controllers.DeskController]);
}());