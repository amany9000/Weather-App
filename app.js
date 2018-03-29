console.log("Starting weather app");
var yargs = require("yargs");
var geocode = require("./geocode.js");
var weather = require("./weather.js")
var request = require("request");
var argv = yargs
	.options({
		a:{
			demand : true,
			description : "strores address",
			alias : "address",
			string : true
		}
	})
	.help()
	.alias("help" , "h")
	.argv;
	//console.log(encodeURIComponent(argv.address))
	geocode.geo(argv.address, (error,message) => {
		if(error)
			console.log( error);
		else{
			weather.getWeather(message,(error,Message) => {
				//console.log(Message)
				if(error)
					console.log(error);
				else
					console.log("location: " ,message.address,"\nCurrent Apparent Temperature : ",Message.currentTemp)
			});
		}
		
	});

	
