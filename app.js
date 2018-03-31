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

	geocode.geo(argv.address, (error,message) => {
		if(error)
			console.log( error);
		else{
			weather.getWeather(message,(error,Message) => {
				//console.log(Message)
				if(error)
					console.log(error);
				else
					console.log(sprintf("%-25s","location:"),message.address);
					console.log(sprintf("%-25s","Current Temperature :"),Message.currentTemp);
					console.log(sprintf("%-25s","Precipitation:"), Message.precipitation);
					console.log(sprintf("%-25s","Humdity :"), Message.humidity);
					console.log(sprintf("%-25s","Wind Speed :"),Message.wind);
					console.log(sprintf("%-25s","Visibility :"), Message.visibility);
			});
		}
		
	});

	
