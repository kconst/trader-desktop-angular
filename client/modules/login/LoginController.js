(function(){
    App.controllers.LoginController = function ($scope, userService, $location) {
        userService.getUsers().success(function(data){
            $scope.users = data;
        });

        $scope.doLogin = function(){
            userService.setLoggedInUser($scope.user);

            $location.path('/' + $scope.user.id);
        };
    };
}());

