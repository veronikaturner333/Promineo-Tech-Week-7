//Create a new array called nameLengths.
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//Declare array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//Declare empty array to be filled with name lengths in the for loop
//New name length elements are "pushed" into the nameLength array until we reach the end of the names array
let nameLengths = []
   for (let i=0; i<names.length; i++){    
     nameLengths.push(names[i].length);    
  }
console.log(nameLengths);
//Expected Output: [3, 5, 3, 5, 4, 3]