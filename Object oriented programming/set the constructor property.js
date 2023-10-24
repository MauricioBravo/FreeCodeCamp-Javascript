function Dog(name) {
    this.name = name;
  }
  // cuando seteamos propiedades de tipo prototype a un objeto de borra la propiedad constructora
  //whenever a prototype is manually set to a new object, remember to define the constructor property:
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };


  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // below // devuelve true, es para revisar que beagle heredó el prototipo de Dog
  console.log(Dog.prototype.isPrototypeOf(beagle));
  // el siguiente explica que Dog prototype heredó del supertipo Object.prototype al igual que
  //todos los ojetos en JS
  console.log(Object.prototype.isPrototypeOf(Dog.prototype));