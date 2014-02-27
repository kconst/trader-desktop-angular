(function(){
    App.controllers.DeskController = function ($scope, tradesService, $rootScope) {
        tradesService.getOrders().query(function(data){
            $scope.trades = data;
//            $scope.apply();
        });

    };
}());