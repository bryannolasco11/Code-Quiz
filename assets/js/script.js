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
var verifyAnswer = "";
// array of questions
var questions = [
    
    {
        title: 'Commonly used data types DO NOT INCLUDE:',
        answers: ['alerts', 'strings', 'booleans',  'numbers'],
        correctAnswer: 'alerts'
    },
    {
        title: 'The condition in an if/else statement is enclosed with________.',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 'parenthesis'
    },
    {
        title: 'Arrays in JavaScript can be used to store _____.',
        answers: ['numbers and strings', 'other arrays', 'booleans',  'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ___ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'quotes',  'parenthesis'],
        correctAnswer: 'quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing conent to the debugger is:',
        answers: ['JavaScript', 'terminal/bash', 'for loops',  'console.log'],
        correctAnswer: 'console.log'
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
    main.setAttribute("style", "display:none");
    title.setAttribute("style","visibility: visible");
    stopwatch.setAttribute("style","visibility: visible");
    //qcontainer.setAttribute("style", "display:visible");
    startQuiz();
});
    
function startQuiz(){
    //startTimer();
    showQuestion();
    //showQuestion(questions);
    
};

// For the time function use setInterval(timerFunc, 1000) 
// - global variable called time gets minus 1 every second
function startTimer(){
    console.log("This runs the timer");

};
// For the endgame function pushes the current time and player initials as an object into an array from localstorage
// var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
// var playerScore = { time , initials}
// savedScores.push(playerScore)
// localStorage.setItem(JSON.stringify(savedScores))




// Creates a question
function showQuestion() {
    console.log(verifyAnswer);
   
    
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
        console.log('This is correct');
        //title.setAttribute("style", "background-color:green");
        //window.alert("This is correct!");
        //var titleDiv= document.getElementById('title');
        //var answerVerify= document.createElement("h2");
        //answerVerify.textContent = "That's right.  You got lucky!";
        //titleDiv.appendChild(answerVerify);
        
    }
    questionCounter++ 
    console.log(questionCounter);
    
    if(questionCounter >= questions.length){
        // Put Endgame function Here
        console.log('game is over')
        title.setAttribute("style","display: none");
    } else { 
        
        showQuestion()
    };

    
};


    

    

    // I need to shuffle the answers
    
    
    
    
