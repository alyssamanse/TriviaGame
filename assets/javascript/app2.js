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

	console.log("global scope " + isOutOfTime);

	// CHANGE NEXTPAGE TO SHOW CORRECT ANSWER AND THEN DISPLAY NEXT QUESTION
	// TEST IMAGES IN NEXTPAGE FUNCTION

	// --------------------------- Bank of Questions -------------------------------------------------------//

	var triviaQuestions = [
		"What is Rachel Green's middle name?",
		"What is the dog's name in Frasier?", 
		"Who was the FBI agent in Twin Peaks?",
		"Name the dynamic duo of The X-Files", 
		"Which one of these was not the last name of a main character in Dawson's Creek?",
	]


	// --------------------------- Bank of Correct Answers -------------------------------------------------//

	var correctAnswers = [
		"Karen",
		"Eddie",
		"Dale Cooper",
		"Mulder and Scully",
		"Morris",
	]

	// --------------------------- Bank of Answer Choices --------------------------------------------------//

	var answerOptions = [
		["Monica", "Karen", "Maryann", "Krystal"],
		["Martin", "Buster", "Eddie", "Sir Pounce"]
		["Dale Cooper", "Laura Palmer", "Harry S. Truman", "Bejamin Horne"],
		["Miller and Scavo", "Mulder and Scully", "Musgrave and Shriver", "Mulberry and Schroder"],
		["Witter", "McPhee", "Lindley", "Morris"],
	] 

	// --------------------------- Bank of Answer Gifs -----------------------------------------------------//

	var correctAnswerGifs = [
		"rachel-karen-green-win.gif",
		"eddie-frasier-win.gif",
		"dale-cooper-win.gif",
		"mulder-scully-win",
		"dawsons-creek-win"
	]

	var incorrectAnswerGifs = [
		"rachel-karen-green-lose.gif",
		"eddie-frasier-lose.gif",
		"dale-cooper-lose.gif",
		"mulder-scully-lose",
		"dawsons-creek-lose"
	]

	// --------------------------- Display Question and Answer Choices--------------------------------------//

	function displayQuestion() {
		console.log("inside displayQuestion function " + isOutOfTime);
		countdownTimer();
		emptyContent();
		currentQuestion.append(triviaQuestions[questionCounter]).addClass("question");

		answerOptions[questionCounter].forEach(function(answerChoice) {
			var answer = $("<button>").html(answerChoice).addClass("answer");
			answerChoices.append(answer);
		})

		$("button").click(function(event) {
			if ($(this).html() === correctAnswers[questionCounter]) {
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