const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require("./views/select_view.js");

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const clickedElement = document.querySelector(".planet-menu");
  const planetSelected = new SelectView(clickedElement);
  planetSelected.bindEvents();


});
