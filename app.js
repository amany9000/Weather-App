console.log("Starting weather app");
var yargs = require("yargs");
var sprintf=require("sprintf-js").sprintf;
var axios = require("axios");
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


var add = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(argv.address);	

axios.get(add).then((response) => {
	if(response.data.status == 'ZERO_RESULTS')
		throw new Error('Unable to find that location');
	else if(response.data.results[0] == undefined)
		throw new Error('Limit exceeded for this location, try after sometime.');
	add = response.data.results[0].formatted_address;
	latitude = response.data.results[0].geometry.location.lat;
	longitude = response.data.results[0].geometry.location.lng;	
	
	console.log(sprintf("%-25s","location:"),add);
	url = `https://api.darksky.net/forecast/9933748dc1ade06f01025c05fd134f5c/${latitude},${longitude}`;
	return axios.get(url);
	}).then((Response) => {	
		message = Response.data.currently;
		console.log(sprintf("%-25s","Current Temperature :"),message.apparentTemperature ,sprintf("%cF or",176), Math.round(((message.apparentTemperature - 32)*5)/9), sprintf("%cC",176));
		console.log(sprintf("%-25s","Precipitation:"), message.precipIntensity);
		console.log(sprintf("%-25s","Humdity :"), message.humidity);
		console.log(sprintf("%-25s","Wind Speed :"),message.windSpeed);
		console.log(sprintf("%-25s","Visibility :"), message.visibility);
}).catch((error) =>{
	if(error.code == "ENOTFOUND" || error.code == "EAI_AGAIN")
		console.log("Unable to connect to API servers.");
	else
		console.log(error.message)
});
		

	
