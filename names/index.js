const namesList = require("..country/state/city/index");
const getFirstNames = require("..utilities/utils/index");
const firstNamesList = [];

function getPeopleInCity(namesList) {
  firstNamesList = getFirstNames(namesList);
  return firstNamesList;
}

module.exports = getPeopleInCity;
