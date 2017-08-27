$(document).ready(function() {

	// Create variables for all html elements

	// Time Remaining
	var timeRemaining = $("#timeRemaining");
	timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

	// Question
	var currentQuestion = $("#currentQuestion");

	// Answer Choices
	var answerChoices = $("#answerChoices");

	// Result
	var result = $("#result");

	// Correct Answer
	var correctAnswer = $("#correctAnswer");

	// Gif
	var gif = $("#gif");

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

	// Start Over Button
	var restart = $("#restart");

	// Declaring interval ID to store countdown ID
	var intervalId;

	// Countdown Timer
	var countdown = 30;

	var countdownTimer;
	var thirtySeconds;
	var stop;


	// Objects for each question
	// Consisting of keys: question, correct answer, incorrect answers, image

	var question1 = {
		question: "What is Rachel Green's middle name?",
		answerChoices: ["Monica", "Maryanne", "Karen", "Kimberlina"],
		answerIndex: 2,
		answer: "Karen"
	}

	function displayQuestion(q) {

		countdownTimer();
		timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");
		currentQuestion.html(q.question);
	}

	displayQuestion(question1);


	// Randomize order of answer array to insert into answer spaces

	// Create buttons for each answer space

	// Add button hovers

	// --------------------------- Function to Countdown 30 Seconds then Stop ------------------------------//
	function countdownTimer() {
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
	// ------------------------------------------------------------------------------------------------------//


	// If player selects correct answer, increase wins, stop timer, clear question and show correct image and answer text

	// If player selects incorrect answer, increase losses, stop timer, clear question and show correct image and answer text

	// If player does not select answer, increase unanswered count, stop timer, clear question and show correct image and answer text

	// After a question, wait a few seconds and go to the next question

})
