/* global angular */

(function () {
  angular.module('kaPort')
  .controller('ProjectsController', [
    'projects',
    ProjectsController
  ])
  .factory('projects', [
    projectsService
  ])

  function projectsService () {
    const projects = [
      { name: 'Memory Match', img_url: 'images/memorymatch.png', description: 'My first full project.  This is a simple game of memory match, using JS/JQuery for the logic and HTML5/CSS3 on the front.  I occasionally go back and add some small additions.', tech: ['CSS3', 'JavaScript', 'JQuery'], git_url: '' },
      { name: 'Extremely Nerdy: Trivia Game', img_url: 'images/quizzle.png', description: 'A fun trivia game, this was my first logic based game/application. Eventually, I plan to go back and refactor this with Angular and re-style the entire application.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'], git_url: '' },
      { name: 'J&T Remodeling', img_url: 'images/jtremodel.png', description: 'J&T Remodeling is a small family owned remodeling company in Washington, DC.  I created this website to help them gain a larger client base and am still making small adjustments as I continue to learn.', tech: ['HTML5', 'CSS3'], git_url: '' },
      { name: 'TWiCS', img_url: 'images/twics.png', description: 'An app that transforms your tweets or other person`s tweets into pictures. Hilarious and ridiculous but sure to make you smile, laugh, or stare in confusion. Created with two other developers: Charles Cox & Frew Nagash.', tech: ['Ruby', 'Ruby on Rails', 'AngularJS', 'HTML5', 'CSS3', 'PgSQL'], git_url: '' },
      { name: 'Music Database', img_url: 'images/music.png', description: 'Add your favorite songs to this database to share with others.', tech: ['AngularJS', 'HTML5', 'CSS3'], git_url: '' },
      { name: 'D2Hub', img_url: 'images/d2hub.png', description: 'An application that helps new players get acclimated to one of the largest, most complex, and competitive PC games out right now.  Provides users with information about the 115 heroes and techniques to learn and use them.  This was created with Ruby on Rails with full CRUD without an API. I will be adding more models and connecting to an API in the future with a lot more functionality.', tech: ['HTML5', 'CSS3', 'Ruby', 'Ruby on Rails', 'ActiveRecord', 'PgSQL'], git_url: '' },
      { name: 'REY Photographs', img_url: '', description: 'In Progress: A website for a local DC photographer to showcase her work.', tech: ['HTML5', 'CSS3', 'Ruby on Rails', 'AngularJS'], git_url: '' },
      { name: 'Web Dev Prompter', img_url: '', description: 'In Progress: Creates a Random Scheme and Idea for you to practice creating static or dynamic sites. Plenty of options and difficulties to meet your needs.', tech: ['HTML5', 'CSS3', 'Ruby on Rails', 'AngularJS'], git_url: '' }
    ]
    return {
      all: all
    }
    function all () {
      return projects
    }
  }

  function ProjectsController (projects) {
    this.projects = projects.all()
  }
})()
