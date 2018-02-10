/* jshint node: true, browser: true */
'use strict'

var angular = require('angular');

var seedapp = angular.module('seedapp',[
    require('angular-material'),
    require('angular-animate'),
    require('angular-aria'),
    require('angular-route'),
    require('./index.js')
]);


seedapp.config(['$locationProvider',
    function ($locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
    }
]);

seedapp.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/app/partials/home-view.html'
            })
            .when('/counter', {
                templateUrl: '/app/partials/counter-view.html',
                controller: 'CounterCtrl as counter'
            })
            .otherwise({
                redirectTo: '/'
            });

}]);

angular.element(document).ready(function () {

    angular.bootstrap(document, ['seedapp']);
});
