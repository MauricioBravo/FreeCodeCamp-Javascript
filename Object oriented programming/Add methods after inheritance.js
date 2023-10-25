function Animal() { }
Animal.prototype.eat = function() 
{ console.log("nom nom nom"); };

function Dog() { }

// Dog agrega los metodos de Animal porque hereda de él
Dog.prototype= Object.create(Animal.prototype);
// el prototipo o modelo de dog es el de Animal también.

Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
};


let beagle = new Dog();
//una vez creado el beagle que es objeto instancia de Dog que hereda de Animal tiene
// los dos metodos
beagle.eat();
beagle.bark();
