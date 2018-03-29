//console.log("starting weather")
var getWeather= function (message, callback){
	var request = require("request");
	request({
		url : `https://api.darksky.net/forecast/9933748dc1ade06f01025c05fd134f5c/${message.latitude},${message.longitude}`,
		json : true
	},(error,response,body) => {
		//console.log(response.statusCode)
		if(response.statusCode == 404)
			callback("Some error occured. Unable to retireve the weather details");
		else if(response.statusCode == 200)
			callback(undefined,{
				currentTemp : body.currently.apparentTemperature
			});	
	});
};
	

module.exports.getWeather = getWeather;

