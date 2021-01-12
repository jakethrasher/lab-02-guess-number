// import functions and grab DOM elements
const guessAssessment = document.getElementById('guess-assess');
const remainingGuessesSpan = document.getElementById('guesses-remaining');
const userInput = document.getElementById('user-input');
const resultDisplay = document.getElementById('results-display');
const submitButton = document.getElementById('button');

// initialize state
let guessesRemaining = 4;
let secretNum = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    remainingGuessesSpan.textContent = guessesRemaining;

    let userGuess = (Number(userInput.value));
    if (userGuess < secretNum) {
        guessAssessment.textContent = 'You guessed too low!';
    } else if (userGuess > secretNum) {
        guessAssessment.textContent = 'You guessed too high!';
    } else if (userGuess === secretNum) {
        guessAssessment.textContent = 'You\'re Lucky As Hell';
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        resultDisplay.textContent = 'You Won!';
    }

    if (guessesRemaining === 0) {
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        resultDisplay.textContent = 'You Lost!';
        guessAssessment.textContent = 'Sorry';
    }
});











