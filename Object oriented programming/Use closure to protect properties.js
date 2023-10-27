function Bird() {
    let weight = 15;
  this.getWeight = function(){
    return weight;
  };
}

// getWeight tiene acceso a esa variable porque está definido en el mismo contexto que esa variable.
// es un metodo con privilegios 