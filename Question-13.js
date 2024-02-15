//Create a function of your own that solves a problem.
//In comments, write what the function does and why you created it.

//I want to give my bf a dozen pixel roses for Valentine's Day just for fun
//I need to check that I have a sum of 12 roses in my array of flower rows
//If the name is Mark, it's February 14th, and the sum of roses is 12, give roses!

//Give function three parameters to pass in the name, day, and amount of roses as arguments
function dozenRoses(theName, theDay, roseAmount){
    //Calculate sum in the array with a for loop
    let sum = 0;
    for(i=0; i < roseAmount.length ; i++){
      sum += roseAmount[i]
    }
    //If all of these conditions are met, give a dozen roses
    if(theName === "Mark" && theDay === "February 14th" && sum === 12){
        console.log("Here's a dozen roses! ⸜(*ˊᗜˋ)⸝🌹*12");
    //Otherwise No roses!
    }else{console.log("No dozen roses for you (╥﹏╥)")}
}
//Expected output: “Here's a dozen roses! ⸜(*ˊᗜˋ*)⸝🌹*12”
dozenRoses("Mark", "February 14th", [3,3,3,3]);
  