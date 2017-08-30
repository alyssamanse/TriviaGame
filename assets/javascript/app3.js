// START SCREEN
// ADD SOUNDS FOR WINNING AND LOSING
// ADD MORE QUESTIONS
// MAKE TIMER SHOW UP FIRST

$(document).ready(function() {

	// Time Remaining
	var timeRemaining = $("#timeRemaining");

	// Question
	var currentQuestion = $("#currentQuestion");

	// Answer Choices
	var answerChoices = $("#answerChoices");

	// Correct Answer Count
	var correctCount = $("#correctCount");
	var correct = 0;

	// Incorrect Answer Count
	var incorrectCount = $("#incorrectCount");
	var incorrect = 0;

	// Unanswered Count
	var unansweredCount = $("#unansweredCount");
	var unanswered = 0;

	// Image location in HTML
	var gif = $("#gif");

	// Restart location in HTML
	var restart = $("#restart");

	// Declaring interval ID to store countdown ID
	var intervalId;

	// Countdown Timer
	var countdown;

	var countdownTimer;
	var thirtySeconds;
	var stop;
	var isOutOfTime;
	var questionCounter = 0;

	// CHANGE NEXTPAGE TO SHOW CORRECT ANSWER AND THEN DISPLAY NEXT QUESTION
	// TEST IMAGES IN NEXTPAGE FUNCTION

	// --------------------------- Bank of Questions -------------------------------------------------------//

	var question1 = {
		question: "What is Rachel Green's middle name?", 
		correctAnswer: "Karen",
		answerOptions: ["Monica", "Karen", "Maryann", "Krystal"],
		correctAnswerGif: "rachel-karen-green-win.gif",
		incorrectAnswerGif: "rachel-karen-green-lose.gif"
	}

	var question2 = {
		question: "What is the dog's name in Frasier?", 
		correctAnswer: "Eddie",
		answerOptions: ["Martin", "Buster", "Eddie", "Sir Pounce"],
		correctAnswerGif: "eddie-frasier-win.gif",
		incorrectAnswerGif: "eddie-frasier-lose.gif"
	}

	var question3 = {
		question: "Who was the FBI agent in Twin Peaks?", 
		correctAnswer: "Dale Cooper",
		answerOptions: ["Dale Cooper", "Laura Palmer", "Harry S. Truman", "Benjamin Horne"],
		correctAnswerGif: "dale-cooper-win.gif",
		incorrectAnswerGif: "dale-cooper-lose.gif"
	}

	var question4 = {
		question: "Name the dynamic duo of The X-Files", 
		correctAnswer: "Mulder and Scully",
		answerOptions: ["Miller and Scavo", "Mulder and Scully", "Monk and Smitty", "Mulberry and Sandy"],
		correctAnswerGif: "mulder-scully-win.gif",
		incorrectAnswerGif: "mulder-scully-lose.gif"
	}

	var question5 = {
		question: "Which one of these was not the last name of a main character in Dawson's Creek?", 
		correctAnswer: "Morris",
		answerOptions: ["Witter", "McPhee", "Lindley", "Morris"],
		correctAnswerGif: "dawsons-creek-win.gif",
		incorrectAnswerGif: "dawsons-creek-lose.gif"
	}

	var question6 = {
		question: "", 
		correctAnswer: "Morris",
		answerOptions: [""],
		correctAnswerGif: "",
		incorrectAnswerGif: ""
	}

	var question7 = {
		question: "", 
		correctAnswer: "",
		answerOptions: [""],
		correctAnswerGif: "",
		incorrectAnswerGif: ""
	}

	var question8 = {
		question: "", 
		correctAnswer: "",
		answerOptions: [""],
		correctAnswerGif: "",
		incorrectAnswerGif: ""
	}

	var question9 = {
		question: "", 
		correctAnswer: "",
		answerOptions: [""],
		correctAnswerGif: "",
		incorrectAnswerGif: ""
	}

	var question10 = {
		question: "", 
		correctAnswer: "",
		answerOptions: [""],
		correctAnswerGif: "",
		incorrectAnswerGif: ""
	}

	// --------------------------- Array for Trivia Questions ----------------------------------------------//

	var triviaQuestions = [question1, question2, question3, question4, question5];

	// --------------------------- Display Question and Answer Choices--------------------------------------//

	function displayQuestion() {
		countdownTimer();
		emptyContent();
		currentQuestion.append((triviaQuestions[questionCounter]).question).addClass("question");

		(triviaQuestions[questionCounter]).answerOptions.forEach(function(answerChoice) {
			var answer = $("<button>").html(answerChoice).addClass("answer btn-lg");
			answerChoices.append(answer);
			answer.after("<br>");
		})

		$("button").click(function(event) {
			if ($(this).html() === (triviaQuestions[questionCounter]).correctAnswer) {
				stop();
				correct++;
				resultsPageWin();
			} else {
				stop();
				incorrect++;
				resultsPageLose();
			}
		})

		$("button").hover(function(){
			$(this).css("opacity", ".5");
		}, function(){
			$(this).css("opacity", "1");
		})
	};

	// ----------- Functions to Generate Content and Counts for Wins, Losses and Unanswered Questions -----------------//

	function resultsPageWin() {
		emptyContent();
		currentQuestion.html("<h2> Correct! </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).correctAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 5000);

	}

	function resultsPageLose() {
		emptyContent();
		currentQuestion.html("<h2> Wrong.. the correct answer was: " + (triviaQuestions[questionCounter].correctAnswer) + " </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).incorrectAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 5000);
	}

	function resultsPageUnanswered() {
		emptyContent();
		currentQuestion.html("<h2> Time's up.. the correct answer was: " + (triviaQuestions[questionCounter].correctAnswer) + " </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).incorrectAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 5000);
	}

	// --------------------------- Function to Go to Next Question or Final Screen --------------------------------------//

	function nextPage() {
		if (questionCounter >= 5) {
			finalScreen();
		} else {
			displayQuestion();
		}
	}

	// -------------------------------------------- End of Game Screen---------------------------------------------------//

	function finalScreen() {
		timeRemaining.empty();
		emptyContent();
		correctCount.html("<h3> Correct: " + correct + "</h3>");
		incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");
		unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");
		var restartButton = $("<button>").html("Restart").addClass("restartButton btn-lg");
		restart.append(restartButton);

		$("button").hover(function(){
			$(this).css("opacity", ".5");
		}, function(){
			$(this).css("opacity", "1");
		})

		restartButton.click(function() {
			questionCounter = 0;
			emptyContent();
			emptyScores();
			correct = 0;
			incorrect = 0;
			unanswered = 0;
			displayQuestion();
		})
	}

	// --------------------------- Empty Content from Previous Question to Start Over --------------------------------------//

	function emptyContent() {
		currentQuestion.empty();
		answerChoices.empty();
		gif.empty();
		timeRemaining.empty();
		restart.empty();
	}

	function emptyScores() {
		correctCount.empty();
		incorrectCount.empty();
		unansweredCount.empty();
	}

	// --------------------------- Function to Countdown 30 Seconds then Stop ------------------------------//

	function countdownTimer() {
		countdown = 10;
		isOutOfTime = false;
		intervalId = setInterval(thirtySeconds, 1000);
	};

	function thirtySeconds() {
		timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");
		countdown--;

		if (countdown < 0) {
			isOutOfTime = true;
			if (isOutOfTime === true) {
				stop();
				unanswered++;
				resultsPageUnanswered();
			}
		} 
	}

	function stop() {
		clearInterval(intervalId);
	}

displayQuestion();

});

