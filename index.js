class Vehicle {
  constructor(make, type, color) {
    this._make = make;
    this._type = type;
    this._color = color;
  }

  get vehicleDetails() {
    return ("Your vehicle is a " + this._type + " made by " + this._make + " and is " + this._color);
  }

  set vehicleColor(vehicleColor) {
    this._vehicleColor = color;
  }
}

class SuperCar extends Vehicle {
  constructor (make, type, color, topSpeed, cost) {
    super(make, type, color);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get superCarDetails() {
    return (this.vehicleDetails + " with a top speed of " + this._topSpeed + " and a cost of " + this._cost + ".");
  }

  set priceTag(priceTag) {
    this._priceTag = cost;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, type, color, topSpeed, cost) {
    super(make, type, color);
    this._topSpeed = topSpeed;
    this._cost = cost;
  }

  get bikeDetails() {
    return (this.vehicleDetails + " with a top speed of " + this._topSpeed + " and a cost of " + this._cost + ".");
  }

  set bikeSpeed(topSpeed) {
    this._bikeSpeed = topSpeed;
  }
}

let myRide = new Motorcycle ('Yamaha', 'Dab x1000', 'Cash Green', 'over 9000 mph', '$1,000,000');
let myOtherRide = new SuperCar ('Bughati', '$M$', 'Gold', 'over 9000 mph', '$5,000,000');
let theCarInMyGarage = new Vehicle ('Classic', 'Ultra-Rare', ' Silver');

console.log(theCarInMyGarage.vehicleDetails);
console.log(myOtherRide.superCarDetails);
console.log(myRide.bikeDetails);
