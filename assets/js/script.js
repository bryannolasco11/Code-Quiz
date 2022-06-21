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
        title: "Commonly used data types DO NOT INCLUDE:",
        answers: ['alerts', 'strings', 'booleans', 'numbers'],
        correctAnswer: 'alerts'
    },
    
]


console.log(buttonEl);
// This gets the quiz started
buttonEl.addEventListener("click", function() {
    console.log("This will start the quiz!");
    // I will make the instructions invisible
    main.setAttribute("style", "display:none;");
    title.setAttribute("style","visibility: visible");
    //qcontainer.setAttribute("style", "display:visible");
    quizQuestion();
});
    

// Creates a question

function quizQuestion() {
    console.log("Question Started");
    var body = document.body;
    var divEl = document.createElement("div");
    var listEl= document.createElement("ol");
    var li1= document.createElement("li");
    var button1 = document.createElement("button");
    var li2= document.createElement("li");
    var button2 = document.createElement("button");
    var li3= document.createElement("li");
    var button3 = document.createElement("button");
    var li4= document.createElement("li");
    var button4 = document.createElement("button");
   

    //divEl.textContent = "What color is the sky?";
    //li1.textContent = "Red";
    //li2.textContent = "Orange";
    //li3.textContent = "Blue";
    //li4.textContent = "Green";
    //buttonOptions.textContent = "Select";

    button1.textContent = "Red";
    button2.textContent = "Orange";
    button3.textContent = "Blue";
    button4.textContent = "Green";

    body.appendChild(divEl);
    divEl.appendChild(listEl);
    listEl.appendChild(li1);
    li1.appendChild(button1);
    listEl.appendChild(li2);
    li2.appendChild(button2);
    listEl.appendChild(li3);
    li3.appendChild(button3);
    listEl.appendChild(li4);
    li4.appendChild(button4);
    //buttonOptions.appendChild(li1);

    // I need to assign class names to each element
    //divEl.className = "title";
    li1.className = "option";
    li2.className = "option";
    li3.className = "option";
    li4.className = "option";

    divEl.id = 'title';
    li1.id = 'option1';
    li2.id = 'option2';
    li3.id = 'option3';
    li4.id = 'option4';

    button1.id = 'choices1';
    button2.id = 'choices2';
    button3.id = 'choices3';
    button4.id = 'choices4';

    button1.className = "answers";
    button2.className = "answers";
    button3.className = "answers";
    button4.className = "answers";

    var btn1 = document.querySelector(".button1");
    var btn2 = document.querySelector(".button2");
    var btn3 = document.querySelector(".button3");
    var btn4 = document.querySelector(".button4");

    
    
    
    showQuestion(questions);



    //listEl.innerText = question
    //listEl.textContent = question
    //onsole.log(question);
   
    ////at some point, with the answer array, I need to designate the correct answer and randomize where the choices go
};



function showQuestion(questions) {
    // selects where to put the question
var titleDiv = document.getElementById('title');
title.setAttribute("style","visibility: visible;");
// modify it
var listEl= document.createElement("ol");
titleDiv.textContent = questions.title;
console.log("My question function is working");
};