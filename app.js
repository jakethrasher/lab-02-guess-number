// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
import { tooHighFunction, tooLowFunction, winFunction, lastChanceFunction } from './dom-utils.js';
const giveFeedback = document.getElementById('give-feedback');
const remainingGuessesSpan = document.getElementById('guesses-remaining');
const userInput = document.getElementById('user-input');
const numberOfGuessesElement = document.getElementById('number-of-guesses');
const submitButton = document.getElementById('button');
const resetButton = document.getElementById('reset-button');

// initialize state
let guessesRemaining = 4;
let secretNum = Math.ceil(Math.random() * 20);
console.log(secretNum); 
// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    remainingGuessesSpan.textContent = `${guessesRemaining}`;

    let userGuess = (Number(userInput.value));
    let answer = compareNumbers(userGuess, secretNum);

    tooHighFunction(answer, giveFeedback);

    tooLowFunction(answer, giveFeedback);

    winFunction(answer, giveFeedback, remainingGuessesSpan, userInput, submitButton, numberOfGuessesElement);

    lastChanceFunction(guessesRemaining, answer, userInput, submitButton, giveFeedback, remainingGuessesSpan, secretNum, numberOfGuessesElement);
});

resetButton.addEventListener('click', () => {
    secretNum = Math.ceil(Math.random() * 20);
    userInput.value = '';
    userInput.style.display = '';
    guessesRemaining = 4;
    remainingGuessesSpan.textContent = `${guessesRemaining}`
    submitButton.style.display = '';
    giveFeedback.textContent = '';
    console.log(secretNum);
    numberOfGuessesElement.style.display = '';
});
   