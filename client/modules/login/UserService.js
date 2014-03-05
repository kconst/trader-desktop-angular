(function(){
    App.Services.UserService = function(){
        var $http = this;

        return {
            getUsers : function(){
                return $http.get('/rest/users');
            },

            getLoggedInUser : function(){
                return this._user;
            },

            setLoggedInUser : function(value){
                this._user = value;
            }
        }
    };
}());