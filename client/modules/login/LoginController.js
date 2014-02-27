(function(){
    App.controllers.LoginController = function ($scope, userService, $location) {
        userService.getUsers().success(function(data){
            $scope.users = data;
        });

        $scope.doLogin = function(){
            $location.path('/' + $scope.user.id);
        };
    };
}());

