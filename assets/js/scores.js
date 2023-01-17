var score = localStorage.getItem("score");
var initials = localStorage.getItem("initials");
var highscores = document.getElementById("highscores");
var highscoresPath = window.location.href.replace("highscores", "index");

var liEl = document.createElement('li');
liEl.textContent = "initials: " + initials + " score: " + score;
highscores.appendChild(liEl);

document.getElementById("clear").addEventListener("click", () => {
    localStorage.setItem("score", score);
    localStorage.setItem("initials", initials.value);
    window.location.href = highscoresPath;
    liEl.textContent = ""
})