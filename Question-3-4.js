//3. How do you access the last element of any array?
//Subtract one from the length of the array. This is because array elements are counted starting with zero rather than one.
//If you tried to use just the length of the array, you would be overshooting by one. 
let arr = [1, 2, 3, 4, 5];
let lastElement = arr[arr.length-1];
console.log(lastElement);
//Expected output: 5


//4. How do you access the first element of any array?
//As mentioned before, array elements are counted starting with zero. We can access the first element by
//referring to the index number, which is zero.

let arr2 = [1, 2, 3, 4, 5];
let firstElement = arr2[0];
console.log(firstElement);
//Expected Output: 1