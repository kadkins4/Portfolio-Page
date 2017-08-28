/* global angular */

(function () {
  angular.module('kaPort')
  .factory('projects', [
    projects
  ])
  .controller('ProjectsController', [
    ProjectsController
  ])

  function ProjectsController (projects) {
    this.projects = projects.all()
  }

  function projects () {
    var list = [
      { name: 'Memory Match', img_url: '', description: 'My first full project.  This is a simple game of memory match, using JS/JQuery for the logic and HTML5/CSS3 on the front.  I occasionally go back and add some small addtions.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'] },
      { name: 'Extremely Nerdy: Trivia Game', img_url: '', description: 'A fun trivia game, this was my first logic based game/application. Eventually, I plan to go back and refactor this with Angular and re-style the entire application.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'] },
      { name: 'J&T Remodeling', img_url: '', description: 'J&T Remodeling is a small family owned remodeling company in Washington, DC.  I created this website to help them gain a larger client base and am still making small adjustments as I continue to learn.', tech: ['HTML5', 'CSS3'] },
      { name: 'TWiCS', img_url: '', description: '', tech: ['Ruby', 'Ruby on Rails', 'AngularJS', 'HTML5', 'CSS3', 'ActiveRecord', 'PgSQL'] },
      { name: 'Music Database', img_url: '', description: '', tech: ['AngularJS', 'HTML5', 'CSS3'] },
      { name: 'D2Hub', img_url: '', description: '', tech: ['HTML5', 'CSS3', 'Ruby', 'Ruby on Rails', 'ActiveRecord', 'PgSQL'] },
      { name: 'REY Photographs', img_url: '', description: '', tech: ['HTML5', 'CSS3', 'Ruby on Rails', 'AngularJS'] }
    ]
    function all () {
      return list
    }
    return {
      all: all
    }
  }
})()
