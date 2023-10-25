function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle= Object.create(Animal.prototype); // Change this line
beagle.eat();

//  set the prototype of the subtype (child) to be an instance of Animal
function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);