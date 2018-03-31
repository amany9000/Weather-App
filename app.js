console.log("Starting weather app");
var yargs = require("yargs");
var geocode = require("./geocode.js");
var weather = require("./weather.js")
var request = require("request");
var sprintf=require("sprintf-js").sprintf;
var argv = yargs
	.options({
		a:{
			description : "strores address",
			alias : "address",
			string : true
		}
	})
	.help()
	.alias("help" , "h")
	.argv;
	if(argv.address== "" || argv.address == undefined){
		argv.address = 382007
		console.log("Address not provided. Using default address.")
	}

geocode.geo(argv.address).then((location) => {
	console.log(sprintf("%-25s","location:"),location.address);
	return weather.getWeather(location);
	}).then((message) => {	
		console.log(sprintf("%-25s","Current Temperature :"),message.currentTemp ,sprintf("%cF or",176), Math.round(((message.currentTemp - 32)*5)/9), sprintf("%cC",176));
		console.log(sprintf("%-25s","Precipitation:"), message.precipitation);
		console.log(sprintf("%-25s","Humdity :"), message.humidity);
		console.log(sprintf("%-25s","Wind Speed :"),message.wind);
		console.log(sprintf("%-25s","Visibility :"), message.visibility);
}).catch((errorMessage) =>{
	console.log(errorMessage);
});
		

	
