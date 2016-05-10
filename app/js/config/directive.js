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

	app.directive('userDirective', user_directive);
	app.directive('schoolDirective', school_directive);
	app.directive('imagePreview', image_preview);
}