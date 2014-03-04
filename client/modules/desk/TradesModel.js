(function(){
    App.models.TradesModel = function(tradesService, $rootScope){
        // used to correct javascript scope which angular dumps up to window
        var resolve = (function (callback, execute) {
            if (execute === true) {
                return callback.bind(this)();
            }

            return callback.bind(this);
        }).bind(this);

        this.scope = {};

        this.setScope = function($scope){
            this.scope = $scope;

            // force data sync
            this.scope.trades = tradesService.orders.query(resolve(function(data){
                this.scope.trades = data;
            }));
        };

        /*$rootScope.$on('orderCreatedEvent', (function(){
            tradesService.orders.query((function(data){
                this.scope.trades = data;
            }).bind(this));
        }).bind(this));*/

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