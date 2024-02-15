//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50

//Give function two parameters to check if it is hot outside and if you have enough money
function willBuyDrink(isHotOutside, moneyInPocket){
    //&& means that both cases must be true to output true
    if(isHotOutside === true && moneyInPocket >= 10.50){
      console.log(true);
    }
    else{
      console.log(false);
    }
    }
    //Example arguments that will output true
    willBuyDrink(true, 11);