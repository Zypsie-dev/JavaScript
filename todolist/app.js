const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	let today = new Date();
	let currentDay = today.getDay();
	const daylist = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	day = daylist[currentDay];
	res.render("index", { kindOfDay: day });
});

app.listen(3000, () => {
	console.log("App is listening at port 3000");
});
