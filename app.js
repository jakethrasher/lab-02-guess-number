// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
import { tooHighFunction, tooLowFunction, winFunction, lastChanceFunction } from './results-utils.js';
const giveFeedback = document.getElementById('give-feedback');
const remainingGuessesSpan = document.getElementById('guesses-remaining');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('button');

// initialize state
let guessesRemaining = 4;
let secretNum = Math.ceil(Math.random() * 20);
console.log(secretNum);
// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    remainingGuessesSpan.textContent = `You have: ${guessesRemaining} guesses remaining`;

    let userGuess = (Number(userInput.value));
    let answer = compareNumbers(userGuess, secretNum);

    tooHighFunction(answer, giveFeedback);

    tooLowFunction(answer, giveFeedback);

    winFunction(answer, giveFeedback, remainingGuessesSpan, userInput, submitButton);

    lastChanceFunction(guessesRemaining, answer, userInput, submitButton, giveFeedback, remainingGuessesSpan, secretNum);

});