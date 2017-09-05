/* global angular */
(function () {
  angular.module('kaPort')
  .controller('CvController', [
    CvController
  ])

  function CvController () {
    this.brand = 'A well-rounded web developer with strong business leadership experience who ignites organizations by innovating and building strong relationships through transparency, clean code, fresh perspectives, and positivity!'
    this.education = [
      {
        school_name: 'General Assembly DC',
        start_date: 2017,
        end_date: 2017,
        description: 'Will graduate from General Assembly DC in September 2017 from the Web Development Immersive Program.  A 12-week 500 hour full-time program where I learned several different technologies including, JavaScript & Ruby.',
        img_url: 'images/ga_logo.png'
      },
      {
        school_name: 'Elon University',
        start_date: 2008,
        end_date: '2012',
        description: 'Graduated from Elon University with a B.S in Accounting.',
        img_url: 'images/elon_logo.png'
      }
    ]
    this.skills = [
      { name: 'Ruby', confidence: 3, img_url: 'images/icon_ruby.png' },
      { name: 'JavaScript', confidence: 3, img_url: 'images/icon_js.png' },
      { name: 'Rails', confidence: 5, img_url: 'images/icon_rails.png' },
      { name: 'AngularJS', confidence: 3, img_url: 'images/icon_angularjs.png' },
      { name: 'HTML5', confidence: 5, img_url: 'images/icon_html.png' },
      { name: 'CSS3', confidence: 4, img_url: 'images/icon_css.png' },
      { name: 'Sinatra', confidence: 3, img_url: 'images/icon_sinatra.svg' },
      { name: 'PostgreSQL', confidence: 3, img_url: 'images/icon_pgsql.png' },
      { name: 'MEAN', confidence: 2, img_url: 'images/icon_mean.png' },
      { name: 'ReactJS', confidence: 2, img_url: 'images/icon_react.svg' }
    ]
    this.job = [
      {
        title: 'Freelance Web Developer',
        organization: '',
        start_year: 2017,
        end_year: 0,
        current: true,
        description: 'I coordinate, plan, and develop landing pages and small web applications for local businesses, non-profits, startups, and creatives.',
        img_url: ''
      },
      {
        title: 'Operations Manager',
        organization: 'US2020',
        start_year: 2015,
        end_year: 2017,
        current: false,
        description: 'A non-profit who\'s mission is to expose underrepresented communities to STEM fields by way of mentors.  I managed 50+ AmeriCorps VISTA volunteers; includes recruitment, events, and training Increased retention rate of 8% in one year via facilitating monthly meetings, conducting individual wellness check-ins, & implementing communication channels for the nationwide team Planned, led, & executed four team retreats, policy efforts via meetings with staff of Congress, Theory of Change working group & participated in strategic planning working groups.',
        img_url: 'images/logo_us2020.png'
      },
      {
        title: 'Executive Team Leader',
        organization: 'Target Corporation',
        start_year: 2013,
        end_year: 2015,
        current: false,
        description: 'As an Executive team lead, I led 60+ team members on the sales floor (100+ indirectly) in an $80 million store. Planned, staffed, & completed multiple large remodels (largest totaling $80k in expenses); resulted in a 2.5% gross margin increase. Mentored several team members; 7 earned promotions at the store.',
        img_url: 'images/logo_target.png'
      }
    ]
    this.community = [
      {
        organization: 'Code For DC',
        position: 'Member',
        start_date: '201707',
        current: true,
        end_date: '',
        description: 'I attend twice a month and the group works with non-profit organizations and local businesses to build them web applications, landing pages, or sift through data that would otherwise be too difficult for them to do without assistance.',
        img_url: 'images/logo_codefor.png',
        url: 'https://codefordc.org/'
      }
    ]
  }
})()
