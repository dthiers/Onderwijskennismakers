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
			templateUrl: "partials/directives/previews/webpage_preview.html"
		};
	};

	app.directive('userDirective', user_directive);
	app.directive('schoolDirective', school_directive);
	app.directive('imagePreview', image_preview);
	app.directive('youtubePreview', youtube_preview);
	app.directive('pdfPreview', pdf_preview);
	app.directive('textPreview', text_preview);
	app.directive('webpagePreview', webpage_preview);
}