// TASKS FOR THE CODE
// 1) Press Start to start the quiz
//      a)Hide the start page
// 2) Start the timer
//      a)use this as main function to start Time
//      b)load question
//      c) keep score
//      d) enter high score
// 3) Ask a question
// 4) Event listener for right answer
// 5) If get it wrong, subract time
// 6) Input high score


// Press start to start quiz
var buttonEl = document.querySelector("#startQuiz");
// array of questions
var questions = [
    
    {
        title: '1Commonly used data types DO NOT INCLUDE:',
        answers: ['alerts', 'strings', 'booleans',  'numbers'],
        correctAnswer: 'alerts'
    },
    {
        title: '2Commonly used data types DO NOT INCLUDE:',
        answers: ['alerts', 'strings', 'booleans',  'numbers'],
        correctAnswer: 'alerts'
    },
    {
        title: '3Commonly used data types DO NOT INCLUDE:',
        answers: ['alerts', 'strings', 'booleans',  'numbers'],
        correctAnswer: 'alerts'
    },
    {
        title: '4Commonly used data types DO NOT INCLUDE:',
        answers: ['alerts', 'strings', 'booleans',  'numbers'],
        correctAnswer: 'alerts'
    },
];

 var questionCounter = 0 
    
console.log(questions.answers1);
console.log(questions.correctAnswer);
console.log(buttonEl);
// This gets the quiz started
buttonEl.addEventListener("click", function() {
    console.log("This will start the quiz!");
    // I will make the instructions invisible
    main.setAttribute("style", "display:none;");
    title.setAttribute("style","visibility: visible");
    //qcontainer.setAttribute("style", "display:visible");
    showQuestion();
});
    
function quizquestions(){
    pickAnswer();
    //showQuestion(questions);
}

// For the time function use setInterval(timerFunc, 1000) 
// - global variable called time gets minus 1 every second

// For the endgame function pushes the current time and player initials as an object into an array from localstorage
// var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
// var playerScore = { time , initials}
// savedScores.push(playerScore)
// localStorage.setItem(JSON.stringify(savedScores))




// Creates a question
function showQuestion() {
    
    // selects where to put the question
    var titleDiv= document.getElementById('title');
    
   
    titleDiv.textContent = questions[questionCounter].title;
    console.log("My question function is working");
    var answers = questions[questionCounter].answers
    answers.forEach(function(answer,i){
        var answerButton = document.createElement('button');
        answerButton.textContent = answer
        answerButton.className = `options-${i+1}`;
        answerButton.id = `choicesId-${i+1}`;
        answerButton.onclick = clickAnswer
        titleDiv.appendChild(answerButton)
    })
    };

// I nned to make an option = correct value
// Correct Value sends me to the next question
function clickAnswer(event) {
    var chosenButton = event.target 
    var answer = chosenButton.textContent
    if(answer === questions[questionCounter].correctAnswer){
        console.log('This is correct')
    }
    questionCounter++ 
    if(questionCounter >= questions.length){
        // Put Endgame function Here
        console.log('game is over')
    } else { showQuestion()}

    // var i =0
    //if (questions.answers1 === questions.correctAnswer || questions.answers2 === questions.correctAnswer || questions.answers3 === questions.correctAnswer || questions.answer4 === questions.correctAnswer) {
    // if (questions.answers1 === questions.correctAnswer && i == 0) {
    //     console.log("this is correct")
    //     i++;
    //     console.log(i)
    // } else {
    //     console.log("this is false");
    // }

    // if (questions.answers2 === questions.correctAnswer && i == 0) {
    //     console.log("this is correct");
    //     i++;
    //     console.log(i);
    // } else {
    //     console.log("this is false");
    // }

    // if (questions.answers3 === questions.correctAnswer && i == 0) {
    //     console.log("this is correct");
    //     i++;
    //     console.log(i);
    // } else {
    //     console.log("this is false");
    // }

    // if (questions.answers4 === questions.correctAnswer && i == 0) {
    //     console.log("this is correct");
    //     i++;
    //     console.log(i);
    // } else {
    //     console.log("this is false");
    // }
};


    

    

    // I need to shuffle the answers
    
    
    
    

    


