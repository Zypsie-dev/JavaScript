let randomnum = Math.floor(Math.random() * 6 + 1);

let randomimage = "images/dice" + randomnum + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimage);

let randomnum2 = Math.floor(Math.random() * 6 + 1);
let randomimage2 = "images/dice" + randomnum2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimage2);

if (randomnum > randomnum2) {
	document.getElementById("result").innerHTML = "Player 1 won";
} else if (randomnum2 > randomnum) {
	document.getElementById("result").innerHTML = "Player 2 won";
} else {
	document.getElementById("result").innerHTML = "Refresh Again";
}
