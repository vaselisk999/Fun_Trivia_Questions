// import question data from questions.js
console.log(data);

var score = 0;
var screen = 0

//buttons Elements

var start = document.getElementById("start");
var submit = document.getElementById("submit");

//blocks Elements

var startBlock = document.querySelector("#start-screen");
var questionsBlock = document.querySelector("#questions");
var endScreenBlock = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var choices = document.querySelector("#choices");

// questions title
var questionTitle = document.getElementById("question-title");

//buttons event listeners

document.addEventListener("click", (e) => {
    //get target button
    var target = e.target.getAttribute("id");
    //screen toggle
    switch (target) {
        case "start":
            startBlock.setAttribute("class", "hide");
            questionsBlock.setAttribute("class", "start");
            questions()
            break;
        case "submit":
            startBlock.setAttribute("class", "start");
            questionsBlock.setAttribute("class", "hide");
            break;
        default:
            choicesResult(target);
            break;
    }
})

function choicesResult(target){
    if(target){

    }else{

    }
}


function questions() {
    // set question title name
    questionTitle.textContent = data[screen].question;
    
    for (let index = 0; index < data[screen].answers.length; index++) {
        var buttonEl = document.createElement("button");
        const element = data[screen].answers[index];
        buttonEl.textContent = element.name;
        buttonEl.setAttribute("id", element.isCorrect);
        choices.appendChild(buttonEl);
    }
}


// timer count

var timerId = setInterval(() => {
    clearInterval(timerId);
})



