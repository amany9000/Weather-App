//console.log("starting weather")
var request = require("request");
var getWeather= function (message){
	return new Promise((resolve,reject) => {
		request({
			url : `https://api.darksky.net/forecast/9933748dc1ade06f01025c05fd134f5c/${message.latitude},${message.longitude}`,
			json : true
		},(error,response,body) => {
			if(response == undefined || response.statusCode == 404)
				reject("Some error occured. Unable to retireve the weather details");
			else if(response.statusCode == 200)
				resolve({
					currentTemp : body.currently.apparentTemperature,
					precipitation : body.currently.precipIntensity,
					humidity     : body.currently.humidity,
					visibility   : body.currently.visibility,
					wind         : body.currently.windSpeed 
				});	
		});
	});
};
	

module.exports.getWeather = getWeather;

