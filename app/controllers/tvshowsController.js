   (function() {
       var ShowsController = function($scope, $log, $window,showsFactory, appSettings ) {

        $scope.sortBy = 'name';
        $scope.reverse = false; 
        $scope.shows = [];
        $scope.appSettings = appSettings;
        
        function init() {
        showsFactory.getShows()
                .success(function(shows) {
                $scope.shows = shows;
                })
                .error(function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
                });
        }

        init();
         
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        $scope.deleteShow = function(showId) {
            showsFactory.deleteShow(showId)
                    .success(function(status) {
                        if (status) {
                            for (var i = 0, len = $scope.shows.length; i < len; i++) {
                                if ($scope.shows[i].id === showId) {
                                    $scope.shows.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else {
                            $window.alert('Unable to delete show');
                        }

                    })
                    .error(function(data, status, headers, config) {
                        $log.log(data.error + ' ' + status);
                    });
        };
    };
       
    
    ShowsController.$inject = ['$scope', '$log', '$window', 'showsFactory', 'appSettings' ];
    
     angular.module('showsApp')
      .controller('ShowsController', ShowsController);
}());