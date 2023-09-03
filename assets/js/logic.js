//variable to keep track of quiz//

let currentQuestionIndex = 0;
let time = question.length * 15;
let timerID;

//HTML elements;

let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let questionsElement = document.getElementById("questions");
let choicesElement = document.getElementById("choices");
let timerElement = document.getElementById("time");

let feedBackElement = document.getElementById("feedback");
let submitButton = document.getElementById("submit");

function questionClick(){
    if(this.value !==questions[currentQuestionIndex].answer){
        time -=15

        if(time < 0){
            time = 0;
        } 
    timerElement.textContent = time; 
    
    feedBackElement.textContent = "wrong"
    } else {
        feedBackElement.textContent = "correct!";

    }

    feedBackElement.setAttribute("class", "feedback");


    setTimeout(function(){
    
        feedBackElement.setAttribute("class", "feedback hide")

    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === question.length) {
        quizEnd()
    }   else{
        getQuestion();
    }

    }

}

  


function quizEnd(){
    clearInterval(timerID);
    
    let endScreenElement = document.getElementById("end=screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");

}



function clockTick(){
    time--;
    timerElement.textContent = time;

    if time <== 0{
        quizEnd();

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

    let titleElement = document.getElementById("question-title")
    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";
    
    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`
        
        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton)
    })
}

function clickAnswer(){


}

function nextQuestion() {

}

function endQuiz() {

}

function clockTimer(){

}

function totalScore(){

}

function checkForEnter(event){

}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", totalScore);
initialElement.addEventListener("click", checkForEnter);
