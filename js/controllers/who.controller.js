/* global angular */
(function () {
  angular.module('kaPort')
  .controller('WhoController', [
    '$interval',
    WhoController
  ])

  function WhoController ($interval) {
    this.attributes = [
      { content: 'Full-Stack Web Developer', info: 'Rails, AngularJS, ReactJS, & CSS3' },
      { content: 'MD >> NC >> DC', info: 'Grew up in Baltimore; college in Elon' },
      { content: 'DC United & Chelsea', info: 'Frank Lampard, Didier Drogba, & Tobin Heath' },
      { content: 'Indie Music', info: 'The Black Keys, Lewis Del Mar, Alt-J, & Misterwives' },
      { content: 'Traveler. Hiker. Runner.', info: 'Triathlon, Tough Mudder, and ...' },
      { content: 'Gamer', info: 'Video Games & Board Games' }
    ]

    // lacking exit animation, seems clunky
    // have another interval, initiates slightly ahead -- triggers function for ng-class (exit animation)

    // every interval, increase index
    $interval(carousel.bind(this), 4000)
    // every interval triggers this function to animate next attribute
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
