function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + " of 5"
    "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("What th colors of mardi-gras?", ["Green,Yellow,Purple", "Red", "Ornge", "Blue"], "Green,Yellow,Purple"),
    new Question("What country Mardy-Gras is celebrated?", ["USA", "USA and Australia", "Israel", "China"], "USA and Australia"),
    new Question("Who is the mayor of new orleans?", ["Itamar Tzukerman", "Kfir yahav", "LaToya Cantrell", "bibi netanyahu"], "LaToya Cantrell"),
    new Question("What celebrate in the mardi gras??", ["Eating rich food", "Celebrate gay pride", "eat fatti food", "All correct!"], "All correct!"),
    new Question("How long does the mardi-gras go?", ["2 weeks", "1 month", "6 days", "1 day"], "2 weeks")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();