// Declare Variables for all elements on start page such as timer, highscores, and the start button. 
const scores = document.querySelector(".view-highscores");
const timerEl = document.querySelector(".timer");
const startPage = document.querySelector(".start-page");
const startButton = document.querySelector(".start-button");
// Variables for question section
const questionsContainer = document.querySelector("#questions-container");
const questionEl = document.querySelector('#question');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const correctAnswer = document.querySelector('.correct-answer');
// Variables for displaying final score and entering intials 
const finalEl = document.querySelector('.final-page-container');
const finalScore = document.querySelector('.final-score');
const finalScoreBtn = document.querySelector('.finalScoreButton');
//Event Listeners
startButton.addEventListener('click', startQuiz);

// Functions for start button, timer, go to the next question, allow you to save initials, view high scores, 

function startQuiz() {
    startPage.style.display = "none";
    questionEl.style.display = "block";
    finalEl.style.display ='none';
    questionIndex = 0;
    nextQuestion ()
}
 

function nextQuestion () {
    

}

function selectAnswer () {

}


// Arrays of objects for questions, answers and correct answer
let questions = [
    {
        question: "Which of the following is not JavaScript Data Types?",
        answers: ["1. Undefined", "2. Number", "3. Boolean", "4. Float"],
        correctAnswer: "4"
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["1. Netscape", "2. Bell Labs", "3. Sun Microsystems", "4. IBM"],
        correctAnswer: "1"
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        answers: ["1. It can not Handling dates and time.", "2. JavaScript is a object-based scripting language.",
        "3. JavaScript is not interpreter based scripting language.", "4. All of the above"],
        correctAnswer: "2"
    } ,
    {
        question: "Among the following, which one is a ternary operator in JavaScript?",
        answers: ["1.#", "2.::", "3. &:", "4. ?:"],
        correctAnswer: "4"
    },
    {
        question: "Which of them is not the looping structures in JavaScript?",
        answers: ["1. for", "2. while", "3. forwhich", "4. dowhile"],
        correctAnswer: "3"
    }
]