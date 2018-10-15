const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:num-submitted', (event) => {
    const numInput = event.detail;
    const result = this.numberIsPrime(numInput);
    // console.log('number is prime', result);
    PubSub.publish('PrimeChecker:result', result);
  })
};

PrimeChecker.prototype.numberIsPrime = function (number) {
      if (number <= 1) {
        return `No! ${number} is not a prime number.`;
      }
      // solution adapted from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
      // it seems more efficient since you don't need to check as many numbers for each iteration
      let root = Math.floor(Math.sqrt(number));
      for (let i = 2; i <= root; i++) {
          if (number % i === 0) {
              return `No! ${number} is not a prime number.`;
          }
      }
      return `Yes! ${number} is a prime number.`;
  };

module.exports = PrimeChecker;
