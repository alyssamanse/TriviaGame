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
	// unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");

	// Declaring interval ID to store countdown ID
	var intervalId;

	// Countdown Timer
	var countdown = 30;

	var countdownTimer;
	var thirtySeconds;
	var stop;
	var questionCounter = 0;

	// FIX: UNANSWERED, WHEN COUNT === 0
	// ADD: TRIVIA QUESTIONS

	// --------------------------- Bank of Questions -------------------------------------------------------//

	triviaQuestions = [
		"What is Rachel Green's middle name?",
		"What is the dog's name in Frasier?"
	]


	// --------------------------- Bank of Correct Answers -------------------------------------------------//

	correctAnswers = [
		"Karen",
		"Eddie"
	]

	// --------------------------- Bank of Answer Choices --------------------------------------------------//

	answerOptions = [
		["Monica", "Karen", "Maryann", "Krystal"],
		["Martin", "Buster", "Eddie", "Sir Pounce"]
	] 

	// --------------------------- Display Question and Answer Choices--------------------------------------//

	function displayQuestion() {
		countdown = 30;
		countdownTimer();
		currentQuestion.empty();
		currentQuestion.append(triviaQuestions[questionCounter]).addClass("question");
		answerChoices.empty();

		answerOptions[questionCounter].forEach(function(answerChoice) {
			var answer = $("<button>").html(answerChoice).addClass("answer");
			answerChoices.append(answer);
		})

		$("button").click(function(event) {
			if (countdown === 0) {
				stop();
				unanswered++;
				questionCounter++;
				nextPage();
			}

			if ($(this).html() === correctAnswers[questionCounter]) {
				stop();
				correct++;
				questionCounter++;
				nextPage();
			} else {
				stop();
				incorrect++;
				questionCounter++;
				nextPage();
			}
		})
	}

	function nextPage() {
		if (questionCounter >= 2) {
			finalScreen();
		} else {
			displayQuestion();
		}
	}


	function finalScreen() {
		timeRemaining.empty();
		currentQuestion.empty();
		answerChoices.empty();
		correctCount.html("<h3> Correct: " + correct + "</h3>");
		incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");
		unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");
	}

	displayQuestion();


	// --------------------------- Function to Countdown 30 Seconds then Stop ------------------------------//

	function countdownTimer() {
		countdown = 10;
		intervalId = setInterval(thirtySeconds, 1000);
	};

	function thirtySeconds() {
		countdown--;
		timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

		if (countdown === 0) {
			stop();
		} 
	}

	function stop() {
		clearInterval(intervalId);
	}

});