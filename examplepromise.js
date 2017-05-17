function getWeather(location){
	return new Promise(function (resolve,reject){
		resolve('It\'s sunny in ' + location + ' philadelphia');
	});
}

function getLocation(location){
	return new Promise(function (resolve,reject){
		resolve(location);
	})
}

getLocation('Prague').then(function (location){
	return getWeather(location);
}).then(function(message){
	console.log(message);
})