// Create variables for all html elements

// Time Remaining
var timeRemaining = $("#timeRemaining");
timeRemaining.html("<h2> Time Remaining: </h2>");

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
correctCount.html("<h3> Correct: " + correct + "</h3>");

// Incorrect Answer Count
var incorrectCount = $("#incorrectCount");
var incorrect = 0;
incorrectCount.html("<h3> Incorrect: " + incorrect + "</h3>");

// Unanswered Count
var unansweredCount = $("#unansweredCount");
var unanswered = 0;
unansweredCount.html("<h3> Unanswered: " + unanswered + "</h3>");

// Start Over Button
var restart = $("#restart");


// Objects for each question
// Consisting of keys: question, correct answer, incorrect answers, image

var question1 = {
	question: "What is Rachel Green's middle name?",
	correctAnswer: "Karen",
	incorrectAnswers: ["Monica", "Anne", "Bertha"],
	answerChoices: ["Monica", "Anne", "Bertha", "Karen"],
	gifURL: "rachel-karen-green.gif"
}; 

var question2 = {
	question: "Name the dog in Full House",
	correctAnswer: "Coment",
	incorrectAnswers: ["Flash", "Luna", "Apollo"],
	answerChoices: ["Flash", "Comet", "Luna", "Apollo"],
	gifURL: "comet-dog.gif"
}; 

triviaQuestions = [question1, question2];

triviaQuestions.forEach(function(currentElement) {
	currentQuestion.html(currentElement.question);

	currentElement.answerChoices.forEach(function(choice) {
	var button = $("<button>");
	button.text(choice);
	var newDiv = $("<div>");
	newDiv.append(button);
	answerChoices.append(newDiv);
});

});


// Randomize order of answer array to insert into answer spaces

// Create buttons for each answer space

// Add button hovers

// Create timer to countdown 30 seconds for each question

// If player selects correct answer, increase wins, stop timer, clear question and show correct image and answer text

// If player selects incorrect answer, increase losses, stop timer, clear question and show correct image and answer text

// If player does not select answer, increase unanswered count, stop timer, clear question and show correct image and answer text

// After a question, wait a few seconds and go to the next question
