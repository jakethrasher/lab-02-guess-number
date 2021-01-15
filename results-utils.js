export function tooHighFunction(answer, giveFeedback) {
    if (answer === 1) {
        giveFeedback.textContent = 'Hmm.. you guessed too high. Go lower..';
    }

}

export function tooLowFunction(answer, giveFeedback) {
    if (answer === -1) {
        giveFeedback.textContent = 'It seems that you guessed too low. Go higher..';
    }

}

export function winFunction(answer, giveFeedback, remainingGuessesSpan, userInput, submitButton) {
    if (answer === 0) {
        giveFeedback.textContent = 'You\'re Lucky As Hell, You won!';
        remainingGuessesSpan.textContent = '';
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
    }

}

export function lastChanceFunction(guessesRemaining, answer, userInput, submitButton, giveFeedback, remainingGuessesSpan, secretNum) {
    if (guessesRemaining === 0 && answer !== 0) {
        userInput.style.display = 'none';
        submitButton.style.display = 'none';
        remainingGuessesSpan.textContent = '';
        giveFeedback.textContent = `You lost! The right number was ${secretNum}`;
    }
}

