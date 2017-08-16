'use strict';

/**
 * @ngdoc function
 * @name formApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formApp
 */
angular.module('formApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('DateController', ['$scope', function() {
    let ctrl = this;
    ctrl.minDateString = moment().subtract(12, 'hours').format('YYYY-MM-DD');
  }]);
