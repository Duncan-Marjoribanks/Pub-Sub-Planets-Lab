const PubSub = require("../helpers/pub_sub.js");

const PlanetView = function(){

};

PlanetView.prototype.bindEvents = function(){
  PubSub.subscribe("SolarSystem:selected-planet-ready", (evt) => {
    console.log(evt);
    const planet = document.querySelector(".planet-details");
    const planetInfo = document.createElement('p');
    planetInfo.textContent = `${evt.detail}`;
    planet.appendChild(planetInfo);
    // console.log(planetInfo);
  })
};

module.exports = PlanetView;
