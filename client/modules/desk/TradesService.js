(function(){
    App.services.TradesService = function(){
        var $resource = this;

        return {
            createOrder : function(){

            },

            deleteAll : function(){

            },

            getInstruments : function(){

            },

            getOrders : function(){
                return $resource('/rest/orders', {}, {
                    query: {
                        method :'GET',
                        params : {},
                        isArray : true
                    }
                });
            },

            getLoggedInUser : function(){

            },

            setLoggedInUser : function(){

            }
        }
    };
}());