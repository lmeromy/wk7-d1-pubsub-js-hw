const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const numInput = event.target.number.value;
    // console.log('inputted number is: ', numInput);
    PubSub.publish('FormView:num-submitted', numInput);
  })

};

module.exports = FormView;
