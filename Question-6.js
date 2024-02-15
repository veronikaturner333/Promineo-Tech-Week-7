//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// Declare array of name lengths
let nameLengths = [3, 5, 3, 5, 4, 3]
// Declare sum array that starts at zero and adds name lengths as we loop through the for loop
//+= adds an element value to the current sum each time we loop through until we reach the end of the array
let sum = 0;
   for (let i=0; i<nameLengths.length; i++){    
     sum += nameLengths[i];    
  }
console.log(sum);
//Expected Output: 23
