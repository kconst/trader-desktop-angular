(function(){
    App.Models.UserModel = function(service){
        var that = this;

        service.success(function(data){
            that.data = data;
        });
    };
}());