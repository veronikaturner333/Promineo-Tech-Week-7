//Write a function that takes an array of numbers and returns true
//if the sum of all the numbers in the array is greater than 100.

//Give function one parameter so we can pass in an array as an argument
function isGreater(arr){
    //Declare variable for sum which starts at zero but will increase
    //as we add together the value of each element in the array
    let sum = 0;
    for(i=0; i < arr.length ; i++){
        sum += arr[i];
    }
    //Compare if the sum is greater than 100. If so, output boolean true
    if(sum > 100){
        console.log(true);
    //Let's take care of the else as well so we have an output either way
    }else{console.log(false);}
}
//Example array [1,90,5,80] expected output is true
isGreater([1,90,5,80]);