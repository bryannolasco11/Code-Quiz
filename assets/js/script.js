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
var questions = 
    {
        title: 'Commonly used data types DO NOT INCLUDE:',
        answers1: 'alerts', 
        answers2: 'strings',
        answers3: 'booleans',
        answers4: 'numbers',
        correctAnswer: 'alerts'
    };
 
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
// Creates a question





function showQuestion() {
    // selects where to put the question
    var titleDiv= document.getElementById('title');
    
   
    titleDiv.textContent = questions.title;
    console.log("My question function is working");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    
    button1.textContent = questions.answers1;
    button2.textContent = questions.answers2;
    button3.textContent = questions.answers3;
    button4.textContent = questions.answers4;

    titleDiv.appendChild(button1);
    titleDiv.appendChild(button2);
    titleDiv.appendChild(button3);
    titleDiv.appendChild(button4);

    button1.className = "options1";
    button2.className = "options2";
    button3.className = "options3";
    button4.className = "options4";

    button1.id = 'choicesId1';
    button2.id = 'choicesId2';
    button3.id = 'choicesId3';
    button4.id = 'choicesId4';

    var buttonEl1 = document.querySelector("#choicesId1");
    var buttonEl2 = document.querySelector("#choicesId2");
    var buttonEl3 = document.querySelector("#choicesId3");
    var buttonEl4 = document.querySelector("#choicesId4");

    buttonEl1.addEventListener("click", clickAnswer); 
    buttonEl2.addEventListener("click", clickAnswer);
    buttonEl3.addEventListener("click", clickAnswer);
    buttonEl4.addEventListener("click", clickAnswer);
    };

function clickAnswer() {
    console.log(questions.answers1);
    console.log(questions.correctAnswer);
    console.log("this button got clicked");
    if (questions.answer1 === questions.correctAnswer) {
        console.log("this is correct");
    } else if ("questions.answer1" !== "questions.correctAnswer") {
        console.log("time will be subtracted");    
        }
    }

    //let opt1 = document.querySelector('.options1');
    //console.log(opt1);

    // I need to shuffle the answers
    
    // I need to assign the array to each button
    
    // I nned to make an option = correct value

    // Correct Value sends me to the next question


