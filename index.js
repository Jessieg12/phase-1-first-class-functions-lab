// Code your solution in this file!
const returnFirstTwoDrivers = function (){
  return (['Antonia', 'Nuru', 'Amari', 'Mo']).slice(0,2)
}

const returnLastTwoDrivers = function (){
  return (['Antonia', 'Nuru', 'Amari', 'Mo']).slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
  return function(x){
    return fare * x
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, twoDrivers){
  return twoDrivers(arrayOfDrivers)
}