const registeredFactories = {};

registeredFactories['car'] = class Car {
  constructor(model) {
    this.model = model;
  }
};

registeredFactories['bike'] = class Bike {
  constructor(model) {
    this.model = model;
  }
};

class VehicleFactory {
  constructor(type, model) {
    return new registeredFactories[type](model); 
  }
}

const car = new VehicleFactory('car', 'ferrari');
console.log(car);
const bike = new VehicleFactory('bike', 'caloi');
console.log(bike);

