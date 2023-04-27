// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i=0;i<contacts.length;i++){
    for(let j=0;j<4;j++){
    if(contacts[i].hasOwnProperty(prop)){
      if(contacts[i].firstName ==name){
        return contacts[i][prop];
      }
    }else if(!contacts[i].hasOwnProperty(prop) && contacts[i].firstName ==name){
      return "No such property";
    }
  }
  }
return "No such contact";

  // Only change code above this line
}
lookUpProfile("Kristian", "lastName");
console.log(lookUpProfile("Bob", "potato")); 

/*
lookUpProfile("Akira", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");

lookUpProfile("Akira", "address");

******
for(let i=0;i<contacts.length;i++){
    for(let j=0;j<4;j++){
    if(contacts[i].hasOwnProperty(prop)){
      if(contacts[i].firstName ==name){
        return contacts[i][prop];
      }
    }else if(!contacts[i].hasOwnProperty(prop) && contacts[i].firstName ==name){
      return "No such property";
    }
  }
  }
return "No such contact";


***--*
for(let i=0;i<contacts.length;i++){
  
  for(let j=0;j<4;j++){
  if(contacts[i].hasOwnProperty(prop)){
    if(contacts[i].firstName ==name){
      return contacts[i][prop];
    }
  }else if(!contacts[i].hasOwnProperty(prop)){
    return "No such property";
  }else{
    return "No such contact";
  }
}
}

****-*
for(let i=0;i<contacts.length;i++){
  for(let j=0;j<4;j++){
  if(contacts[i].hasOwnProperty(prop)){
    if(contacts[i].firstName ==name){
      return contacts[i][prop];
    }
  }else{
    return "No such property"
  }
}
}
return "No such contact";

*****-
for(let i=0;i<contacts.length;i++){
  for(let j=0;j<4;j++){
  if(contacts[i].hasOwnProperty(prop)){
    if(contacts[i].firstName ==name){
      return contacts[i][prop];
    }
  }else if(contacts[i].hasOwnProperty(prop)){
    return "No such property"
  }
}
}
return "No such contact";




*
for(let i=0;i<contacts.length;i++){
   if(contacts[i].firstName ==name && prop == "lastName"){
    return contacts[i].lastName;
  }
}



--*
for(let i=0;i<contacts.length;i++){
   if(contacts[i].firstName ==name && prop == "lastName"){
    return contacts[i].lastName;
  }else{
    return contacts[i][prop];
  }
}

***

for(let i=0;i<contacts.length;i++){
  console.log(contacts[i].firstName);
  console.log(prop);
  if(contacts[i].firstName ==name){
    // console.log("asda "+contacts[i][prop]);
    return contacts[i][prop];
  }
    for(let j=0;j<contacts[i].legth;j++){
        if(contacts[i].firstName==name && contacts[i].hasOwnProperty(prop) ){
            
        }
    }
}







*/