/* global angular */
(function () {
  angular.module('kaPort')
  .controller('CvController', [
    CvController
  ])

  function CvController () {
    this.education = [
      {
        school_name: '',
        start_date: '',
        end_date: '',
        description: '',
        img_url: ''
      }
    ]
    this.skills = [
      {
        name: '',
        confidence: '',
        img_url: ''
      }
    ]
    this.job = [
      {
        title: '',
        organization: '',
        start_year: 2017,
        end_year: 0,
        current: true,
        description: '',
        img_url: ''
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
        img_url: '',
        url: 'https://codefordc.org/'
      },
      {
        organization: '',
        position: '',
        start_date: '',
        current: true,
        end_date: '',
        description: '',
        img_url: '',
        url: ''
      }
    ]
  }
})()
