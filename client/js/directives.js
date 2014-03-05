(function(){
    App.Core.directive('ngCustomModal', function(tradesService, userService){
        return {
            controller : function($scope){
                $scope.activeTrades = tradesService.orders;

                // retrieve instruments & loggedinuser for use with trades creation
                tradesService.instruments.query(function(data){
                    $scope.instruments = data;
                });

                // storing user for template
                $scope.userId = $scope.$parent.userId || userService.getLoggedInUser().id;

                $scope.doClose = function(){
                    // hide the directive
                    $scope.$parent.makingTrade = false;
                };

                $scope.createTrade = function() {
                    var loggedInUserId = userService.getLoggedInUser().id,
                        value = $scope.tradeCount,
                        randomInstrument,
                        instruments = $scope.instruments;

                    // validation
                    if (value.match(/^\d+$/) === null || !loggedInUserId) {
                        console.warn('Invalid data supplied.');

                        return;
                    }

                    while (value > 0) {
                        randomInstrument = instruments[(Math.floor(Math.random() * (instruments.length-1)))];

                        // memoize method!
                        $scope.activeTrades.create({
                            "side": value % 2 ? 'Buy' : 'Sell',
                            "symbol": randomInstrument.symbol,
                            "quantity": Math.floor(Math.random() * (1000 - 100) + 100),
                            "limitPrice": Math.floor(Math.random() * (1000 - 1) + 1),
                            "traderId": loggedInUserId
                        });

                        value -= 1;
                    }

                    // hide the directive
                    $scope.$parent.makingTrade = false;
                };
            },
            restrict : 'E',
            templateUrl : 'directives/customModal.html',
            require : '^ngModel',
            scope : {
                ngModel: '='
            }
        };
    });

    App.Core.directive('ngHeader', function(userService, $routeParams){
        return {
            controller : function($scope){

                // look up provided ID and set the user if they came to the desktop directly
                if (!userService.getLoggedInUser()) {
                    $scope.userId = $routeParams.userId;

                    userService.getUsers().success(function(data){
                        userService.setLoggedInUser(data.filter(function(e){
                            return e.id === $scope.userId;
                        })[0]);

                        $scope.user = userService.getLoggedInUser().name;
                    });
                }
            },
            restrict : 'E',
            templateUrl : 'directives/header.html',
            require : '^ngModel',
            scope : {
                ngModel: '='
            }
        };
    });
}());
