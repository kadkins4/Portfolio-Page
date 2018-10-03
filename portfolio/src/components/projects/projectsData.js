export const projects = [
  {
    id: 1,
    name: 'The Cipher Brief Main Website',
    showInSearch: true,
    display: true, /** bool **/ // @wilo: change to render
    type: ['Wordpress', 'News Website', 'Startup'],
    displayName: 'TheCipherBrief',
    githubURL: '',
    hostedURL: 'https://www.thecipherbrief.com/',
    // will have to use FS to create 
    // file path that will not break
    snapshotPath: '',
    company: 'The Cipher Brief',
    technology: ['PHP', 'JavaScript', 'CSS3', 'Wordpress'],
    description: 'My first official contract, I was tasked with revamping their pre-existing website to make it look more modern and streamline it for their viewers, along with fixing any bugs that were present.  During this process, they also changed to a subscription based model which I implemented as well.'
  },
  {
    id: 2,
    name: 'Twics!',
    showInSearch: true,
    display: true, /** bool **/ // @wilo: change to render
    type: ['fun', 'website', 'application', 'api'],
    displayName: 'Twics: Tweets to Pics',
    githubURL: 'https://github.com/kadkins4/TWiCS',
    hostedURL: 'https://kadkins4.github.io/TWiCS/#/twics/new',
    // will have to use FS to create 
    // file path that will not break
    snapshotPath: '',
    company: 'General Assembly',
    technology: ['AngularJs', 'Rails', 'SQL', 'APIs'],
    description: 'TWICS! Tweets to pics, was my first group project and first full usage of an API, two APIs to be exact.  We decided to focus more on the functionality of the application versus the style.  Try it out. There are two ways to interact, type in a twitter handle or type in a tweet and see the result in the form of pictures. Utilizing Twitter API and Flickr API. Frontend in AngularJS, backend in Rails.  NOTE: If you are the first person to hit the server that day, it will take about 30 seconds for the first result to return.'
  },
  {
    id: 3,
    name: 'Extremely Nerdy: Trivia Game',
    showInSearch: true,
    display: true,
    type: ['game', 'browser game', 'mobile application', 'HTML5 Game'],
    displayName: 'Trivia, Nerd Style',
    githubURL: 'https://github.com/kadkins4/project-1',
    hostedURL: 'https://kadkins4.github.io/project-1/',
    snapshotPath: '',
    company: 'General Assembly',
    technology: ['HTML5/CSS3', 'VueJs', 'JavaScript', 'JQuery'],
    description: 'A fun trivia game, this was my first JavaScript logic based game/application. Eventually, I plan to go back and refactor this with a framework ( most likely VueJS or ReactJS ) and re-style the entire application.'
  },
  {
    id: 4,
    name: 'Kendall Adkins Portfolio Site',
    showInSearch: true,
    display: true,
    type: ['Website', 'Portfolio', 'Single Page Application'],
    displayName: 'KendallAdkins.me',
    githubURL: 'https://github.com/kadkins4/Portfolio-Page',
    hostedURL: 'http://kendalladkins.me',
    snapshotPath: '',
    company: 'STIX APPLICATIONS',
    technology: ['VueJS', 'CSS3', 'JavaScript'],
    description: 'This website that you are currently looking at.  I built this in order to have a working application utilizing VueJS, a JavaScript framework.  This took me a little over a week to build and I am still working on fine-tuning.'
  },
  { 
    id: 5,
    name: 'The Cipher Brief Threat Conference Site',
    showInSearch: true,
    display: true,
    type: ['Wix', 'E-Commerce', 'Startup'],
    displayName: 'TCB: Threat Conference',
    githubURL: '',
    hostedURL: 'https://www.tcbconference.com/',
    snapshotPath: '',
    company: 'The Cipher Brief',
    technology: ['Wix', 'E-Commerce'],
    description: 'The Cipher Brief holds an annual threat conference with some of the biggest names in national security attending. This startup needed a separate website that they could easily maintain so we decided to create them a WYSIWYG ( What You See Is What You Get ) site utilizing Wix.  This allows them to change their content every year and not need to hire a developer for small changes.'
  },
  { 
    id: 6,
    name: 'The Cipher Brief Threat Advisory Board',
    showInSearch: true,
    display: true,
    type: ['News', 'Subscription', 'Wordpress', 'Custom Theme'],
    displayName: 'Threat Advisory Board',
    githubURL: 'https://github.com/kadkins4/TCB_Cyber-Advisory-Board',
    hostedURL: 'https://www.thecipherbriefcyber.com',
    snapshotPath: '',
    company: 'The Cipher Brief',
    technology: ['Wordpress', 'PHP', 'CSS3'],
    description: 'Working with The Cipher Brief, they were experimenting in subscription based news for some of their clients.  Working with one other developer we had 3 days to turn around a full subscription based website on Wordpress with a custom theme.  This was the BETA for their subscription based model that they now adopted on their main site.'
  },
  { 
    id: 7,
    name: 'Store.ABA.com',
    showInSearch: true,
    display: true,
    type: ['Non-profit', 'Financial', 'Banking', 'E-Commerce'],
    displayName: 'ABA E-Commerce',
    githubURL: '',
    hostedURL: 'https://store.aba.com',
    snapshotPath: '',
    company: 'American Bankers Association',
    technology: ['Sitefinity', 'ASP.NET', 'JS', 'Basic'],
    description: 'My first and current full-time (non-contract) position in the web development sphere. This is one of the many websites that I continually work on.  From implementing GDPR requirements to bug fixes to improving the overall user experience.  In order to work on this I had to learn Basic, ASP.NET, and how to utilize Sitefinity, on the fly.'
  },
  { 
    id: 8,
    name: 'DOTA 2 Hub',
    showInSearch: true,
    display: true,
    type: ['Gaming', 'CRUD', 'Application'],
    displayName: 'DOTA 2 HUB',
    githubURL: 'https://github.com/kadkins4/Project-2',
    hostedURL: 'https://dota2hub.herokuapp.com/',
    snapshotPath: '',
    company: 'General Assembly',
    technology: ['Heroku', 'PGSQL', 'Ruby on Rails', 'oAuth'],
    description: 'Now, you may see this and say... ehh looks like shit. But I love this project. It was my first actual application (front and backend), solely planned, from wireframe to development with a full README and I had so much fun creating it. And yes, I\'m a huge nerd! Why not go back and fix it up? I\'m working on something just as nerdy and more involved which is needed for this game. :) and I\'m so happy!'
  },
  { 
    id: 9,
    name: 'Retro Snake',
    showInSearch: true,
    display: true,
    type: ['Gaming', 'Vanilla JS'],
    displayName: 'Retro Snake',
    githubURL: 'https://github.com/kadkins4/SnakeHTML',
    hostedURL: '',
    snapshotPath: '',
    company: 'STIX Applications',
    technology: ['HTML5', 'JS', 'CSS3'],
    description: 'I haven\'t deployed this one yet but this is the first real time game that I built using canvas. I had so much fun making it ( and playing it ) that I started adding in an arcade retro look to it. I occasionally still pop back in the code to add something random, like it getting incrementally harder. The only way to access this at the moment is to clone it and run it locally.'
  }
]
// { 
//   id: null,
//   name: '',
//   showInSearch: true,
//   display: true,
//   type: [],
//   displayName: '',
//   githubURL: '',
//   hostedURL: '',
//   snapshotPath: '',
//   company: '',
//   technology: [],
//   description: ''
// }