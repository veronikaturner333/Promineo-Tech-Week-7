//Write a function that takes two parameters, word and n, as arguments
//and returns the word concatenated to itself n number of times
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')

function joinWords(word,n){
    //Declare variable for concatenated array elements that starts out empty
    //as we loop through the for loop, a word is added until we reach the value of n
    let concating = ""
    for(let i=0; i<n ; i++){
        concating += word;
    }
    //return the value
    return concating;
    }
    //Pass in argument values, in this case string Hello and number 3
    //Expected Output: HelloHelloHello because we join together the word Hello three times
    console.log(joinWords('Hello', 3));
    