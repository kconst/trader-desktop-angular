(function(){
    App.controllers.DeskController = function ($scope, tradesService, userService, $routeParams, $rootScope) {
        // load data for template
        tradesService.orders.query(function(data){
            $scope.trades = data;
        });

        $rootScope.$on('orderCreatedEvent', function(){
            $scope.refreshTrades();
        });

        $rootScope.$on('placementCreatedEvent', function(){
            $scope.refreshTrades();
        });

        $rootScope.$on('executionCreatedEvent', function(){
            $scope.refreshTrades();
        });

        $rootScope.$on('allOrdersDeletedEvent', function(){
            $scope.refreshTrades();
        });

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

            $scope.refreshTrades();
        } ;

        $scope.refreshTrades = function(){
            tradesService.orders.query(function(data){
                $scope.trades = data;
            });
        };
    };
}());