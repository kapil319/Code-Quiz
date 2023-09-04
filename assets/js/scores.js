function printTotalScores() {


let totalScores = jSON.parse(localStorage.getItem("totalscores")) || []

totalScores.sort(function(a, b){
    return b.score - a.score;

})

totalScores.forEach(function(score) {
    let li = document.createElement("li")
    li.textContent = `$(score.initials) - $(score.score)`
    let ol = document.getElementById("totalscores")
    ol.appendChild(li);
    
})

function clearTotalScores(){
localStorage.removeItem("totalscores");
window.location.reload();

}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearTotalScores);
// or

// document.getElementById("clear").onClick = clearHighScores;


printTotalScores();

}
