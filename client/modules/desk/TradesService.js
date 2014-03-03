(function(){
    App.services.TradesService = function(){
        var $resource = this;

        return {
            instruments : $resource('/rest/instruments', {}, {
                    query: {
                        method :'GET',
                        params : {},
                        isArray : true
                    }
            }),

            orders : $resource('/rest/orders', {}, {
                query : {
                    method :'GET',
                    params : {},
                    isArray : true
                },
                create : {
                    method : 'POST'
                },
                deleteAll : {
                    method : 'DELETE'
                }
            })
        }
    };
}());