function telephoneCheck(str) {
    const reglaRegex = /^[A-Za-z0-9|\-]*$/;
    
    if (str.match(reglaRegex)){
      return true;
    }
    
  }
  
  console.log(telephoneCheck("555-555-5555"));