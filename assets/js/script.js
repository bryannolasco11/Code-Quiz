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

// For the endgame function pushes the current time and player initials as an object into an array from localstorage
// var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
// var playerScore = { time , initials}
// savedScores.push(playerScore)
// localStorage.setItem(JSON.stringify(savedScores))


// Press start to start quiz
var name =""
var buttonEl = document.querySelector("#startQuiz");
var timerFunc = undefined
var timerEl = document.getElementById('stopwatch');
var endEl = document.getElementById('end');
var questionCounter = 0 
// Need a global time variable
var remainingTime = 75;
var score= 0;
//var highScore = '';
//var NumberHighScores=10;
//var high_scores='highScores';
//var myInterval = setInterval(myTimer, 1000)
//var myTimer='';
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
//var questionCounter = 0 

// This gets the quiz started
buttonEl.addEventListener("click", function() {
    console.log("This will start the quiz!");
    // I will make the instructions invisible
    main.setAttribute("style", "display:none");
    title.setAttribute("style","visibility: visible");
    stopwatch.setAttribute("style","visibility: visible");
    startQuiz();
});


function startQuiz(){
    startTimer();
    showQuestion();
      
};

// For the time function use setInterval(timerFunc, 1000) 
// - global variable called time gets minus 1 every second
function startTimer(){
    console.log("This runs the timer");
    var timerFunc = setInterval(function() {
    //function myTimer () {    
        if (remainingTime >60) {
            timerEl.textContent = remainingTime + " seconds remaining.  Plenty of time!";
            remainingTime--;
        }
        
        else if (remainingTime > 40 && remainingTime <= 60) {
            timerEl.textContent = remainingTime + " seconds remaining.  You're actually doing well.  I'm a little surprised.";
            remainingTime--;
        }
        else if (remainingTime > 20 && remainingTime <= 40) {
            timerEl.textContent = remainingTime + " seconds remaining.  Just reminding you there is a timer.  No worries.";
            remainingTime--;
        }

        else if (remainingTime > 10 && remainingTime <= 20) {
            timerEl.textContent = remainingTime + " seconds remaining.  You better hustle!";
            remainingTime--;
        }

        else if (remainingTime > 1 && remainingTime <= 10) {
            timerEl.textContent = remainingTime + " seconds remaining.  It's crunch time!!";
            remainingTime--;
        }

        else if (timerEl.textConent === 1) {
            remainingTime + " second left.  You are almost out of time!";
            remainingTime--;
        } 

        else {
            timerEl.textContent = '';
            title.setAttribute("style", "display: none");
            
        }

    }
,1000)};

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
        console.log('This is correct');
        score++;
        console.log(score);
        alert("Correct!");
        
    } else {
        // must penalize for wrong answer
        remainingTime = remainingTime - 10;
    }
    questionCounter++ 
    console.log(questionCounter);
    
    if(questionCounter >= questions.length){
        // Put Endgame function Here
        
        clearInterval(timerFunc);
        console.log(timerFunc);
        title.setAttribute("style","display: none");
        //must hide the timer
        stopwatch.setAttribute("style", "display: none");
        endClock.setAttribute("style", "display: none");
        localStorage.setItem('score',score);
        //localStorage.setItem("score", JSON.stringify(score));
        console.log(score);
        stopTimer();
        //var name=window.prompt("You have finished the Quiz.  I'm impressed.  What are your initals?"  )
        // For the endgame function pushes the current time and player initials as an object into an array from localstorage
    //  var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
    //  var playerScore = { time , initials}
    //  savedScores.push(playerScore)
    //  localStorage.setItem(JSON.stringify(savedScores))
        
        
        
        
        
        endGame();
    } else { 
        
        showQuestion()
    };   
};

function stopTimer () {
    clearInterval(timerFunc);

console.log(timerFunc);
};
stopTimer();

function endGame() {
    // For the endgame function pushes the current time and player initials as an object into an array from localstorage
    // var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
    // var playerScore = { time , initials}
    // savedScores.push(playerScore)
    // localStorage.setItem(JSON.stringify(savedScores))
    
    
    //var highscore = localStorage.getItem("highscore");
    //if(highscore === null) {
       // highscore = 0;
    //}

    //if (remainingTime> highscore) {
        //var name = window.prompt("Hello. I don’t believe we have been introduced. What's your name?");
       // alert(name + ", a pleasure to meet you. I am C-3PO, Human-Cyborg Relations.");
        //localStorage.setItem(highscore , remainingTime);
        //localStorage.setItem("name", name);

        //alert(name + " now has the high score of " + remainingTime + "!");
    //}
   //else {
       //console.log("game over");
   //}
   console.log(score);
    //localStorage.getItem(score);
    //localStorage.getItem(highScore);
    //console.log(score + " in the endgame.");
    //console.log(highScore + " in the endgame.");
    
    //console.log(highScore + " is the high score.");
    //if (highScore === "null") {
        //localStorage.setItem("score", highScore);
        //var name = window.prompt("Wow.  You have achieved the highest score!  What is your name?");
       // console.log ("game over");
       // console.log(remainingTime);
       
        //return;
   // } else if (score > highScore ){
       // var name = window.prompt("Wow.  You have achieved the highest score!  What is your name?");
       // localStorage.setItem("score", highScore);
   // }
   // else {
   //     console.log("play again?");
   // }
};