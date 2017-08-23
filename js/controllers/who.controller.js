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
      { content: 'Full-Stack Web Developer' },
      { content: 'MD >> NC >> DC' },
      { content: 'DC United & Chelsea' },
      { content: 'Indie Music' },
      { content: 'Traveler. Hiker. Runner.' },
      { content: 'Gamer' },
      { content: 'Ruby:Rails Enthusiast' }
    ]

    // every interval, increase index
    $interval(carousel.bind(this), 4000)

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
