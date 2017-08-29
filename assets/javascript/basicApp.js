var mainContent = $("#mainContent");
var countdown = 2;
var intervalId;
var timeRemaining;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// --------------------------- Function to Countdown 120 Seconds then Stop ------------------------------//
	function countdownTimer() {
		intervalId = setInterval(twoMinutes, 1000);
	};

	function twoMinutes() {
		countdown--;
		// timeRemaining.html("<h2> Time Remaining: " + countdown + "</h2>");

		if (countdown === 0) {
			finalScreen();
		} 
	}

	function finalScreen() {
		clearInterval(intervalId);

	}

	countdownTimer();

// ------------------------- Questions and Answers -----------------------------------------------------//
var triviaQuestions = [

	question1 = {
		question: "Test question 1",
		answerChoices: ["correct answer", "incorrect 1", "incorrect 2", "incorrect 3"],
		correctAnswerIndex: 0
	}, 

	question2 = {
		question: "Test question 2",
		answerChoices: ["incorrect 1", "correct answer", "incorrect 2", "incorrect 3"],
		correctAnswerIndex: 1
	}, 

	question3 = {
		question: "Test question 3",
		answerChoices: ["incorrect 1", "incorrect 2", "correct answer", "incorrect 3"],
		correctAnswerIndex: 2
	}, 

	question4 = {
		question: "Test question 4",
		answerChoices: ["incorrect 1", "incorrect 2", "incorrect 3", "correct answer"],
		correctAnswerIndex: 3
	}, 

	question5 = {
		question: "Test question 5",
		answerChoices: ["correct answer", "incorrect 1", "incorrect 2", "incorrect 3"],
		correctAnswerIndex: 0
	}, 

	question6 = {
		question: "Test question 6",
		answerChoices: ["incorrect 1", "correct answer", "incorrect 2", "incorrect 3"],
		correctAnswerIndex: 1
	}, 

	question7 = {
		question: "Test question 7",
		answerChoices: ["incorrect 1", "incorrect 2", "correct answer", "incorrect 3"],
		correctAnswerIndex: 2
	}, 

	question8 = {
		question: "Test question 8",
		answerChoices: ["incorrect 1", "incorrect 2", "incorrect 3", "correct answer"],
		correctAnswerIndex: 3
	}, 

]


// Display all questions 
// Create buttons for all answer choices

// Display all answer choices beneath question
// If user click === answerchoices[correctAnswerIndex], correctAnswers++
// If user click !== answerchoices[correctAnswerIndex], incorrectAnswers++
// If no user click, unanswered++
// Disable multi-select answers
// Add timer to top of page