/* global angular */

(function () {
  angular.module('twics')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    Router
  ])

  function Router ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('twicsIndex', {
      url: '/twics/phrase',
      templateUrl: 'js/twics/ng-views/phrase/index.html',
      controller: 'TwicIndexController',
      controllerAs: 'vm'
    })
    .state('twicsNew', {
      url: '/twics/phrase/new',
      templateUrl: 'js/twics/ng-views/phrase/new.html',
      controller: 'TwicNewController',
      controllerAs: 'vm'
    })
    .state('twicsShow', {
      url: '/twics/phrase/:id',
      templateUrl: 'js/twics/ng-views/phrase/show.html',
      controller: 'TwicShowController',
      controllerAs: 'vm'
    })
    .state('twicsTweetIndex', {
      url: '/twics/tweet',
      templateUrl: 'js/twics/ng-views/tweet/index.html',
      controller: 'TwicTweetIndexController',
      controllerAs: 'vm'
    })
    .state('twicsTweetNew', {
      url: '/tweet/new',
      templateUrl: 'js/twics/ng-views/tweet/new.html',
      controller: 'TwicTweetNewController',
      controllerAs: 'vm'
    })
    .state('twicsTweetShow', {
      url: '/twics/tweet/:id',
      templateUrl: 'js/twics/ng-views/tweet/show.html',
      controller: 'TwicTweetShowController',
      controllerAs: 'vm'
    })
    $urlRouterProvider.otherwise('/twics/phrase/new')
  }
})()
