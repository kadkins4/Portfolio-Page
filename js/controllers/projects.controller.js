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
      { id: 1, name: 'Memory Match', img_url: 'images/memorymatch.png', description: 'My first project at General Assembly, although heavily assisted, this is one that I am really proud of and started the process to creating all that is listed below.  A simple game of memory match using JS/JQuery and HTML5/CSS3.  I occasionally go back and add some small additions.', tech: ['CSS3', 'JavaScript', 'JQuery'], git_url: '', live_url: '' },
      { id: 3, name: 'Extremely Nerdy: Trivia Game', img_url: 'images/quizzle.png', description: 'A fun trivia game, this was my first logic based game/application. Eventually, I plan to go back and refactor this with Angular and re-style the entire application.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'], git_url: 'https://github.com/kadkins4/project-1', live_url: '' },
      { id: 2, name: 'J&T Remodeling', img_url: 'images/jtremodel.png', description: 'J&T Remodeling is a small family owned remodeling company in Washington, DC.  I created this website to help them gain a larger client base and am still making small adjustments as I continue to learn.', tech: ['HTML5', 'CSS3'], git_url: 'https://github.com/kadkins4/J-T-Remodeling', live_url: '' },
      { id: 4, name: 'TWiCS', img_url: 'images/twics.png', description: 'An app that transforms your tweets or other people`s tweets into pictures. Hilarious and ridiculous but sure to make you smile, laugh, or stare in confusion. Created with two other developers: Charles Cox & Frew Nagash.', tech: ['Ruby', 'Ruby on Rails', 'AngularJS', 'HTML5', 'CSS3', 'PgSQL'], git_url: 'https://github.com/kadkins4/TWiCS', live_url: '' },
      // { id: 6, name: 'Music Database', img_url: 'images/music.png', description: 'Add your favorite songs to this database to share with others.', tech: ['AngularJS', 'HTML5', 'CSS3'], git_url: '', live_url: '' },
      { id: 5, name: 'D2Hub', img_url: 'images/d2hub.png', description: 'An application that helps new players get acclimated to one of the largest, most complex, and competitive PC games out right now.  Provides users with information about the 115 heroes and techniques to learn and use them.  This was created with Ruby on Rails with full CRUD without an API. I will be adding more models and connecting to an API in the future with a lot more functionality.', tech: ['HTML5', 'CSS3', 'Ruby', 'Ruby on Rails', 'ActiveRecord', 'PgSQL'], git_url: 'https://github.com/kadkins4/Project-2', live_url: '' },
      { id: 7, name: 'nspire', img_url: '', description: 'In Progress: Creates a Random Scheme and Idea for you to practice creating static or dynamic sites. Plenty of options and difficulties to meet your needs.', tech: ['HTML5', 'CSS3', 'VueJS'], git_url: 'https://github.com/kadkins4/Nspire-Prompts', live_url: '' }
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
