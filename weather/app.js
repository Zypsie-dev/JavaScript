const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	const city = req.body.cityName;
	const apiKey = "16182aa295be516d504608ce0ea3d3c0";
	const unit = "metric";
	const url =
		"https://api.openweathermap.org/data/2.5/weather?units=" +
		unit +
		"&q=" +
		city +
		"&appid=" +
		apiKey;
	https.get(url, (response) => {
		console.log(response.statusCode);

		response.on("data", (data) => {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const description = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

			res.write("<h1>" + city + "</h1>");
			res.write("<h2>The current weather is " + description + "</h2>");
			res.write("<h2>Current Temperature is " + temp + " degree celsuis.</h2>");
			res.write("<img src =" + imageUrl + ">");
			res.send();
		});
	});
});

app.listen(3000, () => {
	console.log("Server started!!");
});
