(function(){
    App.models.TradesModel = function(tradesService, $rootScope){
        // used to correct javascript scope which angular dumps up to window
        var resolve = (function (callback, execute) {
            if (execute === false) {
                return callback.bind(this);
            }

            callback.bind(this)();
        }).bind(this);

        this.scope = {};

        this.setScope = function($scope){
            this.scope = $scope;
        };

        this.scope.trades = tradesService.orders.query(resolve(function(data){
            this.scope.trades = data;
        }, false));

        $rootScope.$on('orderCreatedEvent', resolve(function(){
            tradesService.orders.query(resolve(function(data){
                this.scope.trades = data;
            }));
        }));

        $rootScope.$on('placementCreatedEvent', resolve(function(){
            tradesService.orders.query(resolve(function(data){
                this.scope.trades = data;
            }));
        }));

        $rootScope.$on('executionCreatedEvent', resolve(function(){
            tradesService.orders.query(resolve(function(data){
                this.scope.trades = data;
            }));
        }));

        $rootScope.$on('allOrdersDeletedEvent', resolve(function(){
            tradesService.orders.query(resolve(function(data){
                this.scope.trades = data;
            }));
        }));

        return this;
    };
}());