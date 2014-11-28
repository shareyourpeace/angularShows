(function() {
    var showsFactory = function($http) {
    
        var factory = {};
        
        factory.getShows = function() {
            return $http.get('/shows');
        };
        
        factory.getShow = function(showId) {
            return $http.get('/shows/' + showId);
        };
        
        factory.getActors = function() {
            return $http.get('/actors');
        }
        
        factory.deleteShow = function(showId) {
            return $http.delete('/shows/' + showId);
        }
        
        return factory;
    };
    
    showsFactory.$inject = ['$http'];
        
    angular.module('showsApp').factory('showsFactory', 
                                           showsFactory);
                                           
}());