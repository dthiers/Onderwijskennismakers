module.exports = function (app) {
	app.controller('DashboardCtrl', require('../controllers/dashboardCtrl'));
	app.controller('MenuCtrl', require('../controllers/menuCtrl'));
	app.controller('LoginCtrl', require('../controllers/loginCtrl'));
	//app.controller('RegisterCtrl', require('../controllers/registerCtrl'));
	/**
	* Resources
	**/
	app.controller('ResourcesCtrl', require('../controllers/contentResources/resourcesCtrl'));
	app.controller('PdfCtrl', require('../controllers/contentResources/pdfCtrl'));
	app.controller('YoutubeCtrl', require('../controllers/contentResources/youtubeCtrl'));
	app.controller('ImageCtrl', require('../controllers/contentResources/imageCtrl'));
	app.controller('WebpageCtrl', require('../controllers/contentResources/webpageCtrl'));
	app.controller('ResourceDetailCtrl', require('../controllers/contentResources/resourceDetailCtrl'));

	app.controller('TagsCtrl', require('../controllers/tagsCtrl'));
	/**
	* Resources
	**/
}
