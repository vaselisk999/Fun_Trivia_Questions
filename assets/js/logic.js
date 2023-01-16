// import question data from questions.js
console.log(data);

var score = 0;
var screen = 0;
var timer = 150;
var initial = "";

//buttons Elements

var start = document.getElementById("start");
var submit = document.getElementById("submit");

//DOM Elements

var startBlock = document.querySelector("#start-screen");
var questionsBlock = document.querySelector("#questions");
var endScreenBlock = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var choices = document.querySelector("#choices");
var time = document.getElementById("time");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");

// questions title
var questionTitle = document.getElementById("question-title");

//buttons event listeners

document.addEventListener("click", (e) => {
    //get target button
    var target = e.target.getAttribute("id");
    console.log(e.target);
    //screen toggle
    switch (target) {
        case "start":
            startBlock.setAttribute("class", "hide");
            questionsBlock.setAttribute("class", "start");
            questions();
            break;
        case "submit":
            //check if input value is not empty
            if (initials.value === "") {
                return
            }
            startBlock.setAttribute("class", "start");
            questionsBlock.setAttribute("class", "hide");
            submitResult();
            break;
        case "initials":
            feedback.setAttribute("class", "feedback hide");
            feedback.textContent = "";
            break;
        default:
            choicesResult(e.target);
            break;
    }
})

function submitResult() {

}

function choicesResult(target) {
    console.log(target.getAttribute("data-iscorrect"))
    //check if data attribute not null
    if (target.getAttribute("data-iscorrect") === null) {
        return
    }
    if (target.getAttribute("data-iscorrect") === "true") {
        // increase score by 1 if correct
        // show feedback block
        // add text Correct
        score++;
        feedback.setAttribute("class", "feedback");
        feedback.textContent = "Correct!";
    } else {
        // add text Wrong
        feedback.textContent = "Wrong!";
    }
    // incrice screen by one
    screen++;

    // check if screen counter not bigger then array length
    // if bigger then show score screen
    if (screen <= data.length - 1) {
        questions();
    } else {
        questionsBlock.setAttribute("class", "hide");
        endScreenBlock.setAttribute("class", "start");
        finalScore.textContent = score;
    }
}


function questions() {
    //reset
    choices.innerHTML = "";
    // set question title name
    questionTitle.textContent = data[screen].question;

    //choice buttons
    for (let index = 0; index < data[screen].answers.length; index++) {
        var buttonEl = document.createElement("button");
        const element = data[screen].answers[index];
        buttonEl.textContent = element.name;
        buttonEl.setAttribute("data-iscorrect", element.isCorrect);
        choices.appendChild(buttonEl);
    }
}


// timer count
var timerId = setInterval(() => {
    // clearInterval(timerId);
    timer--;
    if (timer <= 0) {
        clearInterval(timerId);
        startBlock.setAttribute("class", "start");
        questionsBlock.setAttribute("class", "hide");
    }

})



