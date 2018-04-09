//-------------------------
// GAME RULES & FUNCTIONS
//-------------------------
/*
1) Player must guess a number between the min and max number.
2) Player gets a certain amount of guesses.
3) Game notifies the player the number of remaining guesses.
4) Game notifies the player if they guess correct.
5) Game notifies the player of the correct answer if they loose.
6) Game gives the player the option to play again.
*/


//-------------------------
// GAME VALUES
//-------------------------
let   min = 1,
      max = 10,
      winningNum = 2,
      guessesLeft = 3;


//-------------------------
// UI ELEMENTS
//-------------------------
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//-------------------------
// ASSIGN UI MIN AND MAX
//-------------------------
minNum.textContent = min;
maxNum.textContent = max;


//-------------------------
// LISTEN FOR GUESS
//-------------------------
guessBtn.addEventListener('click', function(){
   // Parse the string data type into a integer data type
   let guess = parseInt(guessInput.value);

   // Validate
   if(isNaN(guess) || guess < min || guess > max){
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   // Check if won
   if(guess === winningNum){
      // 1) Disable input
      guessInput.disabled = true;
      // 2) Change border colour
      guessInput.style.borderColor = 'green';
      // 3) Set message
      setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
   } else {
   }
});


//-------------------------
// SET MESSAGE
//-------------------------
function setMessage(msg, colour){
   message.style.color = colour;
   message.textContent = msg;
}