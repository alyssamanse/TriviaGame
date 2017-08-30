// START SCREEN
// ADD SOUNDS FOR WINNING AND LOSING

$(document).ready(function() {

	// Time Remaining
	var timeRemaining = $("#timeRemaining");
	var clock = $("#clock");

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

	// Start Screen
	var start = $("#startScreen");

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
		question: "Who loves orange soda?", 
		correctAnswer: "Kel",
		answerOptions: ["Keenan", "Kel", "Kasey", "Keisha"],
		correctAnswerGif: "kel-win.gif",
		incorrectAnswerGif: "kel-lose.gif"
	}

	var question7 = {
		question: "Which rocker did DJ Tanner date in Full House?", 
		correctAnswer: "Viper",
		answerOptions: ["Thrasher", "Stingray", "Viper", "Voltage"],
		correctAnswerGif: "viper-win.gif",
		incorrectAnswerGif: "viper-lose.gif"
	}

	var question8 = {
		question: "Who was a Freak, not a Geek?", 
		correctAnswer: "Daniel Desario",
		answerOptions: ["Bill Haverchuck", "Neil Schweiber", "Sam Weir", "Daniel Desario"],
		correctAnswerGif: "daniel-win.gif",
		incorrectAnswerGif: "daniel-lose.gif"
	}

	var question9 = {
		question: "In Buffy the Vampire Slayer, what was Giles first name?", 
		correctAnswer: "Rupert",
		answerOptions: ["Rupert", "Raymond", "Rona", "Rayne"],
		correctAnswerGif: "giles-win.gif",
		incorrectAnswerGif: "giles-lose.gif"
	}

	var question10 = {
		question: "Who is not a Powerpuff Girl?", 
		correctAnswer: "Bebe",
		answerOptions: ["Blossom", "Bubbles", "Bebe", "Buttercup"],
		correctAnswerGif: "ppgirls-win.gif",
		incorrectAnswerGif: "ppgirls-lose.gif"
	}

	// --------------------------- Array for Trivia Questions ----------------------------------------------//

	var triviaQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

	// --------------------------- Display Question and Answer Choices--------------------------------------//

	function displayQuestion() {
		start.hide();
		timeRemaining.show();
		emptyContent();
		countdownTimer();
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

	// ---------------------------------------------- Start Screen ----------------------------------------------------//

	function startScreen() {
		timeRemaining.hide();
		var startBtn = $("<button>").html("Start").addClass("btn-lg startButton");
		start.append(startBtn);

		startBtn.click(function() {
			displayQuestion();
		})

		$("button").hover(function(){
			$(this).css("opacity", ".5");
		}, function(){
			$(this).css("opacity", "1");
		})
	}

	startScreen();

	// ----------- Functions to Generate Content and Counts for Wins, Losses and Unanswered Questions -----------------//

	function resultsPageWin() {
		emptyContent();
		timeRemaining.hide();
		currentQuestion.html("<h2> Correct! </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).correctAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 3000);

	}

	function resultsPageLose() {
		emptyContent();
		timeRemaining.hide();
		currentQuestion.html("<h2> Wrong.. the correct answer was: " + (triviaQuestions[questionCounter].correctAnswer) + " </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).incorrectAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 3000);
	}

	function resultsPageUnanswered() {
		emptyContent();
		timeRemaining.hide();
		currentQuestion.html("<h2> Time's up.. the correct answer was: " + (triviaQuestions[questionCounter].correctAnswer) + " </h2>").addClass("text");
		gif.html("<img src='assets/images/" + ((triviaQuestions[questionCounter]).incorrectAnswerGif) + "' width='400px'>")
		questionCounter++;
		setTimeout(nextPage, 3000);
	}

	// --------------------------- Function to Go to Next Question or Final Screen --------------------------------------//

	function nextPage() {
		if (questionCounter >= 10) {
			finalScreen();
		} else {
			displayQuestion();
		}
	}

	// -------------------------------------------- End of Game Screen---------------------------------------------------//

	function finalScreen() {
		clock.empty();
		emptyContent();
		correctCount.html("<h3> Correct: " + correct + "</h3>");
		incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");
		unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");
		var restartButton = $("<button>").html("Start Over?").addClass("restartButton btn-lg");
		restart.append(restartButton);

		$("button").hover(function(){
			$(this).css("opacity", ".5");
		}, function(){
			$(this).css("opacity", "1");
		})

		restartButton.click(function() {
			emptyContent();
			emptyScores();
			questionCounter = 0;
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
		clock.empty();
		restart.empty();
	}

	function emptyScores() {
		correctCount.empty();
		incorrectCount.empty();
		unansweredCount.empty();
	}

	// --------------------------- Function to Countdown 30 Seconds then Stop ------------------------------//

	function countdownTimer() {
		countdown = 30;
		isOutOfTime = false;
		intervalId = setInterval(thirtySeconds, 1000);
	};

	function thirtySeconds() {
		clock.html(countdown);
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

});

