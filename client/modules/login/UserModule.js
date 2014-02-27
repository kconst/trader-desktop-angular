var userModule = angular.module('userModule', []);

userModule.factory('userService', ['$http', function($http) {
    return App.services.UserService.bind($http)();
}]);

/*userModule.factory('userModel', ['userService', function(userService) {
    return App.models.UserModel(userService);
}]);*/

userModule.controller('LoginController', ['$scope', 'userService', '$location', App.controllers.LoginController]);