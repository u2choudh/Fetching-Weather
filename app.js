
var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.option('location', {
		alias: 'l',
		describe: 'Location to get weather for',
		type: 'string'
	})
	.argv;

// weather(function (callback) {
// 	console.log(callback);
// });

// location(function(location){
// 	console.log('Your location is ' + location.city);
// 	console.log('Your coordinates are ' + location.loc);
// });

if(typeof argv.l === 'string' && argv.l.length > 0){
	weather(argv.l, function(currentWeather){
		console.log(currentWeather);
	});
} else{
	console.log('No location given');
	location(function (location){
		if(location){
			weather(location.city, function(currentWeather){
				console.log(currentWeather);
			})
		} else{
			console.log('Cannot Fetch location');
		}
	})
}
