(function(){
    App.models.TradesModel = function(tradesService, $rootScope){
        this.scope = {};

        this.setScope = function($scope){
            this.scope = $scope;
        };

debugger
        this.scope.trades = tradesService.orders.query((function(data){
            debugger
            this.scope.trades = data;
        }).bind(this));

        $rootScope.$on('orderCreatedEvent', (function(){
            tradesService.orders.query((function(data){
                this.scope.trades = data;
            }).bind(this));
        }).bind(this));

        $rootScope.$on('placementCreatedEvent', (function(){
            tradesService.orders.query((function(data){
                this.scope.trades = data;
            }).bind(this));
        }).bind(this));

        $rootScope.$on('executionCreatedEvent', (function(){
            tradesService.orders.query((function(data){
                this.scope.trades = data;
            }).bind(this));
        }).bind(this));

        $rootScope.$on('allOrdersDeletedEvent', (function(){
            tradesService.orders.query((function(data){
                this.scope.trades = data;
            }).bind(this));
        }).bind(this));

        return this;
    };
}());