(function(){
    var userModule = angular.module('userModule', []);

    App.Modules.userModule = userModule;

    userModule.factory('userService', ['$http', function($http) {
        return App.Services.UserService.bind($http)();
    }]);

    /*userModule.factory('userModel', ['userService', function(userService) {
        return App.Models.UserModel(userService);
    }]);*/

    userModule.controller('LoginController', ['$scope', 'userService', '$location', App.Controllers.LoginController]);
}());
