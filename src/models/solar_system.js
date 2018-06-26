const PubSub = require("../helpers/pub_sub.js");

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe("SelectView:click", (evt) => {
    const selectedIndex = evt.detail;
    console.log(evt);
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail = function(planetIndex){
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish("SolarSystem:selected-planet-ready", selectedPlanet)
};

module.exports = SolarSystem;
