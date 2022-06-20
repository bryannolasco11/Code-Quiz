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

console.log(buttonEl);
// This gets the quiz started
buttonEl.addEventListener("click", function() {
    console.log("This will start the quiz!");
    // I will make the instructions invisible
    main.setAttribute("style", "display:none;");
    
    //qcontainer.setAttribute("style", "display:visible");
    quizQuestion();
});
    

// Creates a question

function quizQuestion() {
    var body = document.body;
    var divEl = document.createElement("div");
    var listEl= document.createElement("ol");
    var li1= document.createElement("li");
    var li2= document.createElement("li");
    var li3= document.createElement("li");
    var li4= document.createElement("li");

    listEl.textContent = "What color is the sky?";
    li1.textContent = "Red";
    li2.textContent = "Orange";
    li3.textContent = "Blue";
    li4.textContent = "Green";

    body.appendChild(divEl);
    divEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);


    //questionEl.className = "question";

    //var questionContainer = document.getElementById("qcontainer");
    // give it a class name

    //questionEl.appendChild(questionContainer);
    //questionEl.textContent="question";
    console.log("This is a new div");
    
};
