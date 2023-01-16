var score = localStorage.getItem("score");
var initials = localStorage.getItem("initials");
var highscores = document.getElementById("highscores");

var liEl = document.createElement('li');
liEl.textContent = initials + " " + score;
highscores.appendChild(liEl);