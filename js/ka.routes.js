/* global angular */

(function () {
  angular.module('kaPort')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    Router
  ])

  function Router ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true)
    $locationProvider.html5Mode(true)
    $locationProvider.hashPrefix('')
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/ng-views/home.html'
    })
    .state('who', {
      url: '/who',
      controller: 'WhoController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/who.html'
    })
    .state('projects', {
      url: '/projects',
      controller: 'ProjectsController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/projects.html'
    })
    .state('cv', {
      url: '/cv',
      controller: 'CvController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/cv.html'
    })
    $urlRouterProvider.otherwise('/home')
  }
})()
