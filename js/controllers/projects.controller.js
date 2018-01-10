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
      { id: 5, name: 'Memory Match', img_url: 'images/memorymatch.png', description: 'My first project at General Assembly, although heavily assisted, this is one that I am really proud of and started the process to creating all that is listed below.  A simple game of memory match using JS/JQuery and HTML5/CSS3.  I occasionally go back and add some small additions.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'], git_url: '', live_url: '' },
      { id: 3, name: 'Extremely Nerdy: Trivia Game', img_url: 'images/quizzle.png', description: 'A fun trivia game, this was my first logic based game/application. Eventually, I plan to go back and refactor this with Angular and re-style the entire application.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JQuery'], git_url: 'https://github.com/kadkins4/project-1', live_url: '' },
      { id: 2, name: 'J&T Remodeling', img_url: 'images/jtremodel.png', description: 'J&T Remodeling is a small family owned remodeling company in Washington, DC.  I created this website to help them gain a larger client base and am still making small adjustments as I continue to learn.', tech: ['HTML5', 'CSS3'], git_url: 'https://github.com/kadkins4/J-T-Remodeling', live_url: '' },
      { id: 8, name: 'TWiCS', img_url: 'images/twics.png', description: 'An app that transforms your tweets or other people`s tweets into pictures. Hilarious and ridiculous but sure to make you smile, laugh, or stare in confusion. Created with two other developers: Charles Cox & Frew Nagash.', tech: ['Ruby', 'Ruby on Rails', 'AngularJS', 'HTML5', 'CSS3', 'PgSQL'], git_url: 'https://github.com/kadkins4/TWiCS', live_url: 'https://kadkins4.github.io/TWiCS/' },
      // { id: 6, name: 'Music Database', img_url: 'images/music.png', description: 'Add your favorite songs to this database to share with others.', tech: ['AngularJS', 'HTML5', 'CSS3'], git_url: '', live_url: '' },
      { id: 7, name: 'D2Hub', img_url: 'images/d2hub.png', description: 'An application that helps new players get acclimated to one of the largest, most complex, and competitive PC games out right now.  Provides users with information about the 115 heroes and techniques to learn and use them.  This was created with Ruby on Rails with full CRUD without an API. I will be adding more models and connecting to an API in the future with a lot more functionality.', tech: ['HTML5', 'CSS3', 'Ruby', 'Ruby on Rails', 'ActiveRecord', 'PgSQL'], git_url: 'https://github.com/kadkins4/Project-2', live_url: '' },
      // { id: 7, name: 'nspire', img_url: '', description: 'In Progress: Creates a Random Scheme and Idea for you to practice creating static or dynamic sites. Plenty of options and difficulties to meet your needs.', tech: ['HTML5', 'CSS3', 'VueJS'], git_url: 'https://github.com/kadkins4/Nspire-Prompts', live_url: '' },
      { id: 1, name: 'The Cipher Brief', img_url: 'images/tcb.png', description: 'A startup news organization which specializes in security information.  When I joined as a contractor, they had a functioning Wordpress website, but were in need of a lot more functionality and needed to craft a better user experience.  Working on this project, I work with PHP, to continue to build out their custom theme, JS, and CSS3. I am still working for this organization as a part-time contractor.', tech: ['Wordpress', 'CSS3', 'PHP', 'JavaScript'], git_url: '', live_url: 'https://thecipherbrief.com' },
      { id: 4, name: 'The Cipher Brief: Conference Site', img_url: 'images/tcbconf.png', description: 'While working with The Cipher Brief, they informed me that they were in need of a conference website in very little time.  After several discussions, we decided that the best option would be utilizing Wix.', tech: ['Wix', 'CSS3', 'HTML5', 'JavaScript'], git_url: '', live_url: 'https://tcbconference.com' }
      // { id: 7, name: 'nspire', img_url: '', description: 'In Progress: Creates a Random Scheme and Idea for you to practice creating static or dynamic sites. Plenty of options and difficulties to meet your needs.', tech: ['HTML5', 'CSS3', 'VueJS'], git_url: 'https://github.com/kadkins4/Nspire-Prompts', live_url: '' }
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
    this.icon = {
      HTML5: 'icon_html.png',
      CSS3: 'icon_css.png',
      ReactJS: 'icon_react.svg',
      Ruby: 'icon_ruby.png',
      Sinatra: 'icon_sinatra.svg',
      VueJS: 'icon_vuejs.png',
      AngularJS: 'icon_angularjs.png',
      JavaScript: 'icon_js.png',
      PgSQL: 'icon_pgsql.png',
      Rails: 'icon_rails.png',
      MEAN: 'icon_mean.png',
      Wordpress: '',
      PHP: '',
      Wix: ''
    }
  }
})()
