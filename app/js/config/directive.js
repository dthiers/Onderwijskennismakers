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
	app.directive('imagePreview', image_preview);
	app.directive('youtubePreview', youtube_preview);
	app.directive('pdfPreview', pdf_preview);
	app.directive('textPreview', text_preview);
	app.directive('webpagePreview', webpage_preview);
	app.directive('keywordDirective', keyword_directive);

}