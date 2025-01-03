function queueTime(customers, n) {
    //create array of arrays, each inner array a till's customers 
    let tills = []
    for (let i = 0; i < n; i++) {
      let temp = [0]
      tills.push(temp)
    }
    
    //shift customers array --> push to available till array
    let firstAvailable;
    customers.forEach(thisCustomer => { 
        
        firstAvailable = tills.findIndex(till => {
            thisCustomer < till.reduce( (acc, thisVal) => thisVal+acc ) 
          })
        
        tills[firstAvailable].push(thisCustomer)  
    });
                                       
    //once customers array is empty, return the sum of the till array that took the longest
  }
  
  /*
  ------------parameters------------
  2 parameters
  - the first is an array representing time required per customer in queue
  - the second is the number of tills available
  
  -------------returns--------------
  an integer that represents the total time required
  
  -------------examples-------------
  queueTime([5,3,4], 1) should return 12
  queueTime([10,2,3,3], 2) should return 10
  
  ------------psuedocode------------
  above
  
  */