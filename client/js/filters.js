(function(){
    angular.module('traderDesktopFilters', []).filter('byUser', function(userService){
        return function(data, userId){
            var id = userService.getLoggedInUser() && userService.getLoggedInUser().id;

            return data && data.filter(function(e){
                return this.id === e.traderId
            }, {id : id})
        }
    });
}());