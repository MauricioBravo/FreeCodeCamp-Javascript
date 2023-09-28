function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

//a partir de esta linea todos los objetos tipo Bird tienen la propiedad numEyes en 2
Bird.prototype.numEyes = 2;
//own properties are differet than prototype properties

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(canary.numEyes);
console.log(ownProps);

//****************************************************************************** 

//Así se devuelven las propiedades a un array, tanto las own como las prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps2 = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps2.push(property);
    }
    else {
        prototypeProps.push(property)
    }
//para ver si un objeto es instancia de un constructor
console.log(beagle.constructor === Dog);
}