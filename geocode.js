var request = require("request");
var geo = function (address){
	return new Promise((resolve,reject) => {
		var add = encodeURIComponent(address);
		request ({
		url : "https://maps.googleapis.com/maps/api/geocode/json?address=" + add,
		json : true
	}, (error, response, body) => {
		if(error){
			reject("Unable to connect to the GOOGLE SERVERS");
		}
		else if(body.status == "ZERO_RESULTS"){
			reject("Unable to find that address");
		}
		else if(body.status == "OK"){
			resolve({
			 	address :  body.results[0].formatted_address,
				latitude :  body.results[0].geometry.location.lat,
				longitude :  body.results[0].geometry.location.lng
				});
			};
		});
	})
}	

module.exports.geo = geo;