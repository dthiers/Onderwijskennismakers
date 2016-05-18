module.exports = function (app) {

	var user_directive = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/user_directive.html"
		};
	};

	var school_directive = function () {
		return {
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

	var image_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/image_preview.html"
		};
	};

	var youtube_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/youtube_preview.html"
		};
	};

	var pdf_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/pdf_preview.html"
		};
	};

	var text_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/text_preview.html"
		};
	};

	var webpage_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/webpage_preview.html",
			controller: function ($scope) {

				$(window).on('load', function () {
					// blur the iframe
					document.getElementById("frame").blur();
					// set focus on #foo
					$(".btn_addDocument").focus();
					// when iframe tries to focus, focus #foo
					$(".btn_addDocument").onblur = function () {
						this.focus();
					};
					// setInterval(function () { $(".btn_addDocument").focus() }, 100);
				})
			}
		};
	};

	var keyword_directive = function () {
		return {
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
	app.directive('imagePreview', image_preview);
	app.directive('youtubePreview', youtube_preview);
	app.directive('pdfPreview', pdf_preview);
	app.directive('textPreview', text_preview);
	app.directive('webpagePreview', webpage_preview);
	app.directive('keywordDirective', keyword_directive);

}
