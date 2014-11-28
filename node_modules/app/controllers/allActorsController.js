(function() {
    
    var AllActorsController = function ($scope, showsFactory) {
        $scope.actors = null;
        $scope.actorsTotal = 0.0;
        $scope.totalType;
        
        function init() {
             showsFactory.getActors()
                .success(function(actors) {
                    $scope.actors = actors;
                    getActorsTotal();
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }        
        
        function getActorsTotal() {
            var total = 0;
            for (var i=0,len=$scope.actors.length;i<len;i++) {
                total += $scope.actors[i].total;
            }
            $scope.actorsTotal = total;
            $scope.totalType = ($scope.actorsTotal > 100) ? 'success' : 'danger';
        }

        init();
    };
    
    AllActorsController.$inject = ['$scope', 'showsFactory'];

    angular.module('showsApp')
      .controller('AllActorsController', AllActorsController);
    
}());