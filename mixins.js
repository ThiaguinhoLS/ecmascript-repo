let animal = {
  talk() {
    return `My name is ${this.name}`;
  }
};

let Dog = function(name) {
  this.name = name;
};

let dog = new Dog('Rex');

dog = Object.assign(dog, animal);

console.log(dog.talk());


// In ES6

const fly = {
  setFlyProperties(speed, direction) {
    this.speed = speed;
    this.direction = direction;
  },

  getFlyProperties() {
    return `Flying ${this.speed} towards ${this.direction}`;
  }
}

class Bird {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Bird.prototype, fly);
let bird = new Bird('bird');
bird.setFlyProperties('3 m/s', 'oeste');
console.log(bird.getFlyProperties());

