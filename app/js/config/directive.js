module.exports = function (app) {

	var user_directive = function(){
		return{
			restrict: "A",
			templateUrl: "partials/directives/user_directive.html"
		};
	};

	var school_directive = function(){
		return{
			restrict: "A",
			templateUrl: "partials/directives/school_directive.html"
		};
	};

	var resource_overview_directive = function(){
		return{
			restrict: "A",
			templateUrl: "partials/directives/resource_overview_directive.html",
			controller: "ResourcesCtrl"
		};
	};

	var resource_youtube_directive = function(){
		return{
			restrict: "A",
			templateUrl: "partials/directives/resources/youtube_directive.html",
			controller: "ResourcesCtrl"
		};
	};

	app.directive('userDirective', user_directive);
	app.directive('schoolDirective', school_directive);
	app.directive('resourceOverviewDirective', resource_overview_directive);
	app.directive('resourceYoutubeDirective', resource_youtube_directive);
}
