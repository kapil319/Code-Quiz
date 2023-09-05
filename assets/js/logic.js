//Timer Variables//

let currentQuestionIndex = 0;
let time = questions.length * 10;
let timerID;

// Elements for HTML//

let startButton = document.getElementById("start");
let questionsElement = document.getElementById("questions");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let timerElement = document.getElementById("time");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");



function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

        if(time < 0) {
            time = 0;
        } 

    timerElement.textContent = time; 
    
    feedBackElement.textContent = "No, Wrong Answer"
    } else {
        feedBackElement.textContent = "Yes, Correct Answer";

    }

    feedBackElement.setAttribute("class", "feedback");


    setTimeout(function() {
        feedBackElement.setAttribute("class", "feedback hide")

    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === question.length) {
        quizEnd()
    }   else {
        getQuestion();
    }

}

function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
        startScreenElement.setAttribute("class", "hide");
        questionsElement.removeAttribute("class");
        timerID = setInterval(clockTick, 1000)
    
        timerElement.textContent = time;
    
        getQuestion();
    
    }
    

function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    
    let titleElement = document.getElementById("question-title");
        titleElement.textContent = currentQuestion.title;
    
        choicesElement.innerHTML = "";
        
        currentQuestion.choices.forEach(function(choice, index) {
    let choiceButton = document.createElement("button");
    
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
    
        choiceButton.textContent = `${index + 1}. ${choice}`
            
        choiceButton.addEventListener("click", questionClick);
    
        choicesElement.append(choiceButton);
        })
    }
    


function quizEnd(){
    clearInterval(timerID);
    
    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");

}



function clockTick(){
    time--;
    timerElement.textContent = time;

    if (time <= 0){
        quizEnd();

    }
}



function saveTotalScores(){
    let initials = initialElement.value.trim();

    if(initials !== ""){
        let totalScores = JSON.parse(localStorage.getItem("totalscores")) ||[];
        let newScore = {
            score: time,
            initials: initials
        }        

        totalScores.push(newScore);
        localStorage.setItem("totalscores", JSON.stringify(totalScores));
    
        window.location.href = "totalscores.html";
    }

}


function checkForEnter(event){

    if(event.key === "Enter") {
        saveTotalScores();
    }
}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveTotalScores);
initialElement.addEventListener("click", checkForEnter);


// function clickAnswer(){ 
// }
// function nextQuestion() {
      