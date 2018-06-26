const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(){

};

SelectView.prototype.bindEvents = function(){
  const menuItems = document.querySelectorAll('li');
  for (item of menuItems) {
   item.addEventListener('click', (event) => {
     const selectedPlanet = event.target.id;
     PubSub.publish("SelectView:click", selectedPlanet);
     // console.log(event.target.id);
   })

  }

};

module.exports = SelectView;
