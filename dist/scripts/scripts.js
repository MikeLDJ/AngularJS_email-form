'use strict';

/**
 * @ngdoc overview
 * @name formApp
 * @description
 * # formApp
 *
 * Main module of the application.
 */
angular
  .module('formApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'moment-picker'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('formApp').config(["$locationProvider", function ($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

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

'use strict';

/**
 * @ngdoc function
 * @name formApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formApp
 */
angular.module('formApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('formApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <form name=\"contactForm\" class=\"form-horizontal\" novalidate> <div class=\"form-group\"> <label for=\"inputRecipent\" class=\"col-sm-3 control-label\">Recipient Name</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.recipientName.$touched && contactForm.recipientName.$valid,\n" +
    "          'has-error' : contactForm.recipientName.$touched && contactForm.recipientName.$invalid\n" +
    "        }\"> <input type=\"text\" class=\"form-control\" name=\"recipientName\" id=\"inputRecipent\" placeholder=\"max. 200 characters\" ng-maxlength=\"2\" ng-model=\"form.recipientName\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.recipientName.$touched && contactForm.recipientName.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.recipientName.$touched && contactForm.recipientName.$valid\"> </span> </div> </div> <div class=\"form-group\"> <label for=\"inputRemail\" class=\"col-sm-3 control-label\">Recipent Email</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.recipientEmail.$touched && contactForm.recipientEmail.$valid,\n" +
    "          'has-error' : contactForm.recipientEmail.$touched && contactForm.recipientEmail.$invalid\n" +
    "        }\"> <input type=\"email\" class=\"form-control\" name=\"recipientEmail\" id=\"inputRemail\" placeholder=\"valid e-mail\" ng-model=\"form.recipientEmail\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.recipientEmail.$touched && contactForm.recipientEmail.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.recipientEmail.$touched && contactForm.recipientEmail.$valid\"> </span> </div> </div> <div class=\"form-group\"> <label for=\"inputTitle\" class=\"col-sm-3 control-label\">Title</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.title.$touched && contactForm.title.$valid,\n" +
    "          'has-error' : contactForm.title.$touched && contactForm.title.$invalid\n" +
    "        }\"> <input type=\"text\" class=\"form-control\" id=\"inputTitle\" name=\"title\" placeholder=\"max. 200 characters\" ng-maxlength=\"200\" ng-model=\"form.title\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.title.$touched && contactForm.title.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.title.$touched && contactForm.title.$valid\"> </span> </div> </div> <div class=\"form-group\"> <label for=\"inputMessage\" class=\"col-sm-3 control-label\">Message</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.text.$touched && contactForm.text.$valid,\n" +
    "          'has-error' : contactForm.text.$touched && contactForm.text.$invalid\n" +
    "        }\"> <textarea class=\"form-control\" type=\"text\" id=\"inputMessage\" name=\"text\" rows=\"3\" placeholder=\"max. 2000 characters\" ng-maxlength=\"2000\" ng-model=\"form.text\" ng-required=\"true\"></textarea> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.text.$touched && contactForm.text.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.text.$touched && contactForm.text.$valid\"> </span> </div> </div> <div class=\"form-group\" ng-controller=\"DateController as ctrl\"> <div class=\"col-sm-offset-3 col-sm-9\"> <div class=\"row\"> <div class=\"input-group col-xs-12\" moment-picker=\"ctrl.datepicker\" locale=\"en\" format=\"YYYY-MM-DD\" start-view=\"month\" today=\"true\" min-date=\"ctrl.minDateString\" ng-class=\"{\n" +
    "              'has-success' : contactForm.datepicker.$touched && contactForm.datepicker.$valid,\n" +
    "              'has-error' : contactForm.datepicker.$touched && contactForm.datepicker.$invalid\n" +
    "            }\"> <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-calendar\"></i> </span> <input class=\"form-control\" name=\"datepicker\" placeholder=\"Select a date\" ng-model=\"ctrl.datepicker\" ng-model-options=\"{ updateOn: 'blur' }\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.datepicker.$touched && contactForm.datepicker.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.datepicker.$touched && contactForm.datepicker.$valid\"> </span> </div> <div class=\"input-group col-xs-12\" moment-picker=\"ctrl.timepicker\" locale=\"en\" format=\"HH:mm:ss\" min-date=\"ctrl.minDateString\" ng-class=\"{\n" +
    "            'has-success' : contactForm.timepicker.$touched && contactForm.timepicker.$valid,\n" +
    "            'has-error' : contactForm.timepicker.$touched && contactForm.timepicker.$invalid\n" +
    "          }\"> <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-time\"></i> </span> <input class=\"form-control\" name=\"timepicker\" placeholder=\"Select a time\" ng-model=\"ctrl.timepicker\" ng-model-options=\"{ updateOn: 'blur' }\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.timepicker.$touched && contactForm.timepicker.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.timepicker.$touched && contactForm.timepicker.$valid\"> </span> </div> </div> </div> </div> <div class=\"form-group\"> <label for=\"inputSender\" class=\"col-sm-3 control-label\">Sender Name</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.senderName.$touched && contactForm.senderName.$valid,\n" +
    "          'has-error' : contactForm.senderName.$touched && contactForm.senderName.$invalid\n" +
    "        }\"> <input type=\"text\" class=\"form-control\" id=\"inputSender\" name=\"senderName\" placeholder=\"max. 200 characters\" ng-maxlength=\"200\" ng-model=\"form.senderName\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.senderName.$touched && contactForm.senderName.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.senderName.$touched && contactForm.senderName.$valid\"> </span> </div> </div> <div class=\"form-group\"> <label for=\"inputSender\" class=\"col-sm-3 control-label\">Sender Email</label> <div class=\"input-group col-sm-9\" ng-class=\"{\n" +
    "          'has-success' : contactForm.senderEmail.$touched && contactForm.senderEmail.$valid,\n" +
    "          'has-error' : contactForm.senderEmail.$touched && contactForm.senderEmail.$invalid\n" +
    "        }\"> <input type=\"email\" class=\"form-control\" id=\"inputSender\" name=\"senderEmail\" placeholder=\"valid e-mail\" ng-model=\"form.senderEmail\" ng-required=\"true\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.senderEmail.$touched && contactForm.senderEmail.$invalid\"> </span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" ng-show=\"contactForm.senderEmail.$touched && contactForm.senderEmail.$valid\"> </span> </div> </div> <div class=\"row\"> <p class=\"small pull-right\">All fields are required</p> </div> <div class=\"form-group\"> <div class=\"col-sm-offset-3 col-sm-9\"> <button type=\"submit\" class=\"btn btn-default\" ng-disabled=\"contactForm.$invalid\">Send...</button> </div> </div> </form> </div>"
  );

}]);
