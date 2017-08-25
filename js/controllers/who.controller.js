/* global angular */
(function () {
  angular.module('kaPort')
  .controller('WhoController', [
    '$interval',
    WhoController
  ])

  function WhoController ($interval) {
    this.myInterval = 5000
    this.attributes = [
      { content: 'Full-Stack Web Developer', info: 'Rails, AngularJS, ReactJS, & CSS3', img_url: '' },
      { content: 'MD >> NC >> DC', info: 'Grew up in Baltimore; college in Elon', img_url: '' },
      { content: 'DC United & Chelsea', info: 'Frank Lampard, Didier Drogba, & Tobin Heath', img_url: '' },
      { content: 'Indie Music', info: 'The Black Keys, Lewis Del Mar, Alt-J, & Misterwives', img_url: '' },
      { content: 'Traveler. Hiker. Runner.', info: 'Triathlon, Tough Mudder, and ...', img_url: '' },
      { content: 'Gamer', info: 'Video Games & Board Games', img_url: '' }
    ]

    // every interval, increase index
    $interval(carousel.bind(this), 6000)

    this.carouselIndex = 0
    function carousel () {
      if (this.carouselIndex >= this.attributes.length - 1) {
        this.carouselIndex = 0
      } else {
        this.carouselIndex ++
      }
    }
  }
})()
