// Code your solution in this file!
// returnFirstTwoDrivers - Returns the first two drivers from an array of drivers.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers - Returns the last two drivers from an array of drivers.
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers - An array containing the two functions defined above.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier - Returns a function that multiplies a fare by a given integer.
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler - Doubles a fare using createFareMultiplier.
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler - Triples a fare using createFareMultiplier.
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers - Selects drivers based on the given function (either returnFirstTwoDrivers or returnLastTwoDrivers).
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  