//Write a function that takes an array of numbers and returns the average of all the elements in the array

//Give function one parameter so we can pass in an array as an argument
function arrAverage(arr){
    //Declare variable for sum which starts at zero but will increase
    //as we add together the value of each element in the array
    let sum = 0;
    for(i=0; i < arr.length ; i++){
      sum += arr[i];
    }
    //Divide the sum by the amount of elements in the array
    console.log (sum/arr.length);
  }
//Expected output: 23
arrAverage([10,20,5,80,0]);
  