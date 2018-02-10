'use strict';

var _ = require('lodash');

module.exports = function ($rootScope, $window, $timeout) {
    $rootScope.currentNav = 'counter'; // index nav bar

    var counterCtrl = this;

    counterCtrl.number = 0;
    counterCtrl.adjuster = 0;
    counterCtrl.lastUpdate = "";

    // -- PUBLIC METHODS ---
    counterCtrl.add = function(x) {
        counterCtrl.number = counterCtrl.number + x;
        updateLast("+" + x);
    };

    counterCtrl.subtract = function(x) {
        counterCtrl.number = counterCtrl.number - x;
        updateLast("-" + x);
    };

    // -- PRIVATE METHODS ---
    // redundant function, just showing how private method would be implemented
    function updateLast(x) {
        counterCtrl.lastUpdate = x;
    }
};
