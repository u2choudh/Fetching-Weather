var request = require('request');



module.exports = function(location, callback) {
	var encodedURI = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=7f1d095e7fd119ac7a3f8f8bc1a7a134&q=' + encodedURI + '&units=imperial';

	if (!location) {
		return callback('no location given');
	}
	request({
		url: url,
		json: true
	}, function (error, response, body){
		if (error){
		callback('Unable to get weather')
		} else{
			callback('It\'s ' + body.main.temp + ' in ' + body.name);
		} 
	});
}