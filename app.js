// import functions and grab DOM elements
const guessAssessment = document.getElementById('guess-assess');
const remainingGuessesSpan = document.getElementById('guesses-remaining');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('button');

// initialize state
let guessesRemaining = 4;
let secretNum = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    remainingGuessesSpan.textContent = guessesRemaining;
    if (guessesRemaining === 0) {
        guessAssessment.textContent = 'Too Low!';
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
    }
        
    console.log(secretNum);
    let userGuess = (Number(userInput.value));
    if (userGuess < secretNum) {
        guessAssessment.textContent = 'You guessed too low!';
    } else if (userGuess > secretNum) {
        guessAssessment.textContent = 'You guessed too high!';
    } else if (userGuess === secretNum) {
        guessAssessment.textContent = 'You\'re Lucky As Hell';
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        document.getElementById('make-dissapear').textContent = 'You Won!';
    }
});




