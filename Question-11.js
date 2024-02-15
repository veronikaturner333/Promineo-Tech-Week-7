//Write a function that takes two arrays of numbers and returns true if the average of the elements
//in the first array is greater than the average of the elements in the second array


//Give function two parameters so we can pass in two arrays as arguments for comparison
function compareArr(arr1, arr2) {
    //Declare variables for sums of both arrays which start at zero
    let sum1 = 0, sum2 = 0;
    //Calculate the sum of the first array
    for(let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    //Calculate the sum of the second array
    for(let y = 0; y < arr2.length; y++) {
      sum2 += arr2[y];
    }
    //Declare variables for averages of both arrays which are the sums divided by the amount of elements in each array
    let avg1 = sum1 / arr1.length;
    let avg2 = sum2 / arr2.length;

    //Compare if the average of the elements of the first array is greater than the average of the elements of the second array
    //If it is greater, output boolean true. Otherwise output boolean false
    if(avg1 > avg2) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
//Call the function with two arrays for comparison
//Expected output: true
compareArr([1, 90, 5, 80], [2, 50, 6, 20]);
  