# code-quiz

## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button

THEN a timer starts and I am presented with a question
WHEN I answer a question

THEN I am presented with another question
WHEN I answer a question incorrectly

THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0

THEN the game is over
WHEN the game is over

THEN I can save my initials and my score


Notes
// Click start button - addeventlistener 
// Hide the start page 
// Function that would display the first question and choices

// Click "button" for answer choice 
// Function | Determine if it's correct or wrong | 
// Adjust the time based on the answer being correct or wrong
// Call next question function

// Increase question counter
// Display the next question - queryselector
// 


// this solution requires one event listen for all the buttons
document.querySelectorAll('.answers').addEventListener('click', function (e) {
    // look at question array for the current question
    // look at the answer
    // if e.target.innerText === answer from your array it is correct
    // else subtract time
})