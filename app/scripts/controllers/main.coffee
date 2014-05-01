'use strict'

angular.module('rmOnlineApp')
  .controller 'NavCtrl', ($scope, $location) ->
    $scope.navLinks = [
      {
        link: ''
        link_text: 'Home'
      }
      {
        link: 'about'
        link_text: 'About'
      }
      {
        link: 'services'
        link_text: 'Services'
      }
      {
        link: 'contact'
        link_text: 'Contact'
      }
      {
        link: 'faq'
        link_text: 'FAQ'
      }
    ]
    $scope.navClass = (page) ->
      currentRoute = $location.path().substring(1) || '/'
      ret =  if page == currentRoute then 'pure-menu-selected' else ''
      ret
  .controller 'PagesMainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
