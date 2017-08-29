// TRY THIS WITH ONE OBJECT PER QUESTION ALL IN AN ARRAY VARIABLE, ACCESS W/ COUNTER

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
	// correctCount.html("<h3> Correct: " + correct + "</h3>");

	// Incorrect Answer Count
	var incorrectCount = $("#incorrectCount");
	var incorrect = 0;
	// incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");

	// Unanswered Count
	var unansweredCount = $("#unansweredCount");
	var unanswered = 0;
	

	// Image location in HTML
	var gif = $("#gif");

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
		answerOptions: ["Dale Cooper", "Laura Palmer", "Harry S. Truman", "Bejamin Horne"],
		correctAnswerGif: "dale-cooper-win.gif",
		incorrectAnswerGif: "dale-cooper-lose.gif"
	}

	var question4 = {
		question: "Name the dynamic duo of The X-Files", 
		correctAnswer: "Mulder and Scully",
		answerOptions: ["Miller and Scavo", "Mulder and Scully", "Musgrave and Shriver", "Mulberry and Schroder"],
		correctAnswerGif: "mulder-scully-win",
		incorrectAnswerGif: "mulder-scully-lose"
	}

	var question5 = {
		question: "Which one of these was not the last name of a main character in Dawson's Creek?", 
		correctAnswer: "Morris",
		answerOptions: ["Witter", "McPhee", "Lindley", "Morris"],
		correctAnswerGif: "dawsons-creek-win",
		incorrectAnswerGif: "dawsons-creek-lose"
	}

	// --------------------------- Array for Trivia Questions ----------------------------------------------//

	var triviaQuestions = [question1, question2, question3, question4, question5];

	// --------------------------- Display Question and Answer Choices--------------------------------------//

	function displayQuestion() {
		countdownTimer();
		emptyContent();
		currentQuestion.append((triviaQuestions[questionCounter]).question).addClass("question");

		(triviaQuestions[questionCounter]).answerOptions.forEach(function(answerChoice) {
			var answer = $("<button>").html(answerChoice).addClass("answer");
			answerChoices.append(answer);
		})

		$("button").click(function(event) {
			if ($(this).html() === (triviaQuestions[questionCounter]).correctAnswer) {
				stop();
				correct++;
				questionCounter++;
				// nextPage();
			} else {
				stop();
				incorrect++;
				questionCounter++;
				// nextPage();
			}
		})
	}

	function resultsPageWin() {
		// IF WIN, SHOW CORRECT! AND CORRECT GIF
	}

	function resultsPageLose() {
		// IF LOSE, SHOW INCCORECT W/ CORRECT ANSWER AND LOSE GIF
	}

	function nextPage() {
		if (questionCounter >= 5) {
			finalScreen();
		} else {
			displayQuestion();
		}
	}


	function finalScreen() {
		timeRemaining.empty();
		emptyContent();
		correctCount.html("<h3> Correct: " + correct + "</h3>");
		incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");
		unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");
	}

	// Empties all html content for trivia question, answer and images (leaves time remaining in place)
	function emptyContent() {
		currentQuestion.empty();
		answerChoices.empty();
		gif.empty();
	}

	displayQuestion();


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
				questionCounter++;
				// nextPage();
			}
		} 
	}

	function stop() {
		clearInterval(intervalId);
	}

});