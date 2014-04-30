'use strict'

angular
  .module('rmOnlineApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/pages/main.html'
        controller: 'PagesMainCtrl'
      .when '/contact',
        templateUrl: 'views/pages/contact.html'
        controller: 'PagesContactCtrl'
      .otherwise
        redirectTo: '/'

