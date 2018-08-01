// Game vars
let min = 1,
    max = 10,
    winningNum = 5,
    guessesLeft = 3;

// UI vars
let game = document.querySelector('#game');
let minNum = document.querySelector('.min-num');
let maxNum = document.querySelector('.max-num');
let guessBtn = document.querySelector('#guess-btn');
let guessInput = document.querySelector('#guess-input');
let message = document.querySelector('.message');

// Assign UI min, max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // Validate
    if ( isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter your number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game over won
        gameOver(true, `${winningNum} is correct! You win!`);   
    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0){
            // Game over lost
            gameOver(false, `Game over! You lost. The winning number is ${winningNum}`);
        } else {
            // Game continious - answer wrong

            // Chenge border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';
            
            // Tell the number is not correct
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
        }
    }
})

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
    let color;
    (won === true) ? color = 'green' : color = 'red';
    
    
    // Disable input
    guessInput.disabled = true;
    // Chenge border color
    guessInput.style.borderColor = color;
    setMessage(msg, color);
}
