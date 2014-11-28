(function() {
var app = angular.module('showsApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
   $routeProvider
        .when('/', {
            controller: 'ShowsController',
            templateUrl: 'app/views/shows.html'
            })
        .when('/actors/:showId',{
            controller: 'ActorsController',
            templateUrl: 'app/views/actors.html'
            })
        .when('/actors', {
            controller: 'AllActorsController',
            templateUrl: 'app/views/allactors.html'
        })    
         .otherwise( {redirectTo: '/'});
        });   
}());