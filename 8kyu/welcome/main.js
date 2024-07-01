function greet(language) {
  
    //declare database
      let database = { 
      english: "Welcome", 
      czech: "Vitejte", 
      danish: "Velkomst", 
      dutch: "Welkom", 
      estonian: "Tere tulemast",
      finnish: "Tervetuloa", 
      flemish: "Welgekomen", 
      french: "Bienvenue", 
      german: "Willkommen", 
      irish: "Failte", 
      italian: "Benvenuto", 
      latvian: "Gaidits", 
      lithuanian: "Laukiamas",
      polish:"Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso"
  }
    
    //test invalids
    if ( language === 'IP_ADDRESS_INVALID' || language === 'IP_ADDRESS_NOT_FOUND' || language === 'IP_ADDRESS_REQUIRED' || language === 'english') {
      return 'Welcome'
    } else {
      //test langauges
      return database[language];
    } 
  }
  
console.log(greet('spanish')) //should log bievenido
console.log(greet('irish')) //should log failte

  /*
  --params: string that represents language
  --returns: a greeting in language specified or english default if not specified
  --examples: greet('flemish') -> "Welgekomen"
  --pseudo: ^
  
  */