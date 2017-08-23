class vehicle {
  constructor(make, type, color) {
    this.make = make;
    this.type = type;
    this.color = color;
  }

  vehicleDetails {
    return ("Your vehicle is a " + type + " made by " + make + " and is " + color);
  }

  vehicleColor {
    this.vehicleColor = color;
  }
}

class SuperCar extends vehicle {
  constructor (make, type, color, topSpeed, cost) {
    super(make, type, color);
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

  superCarDetails {
    return (this.vehicleDetails + " with a top speed of " + topSpeed " and a cost of " + cost);
  }

  priceTag {
    this.priceTag = cost;
  }
}

class Motorcycle extends vehicle {
  constructor(make, type, color, topSpeed, cost) {
    super(make, type, color);
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

  bikeDetails {
    return (this.vehicleDetails + " with a top speed of " + topSpeed + " and a cost of " + cost);
  }

  bikeSpeed {
    this.bikeSpeed = topSpeed;
  }
}

let myRide = 