// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

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
    let answer = compareNumbers(userGuess, secretNum);
    if (answer === 1) {
        guessAssessment.textContent = 'You guessed too high! Go lower..';
    } else if (answer === -1) {
        guessAssessment.textContent = 'You guessed too low! Go Higher..';
    } else if (answer === 0) {
        guessAssessment.textContent = 'You\'re Lucky As Hell';
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        resultDisplay.textContent = 'You Won!';
    }
    if (guessesRemaining === 0 && answer !== 0) {
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        resultDisplay.textContent = `You lost! The right number was ${secretNum}`;
        guessAssessment.style.display = 'none';
    }
        
    console.log(secretNum);

});

    












   
    










