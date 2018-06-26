const PubSub = require("../helpers/pub_sub.js");

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe("SelectView:click", (evt) => {
    const selectedPlanet = evt.detail;
    console.dir(evt);
    this.publishPlanetDetail(selectedPlanet);
  });
};

SolarSystem.prototype.publishPlanetDetail = function(planetId){
  console.log(planetId);
  const selectedPlanet = this.findPlanet(planetId);;
  PubSub.publish("SolarSystem:selected-planet-ready", selectedPlanet)
};

SolarSystem.prototype.findPlanet = function(planetId){
  for(planet of this.planets){
    if(planet.name == planetId){
      return planet;
    }
};
}



module.exports = SolarSystem;
