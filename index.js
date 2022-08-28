var maxNum;
var minNum;
let greaterThan;
let randomNumber;
var currentGuess;
start();


//starts and restarts program
function start(){
  randomNumber = prompt ('Enter a number from 1-100:');
  if(randomNumber<1||randomNumber>100){
    console.log('Invalid Input Try Again');
  }else{
    minNum=0;
    maxNum=100;
    currentGuess=Math.round((maxNum-minNum)/2);
    givePrompt();
  }
}

//function gives asks the user a question or tells them that we found their answer
function givePrompt(){
  if(randomNumber==currentGuess){
    console.log(`Your nuimber is ${randomNumber}!\n\nWould you like to play again? Enter to replay`);
    prompt('');
    start();
    
  }else{
    console.log('Is your number greater than '+currentGuess+'?\n\n[Y]yes\n[N]no');
    greaterThan = prompt('').toUpperCase();
    guess();
    
  }
}


//function changes the value of the current guess based on the input given by user
function guess(){
  console.clear();
  
  if (greaterThan==='Y'){ //go half way up from min to max
    minNum=currentGuess;
    currentGuess=Math.ceil((maxNum-minNum)/2)+minNum;
    givePrompt();
  }else if(greaterThan==='N' ){ //go half way down from min to max
    maxNum=currentGuess;
    currentGuess=Math.ceil((maxNum-minNum)/2)+minNum;
    givePrompt();
  }else{
    console.log('that input doenst exsist put Y for yes and N for no');
  }

}

