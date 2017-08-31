$(document).ready(function() {

	// --------------------------- Global Variables -------------------------------------------------------//

	// HTML Elements
	var timeRemaining = $("#timeRemaining");
	var clock = $("#clock");
	var currentQuestion = $("#currentQuestion");
	var answerChoices = $("#answerChoices");
	var correctCount = $("#correctCount");
	var incorrectCount = $("#incorrectCount");
	var unansweredCount = $("#unansweredCount");
	var gif = $("#gif");
	var restart = $("#restart");
	var start = $("#startScreen");

	// Starting Scores
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questionCounter = 0;

	// Declared Variables
	var intervalId;
	var countdown;
	var countdownTimer;
	var thirtySeconds;
	var stop;
	var isOutOfTime;

	// --------------------------- Bank of Questions -------------------------------------------------------//

	var triviaQuestions = [
	
		{
			question: "What is Rachel Green's middle name?", 
			correctAnswer: "Karen",
			answerOptions: ["Monica", "Karen", "Maryann", "Krystal"],
			correctAnswerGif: "rachel-karen-green-win.gif",
			incorrectAnswerGif: "rachel-karen-green-lose.gif"
		},

		{
			question: "What is the dog's name in Frasier?", 
			correctAnswer: "Eddie",
			answerOptions: ["Martin", "Buster", "Eddie", "Sir Pounce"],
			correctAnswerGif: "eddie-frasier-win.gif",
			incorrectAnswerGif: "eddie-frasier-lose.gif"
		},

		{
			question: "Who was the FBI agent in Twin Peaks?", 
			correctAnswer: "Dale Cooper",
			answerOptions: ["Dale Cooper", "Laura Palmer", "Harry S. Truman", "Benjamin Horne"],
			correctAnswerGif: "dale-cooper-win.gif",
			incorrectAnswerGif: "dale-cooper-lose.gif"
		},

		{
			question: "Name the dynamic duo of The X-Files", 
			correctAnswer: "Mulder and Scully",
			answerOptions: ["Miller and Scavo", "Mulder and Scully", "Monk and Smitty", "Mulberry and Sandy"],
			correctAnswerGif: "mulder-scully-win.gif",
			incorrectAnswerGif: "mulder-scully-lose.gif"
		},

		{
			question: "Which one of these was not the last name of a main character in Dawson's Creek?", 
			correctAnswer: "Morris",
			answerOptions: ["Witter", "McPhee", "Lindley", "Morris"],
			correctAnswerGif: "dawsons-creek-win.gif",
			incorrectAnswerGif: "dawsons-creek-lose.gif"
		},

		{
			question: "Who loves orange soda?", 
			correctAnswer: "Kel",
			answerOptions: ["Keenan", "Kel", "Kasey", "Keisha"],
			correctAnswerGif: "kel-win.gif",
			incorrectAnswerGif: "kel-lose.gif"
		},

		{
			question: "Which rocker did DJ Tanner date in Full House?", 
			correctAnswer: "Viper",
			answerOptions: ["Thrasher", "Stingray", "Viper", "Voltage"],
			correctAnswerGif: "viper-win.gif",
			incorrectAnswerGif: "viper-lose.gif"
		},

		{
			question: "Who was a Freak, not a Geek?", 
			correctAnswer: "Daniel Desario",
			answerOptions: ["Bill Haverchuck", "Neil Schweiber", "Sam Weir", "Daniel Desario"],
			correctAnswerGif: "daniel-win.gif",
			incorrectAnswerGif: "daniel-lose.gif"
		},

		{
			question: "In Buffy the Vampire Slayer, what was Giles first name?", 
			correctAnswer: "Rupert",
			answerOptions: ["Rupert", "Raymond", "Rona", "Rayne"],
			correctAnswerGif: "giles-win.gif",
			incorrectAnswerGif: "giles-lose.gif"
		},

		{
			question: "Who is not a Powerpuff Girl?", 
			correctAnswer: "Bebe",
			answerOptions: ["Blossom", "Bubbles", "Bebe", "Buttercup"],
			correctAnswerGif: "ppgirls-win.gif",
			incorrectAnswerGif: "ppgirls-lose.gif"
		}
	]

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

