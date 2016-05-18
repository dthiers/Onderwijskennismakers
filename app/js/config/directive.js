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
			scope: true,
			templateUrl: "partials/directives/resource_overview_directive.html",
			controller: "ResourcesCtrl"
		};
	};

	var resource_youtube_directive = function(){
		return{
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/resources/youtube_directive.html",
			controller: "ResourcesCtrl"

		};
	};

	var resource_pdf_directive = function(){
		return{
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/resources/pdf_directive.html",
			controller: "ResourcesCtrl"

		};
	};

	var resource_website_directive = function(){
		return{
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/resources/website_directive.html",
			controller: "ResourcesCtrl"

		};
	};

  var resource_image_directive = function(){
		return{
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/resources/image_directive.html",
			controller: "ResourcesCtrl"

		};
	};

  var resource_details_directive = function(){
		return{
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/resources/resource_details_directive.html",
			controller: "ResourcesCtrl"

		};
	};

	var keyword_directive = function(){
		return{
			restrict: "A",
			templateUrl: "partials/directives/keyword_directive.html"
		};
	};

	app.directive('userDirective', user_directive);
	app.directive('schoolDirective', school_directive);
	app.directive('resourceOverviewDirective', resource_overview_directive);
	app.directive('resourceYoutubeDirective', resource_youtube_directive);
	app.directive('resourcePdfDirective', resource_pdf_directive);
  	app.directive('resourceImageDirective', resource_image_directive);
	app.directive('resourceWebsiteDirective', resource_website_directive);
  	app.directive('resourceDetailsDirective', resource_details_directive);
	app.directive('keywordDirective', keyword_directive);
}
