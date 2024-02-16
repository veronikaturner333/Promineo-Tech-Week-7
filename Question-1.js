//Create an array called ages that contains the following values:
//3, 9, 23, 64, 2, 8, 28, 93
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Programmatically subtract the value of the first element in the
//array from the value in the last element of the array
//declare variable for result which is the last element in the array minus the first
//Last element is accessed by subtracting one from the length of the array
let result = ages[ages.length-1]-ages[0];
//Expected output: 90
console.log(result);
//Add a new age to your array
ages.push(26);
//Expected output: [3, 9, 23, 64, 2, 8, 28, 93, 26]
console.log(ages);


//Use a loop to iterate through the array and calculate the average age
//Declare variable for sum which starts at zero, "i" assumes value of each element in the array
//We keep adding together elements in the array until we get through it (ages.length)
let sum = 0;
for (let i = 0; i < ages.length; i++){
  sum += ages[i];
}
//Declare variable for average, which is the sum divided by the total elements in the array
let average = sum/ages.length;

//Expected output: 28.444444444444443
console.log(average);
