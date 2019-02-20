let Dog = function(name) {
  this.name = name;
};

Dog.prototype.introduce = function() {
  console.log(`I am ${this.name}`);
};

let Bulldog = function(name) {
  Dog.call(this, name);
};

Bulldog.prototype = Object.create(Dog.prototype);

let dog = new Dog('Rex');
let bulldog = new Bulldog('Thor');

dog.introduce();
bulldog.introduce();
