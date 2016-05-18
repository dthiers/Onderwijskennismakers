module.exports = function ($scope) {
	loggedin = function() {
		IN.Event.on(IN, "auth", onLinkedInAuth);
	}
	
	onLinkedInAuth = function() {
		console.log(IN.API.Raw('/people/~:(id,current-share,headline,maiden-name,specialties,positions,site-standard-profile-request,num-connections,summary,industry,location,public-profile-url,first-name,last-name)?format=json').method("GET").body('').result(call));
	}
	
	call = function(c) {
		console.log(c);
	}

};