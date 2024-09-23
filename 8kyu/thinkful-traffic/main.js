function updateLight(current) {
  
    switch(current) {
      case "green":
        return "yellow";
        break;
      case "yellow":
        return "red";
        break;
      case "red":
        return "green"
        break;
      default:
        console.log("Enter a traffic light color")
        break;
      }
  
  }

let lightColor = 'green'
console.log(`After ${lightColor} the light turns ${lightColor = updateLight(lightColor)}`);
console.log(`After ${lightColor} the light turns ${lightColor = updateLight(lightColor)}`);
console.log(`After ${lightColor} the light turns ${lightColor = updateLight(lightColor)}`);
