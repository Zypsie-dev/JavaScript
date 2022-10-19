let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	level++;
	userClickedPattern = [];

	let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
	audio.play();
	$("h1").text("Level " + level);
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 150);
}

function arraysEqual(a, b) {
	let check = 0;
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; ++i) {
		if (a[i] === b[i]) {
			check++;
		}
	}
	if (check == a.length) return true;
	else return false;
}

function checkAnswer() {
	if (arraysEqual(gamePattern, userClickedPattern)) {
		console.log("Success");
		setTimeout(function () {
			nextSequence();
		}, 1000);
	} else {
		gameOver();
		startOver();
	}
}

function gameOver() {
	let gameOverAudio = new Audio("sounds/wrong.mp3");
	$("body").delay(100).addClass("game-over");
	gameOverAudio.play();

	setTimeout(function () {
		$("body").removeClass("game-over");
	}, 200);
}

function startOver() {
	gamePattern = [];
	userClickedPattern = [];
	level = 0;
	randomNumber = 0;
	$("h1").text("Press A Key to Start");
}

$(".btn").click(function () {
	let userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	let audio = new Audio("sounds/" + userChosenColour + ".mp3");
	audio.play();
	animatePress(userChosenColour);
	if (userClickedPattern.length === level) checkAnswer();
});

$(document).keypress(function () {
	nextSequence();
});
