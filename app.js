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
        setMessage(`Please enter your number between ${min} and ${max}`);
    }
})

// Set message
function setMessage(msg) {
    message.style.color = 'red';
    message.textContent = msg;
}




