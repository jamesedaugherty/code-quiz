const startButton = document.getElementById('start-button')
const timerEl = document.getElementById('timer')


let timer = 60
let questionIndex = 0


const questions = [
    {
        questionToAsk: 'Who is your favorite Office character?',
        possibleAnswers: ['Dwight', 'Michael', 'Stanley', 'Creed'],
        correctAnswerIndex: 3
    },
    {
        questionToAsk: 'Who is the greatest guitar player of all time?',
        possibleAnswers: ['Hendrix', 'SRV', 'Duane Allman', 'Charo'],
        correctAnswerIndx: 3   
    } 
];

function startGame() {
    const timerInterval = setInterval(function() {
        timer--
        timerEl.innerHTML = `Time Remaining: ${timer}s`
        if(timer <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

function presentQuestion(question) {
    
})


startButton.addEventListener('click', function(event) {
    startGame()
    // time starts 
    //hide the welcome screen
    //hide final page container 
   //present question
    //get the question Container 
    //append the questionToAsk to questions Container
    //append questionbuttons to auestioncontainer

})





   
//presented with a question
    //if I :
        //correct, 
            // go to next question
        //incorrect :
            // subtract from timer

//if I answer all questions  ||  no time left
    //game over
        //i can save initials and score





























