var crewNames;
var launchpad;
var ship;
var rocket;
var countdown;

countdown = function(num, ship){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1, ship);
    }, 1000);
  }else{
    console.log("Blastoff!!");
    ship.takeoff();
  };
}

launchpad = function(ship, array, rocket) {
  var message = 'Initiating launchpad Procedures';
  console.log(message);
  console.log("The gem voyage of " + ship.name);
  loadCrew(ship, array);
  console.log("The captain of our ship will be " + ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.fuelShip(10);
  countdown(10, ship);
};

rocket = {
  fuel: 0,
  fire: function(){
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Remaining fuel: " + this.fuel);
    } else {
      console.log("Engines failed to fire.");
    }
  }
}

ship = {
  name: "Goku",
  crew: [],
  captain: function(){
    var randomCaptain = this.crew[Math.floor(Math.random()*this.crew.length)];
    return randomCaptain;
  },
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion;
  },
  propulsion: null,
  fuelShip: function(fuelAmount) {
    this.propulsion.fuel += fuelAmount;
    console.log('The amount of fuel added ' + fuelAmount);
  },
  takeoff: function(){
    this.propulsion.fire();
    console.log("To infinity and beyond!")
  }
}

function loadCrew(ship, array) {
  for (var i = 0; i < array.length; i++) {
    ship.crew.push(createCrewmate(array[i]))
  }
  return ship.crew;
}

function createCrewmate(name){
  var crewmate = { name: name};
  return crewmate;
};

crewNames = ["roman", "michelle", "adam", "ezra", "edwin", "sally", "alex", "andrew", "jarlax", "meder"];

launchpad(ship, crewNames, rocket);
