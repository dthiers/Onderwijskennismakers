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

	var keyword_directive = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/keyword_directive.html"
		};
	};

	var content_directive = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/content_directive.html"
		};
	};

	var register_directive = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/register_directive.html"
		};
	};

	var resource_overview_directive = function () {
		return {
			restrict: "A",
			scope: true,
			templateUrl: "partials/directives/resource_overview_directive.html",
			controller: "ResourcesCtrl"
		};
	};

	var resource_youtube_directive = function () {
		return {
			restrict: "A",
			// scope: false,
			templateUrl: "partials/directives/contentResources/youtube_directive.html",
			controller: "YoutubeCtrl"

		};
	};

	var resource_pdf_directive = function (ResourcesService) {
		return {
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/contentResources/pdf_directive.html",
			controller: "PdfCtrl"

		};
	};

	var resource_webpage_directive = function () {
		return {
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/contentResources/webpage_directive.html",
			controller: "WebpageCtrl"

		};
	};

	var resource_image_directive = function () {
		return {
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/contentResources/image_directive.html",
			controller: "ImageCtrl"

		};
	};

	var resource_details_directive = function (ResourcesService) {
		return {
			restrict: "A",
			scope: false,
			templateUrl: "partials/directives/contentResources/resource_details_directive.html",
			controller: "ResourceDetailCtrl",
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}

		};
	};

	var image_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/image_preview.html"
		};
	};

	var image_preview_create = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/image_preview_create.html",
			scope: false,
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};


	var youtube_preview = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/youtube_preview.html",
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};

	var youtube_preview_create = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/youtube_preview_create.html",
			scope: false,
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};

	var pdf_preview = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/pdf_preview.html",
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};

	var pdf_preview_create = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/pdf_preview_create.html",
			scope: false,
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};

	var text_preview = function () {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/text_preview.html"
		};
	};

	var webpage_preview = function (ResourcesService) {
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
			},
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};
	
		var webpage_preview_create = function (ResourcesService) {
		return {
			restrict: "A",
			templateUrl: "partials/directives/previews/webpage_preview_create.html",
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
			},
			link: function (scope, elem, attr) {
				scope.data = ResourcesService;
			}
		};
	};

	var image_select = function () {
		console.log('Im here from the directive');
		return {
			link: function ($scope, el) {
				el.bind("change", function (e) {

					$scope.file = (e.srcElement || e.target).files[0];
					$scope.getFile();
				})
			}
		}
	}

	app.directive('userDirective', user_directive);
	app.directive('schoolDirective', school_directive);
	app.directive('keywordDirective', keyword_directive);
	app.directive('contentDirective', content_directive);
	app.directive('registerDirective', register_directive);
	app.directive('resourceOverviewDirective', resource_overview_directive);
	app.directive('resourceYoutubeDirective', resource_youtube_directive);
	app.directive('resourcePdfDirective', resource_pdf_directive);
	app.directive('resourceImageDirective', resource_image_directive);
	app.directive('resourceWebpageDirective', resource_webpage_directive);
	app.directive('resourceDetailsDirective', resource_details_directive);
	app.directive('imagePreview', image_preview);
	app.directive('imagePreviewCreate', image_preview_create);
	app.directive('youtubePreview', youtube_preview);
	app.directive('youtubePreviewCreate', youtube_preview_create);
	app.directive('pdfPreview', pdf_preview);
	app.directive('pdfPreviewCreate', pdf_preview_create);
	app.directive('textPreview', text_preview);
	app.directive('webpagePreview', webpage_preview);
	app.directive('webpagePreviewCreate', webpage_preview_create);

	app.directive('ngFileSelect', image_select);

}
