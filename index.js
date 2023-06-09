const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(first_two_drivers) {
  first_two_drivers = drivers.slice(0, 2);
  return first_two_drivers;
}
function returnLastTwoDrivers(last_two_drivers) {
  last_two_drivers = drivers.slice(2);
  return last_two_drivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    return function fareMultiplier(createFareMultiplier){
       return createFareMultiplier = (25);
 }
}
function fareDoubler(d){
    return (d * 2);
}
function fareTripler(t){
    return (t * 3)
}
function selectDifferentDrivers(drivers, x){
  if (x === returnFirstTwoDrivers ){
    return drivers.slice(0,2); 
  }
  else if (x === returnLastTwoDrivers){
    return drivers.slice(2);
  }
  
}