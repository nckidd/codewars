

function boredom(staff){
  let score = 0;
  
  //parse through object to add dept scores
  for (let employee in staff) {
    switch(staff[employee]) {
        //determine the dept assessment score 
        //increment the score by that amount
        case 'accounts':
          score+=1;
          break;
        case 'finance':
          console.log('finance is '+ staff[employee])
          score+=2;
          break;
        case 'canteen':
          score+=10;
          break;
        case 'regulation':
          score+=3;
          break;
        case 'trading':
          score+=6;
          break;
        case 'change':
          score+=6;
          break;
        case 'IS':
          console.log('IS is '+staff[employee]);
          score+=8;
          break;
        case 'retail':
          score+=5;
          break;
        case 'cleaning':
          score+=4;
          break;
        case 'pissing about':
          console.log('pissing about is '+ staff[employee])
          score+=25;
          break;
    }
      
  }
  if (score <= 80) {
    return 'kill me now'
  } else if (score < 100) {
    return 'i can handle this'
  } else {
    return 'party time!!'
  }
      
}

console.log(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }))