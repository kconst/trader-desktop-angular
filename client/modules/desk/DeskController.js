(function(){
    App.Controllers.DeskController = function ($scope, tradesService, tradesModel, userService, $routeParams) {
        // connect the model to this controller's scope
        tradesModel.setScope($scope);

        // look up provided ID and set the user if they came to the desktop directly
        if (!userService.getLoggedInUser()) {
            $scope.userId = $routeParams.userId;

            userService.getUsers().success(function(data){
                userService.setLoggedInUser(data.filter(function(e){
                    return e.id === $scope.userId;
                })[0]);
            });
        }

        // do not show make trade directive initially
        $scope.makingTrade = false;

        $scope.doTrade = function(){
            $scope.makingTrade = true;
        };

        $scope.deleteTrades = function(){
            tradesService.orders.deleteAll();
        };
    };
}());