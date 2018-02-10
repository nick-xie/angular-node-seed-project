var angular = require('angular');

var common = angular.module('seedapp.Common', []);

// Controllers

common.controller('IndexCtrl', [
    '$rootScope',
    '$window',
    '$timeout',
    require('./controllers/indexController')
]);

common.controller('CounterCtrl', [
    '$rootScope',
    '$window',
    '$timeout',
    require('./controllers/counterController')
]);

// Factory example

// common.factory('YourModel', [
//     '$http',
//     require('./models/yourModel')
// ]);

// Service example

// common.service('yourService', [
//     '$rootScope',
//     require('./services/yourService')
// ]);

module.exports = common.name;
