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

    var target = e.target.getAttribute("id");

    switch (target) {
        case "start":
            startBlock.setAttribute("class", "hide");
            questionsBlock.setAttribute("class", "start");
            questions()
            break;
        case "submit":
            console.log("222");
            startBlock.setAttribute("class", "start");
            questionsBlock.setAttribute("class", "hide");
            break;
    }
})


function questions() {
    // set question title name
    questionTitle.textContent = data[screen].question;
    
    for (let index = 0; index < data[screen].answers.length; index++) {
        const element = data[screen].answers[index];
        var liEl = document.createElement("button");
        console.log(element)
        olEl.appendChild(liEl);
        liEl.textContent = element.name
    }
    choices.appendChild(olEl);
}

var timerId = setInterval(() => {
    clearInterval(timerId);
})



