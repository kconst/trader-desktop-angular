(function(){
    App.services.UserService = function(){
        var $http = this;

        return {
            getUsers : function(){
                return $http.get('/rest/users');
            }
        }
    };
}());