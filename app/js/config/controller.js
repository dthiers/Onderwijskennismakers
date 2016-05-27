module.exports = function (app) {
	app.controller('DashboardCtrl', require('../controllers/dashboardCtrl'));
	app.controller('MenuCtrl', require('../controllers/menuCtrl'));
	app.controller('LoginCtrl', require('../controllers/loginCtrl'));
	app.controller('RegisterCtrl', require('../controllers/registerCtrl'));
	/**
	* Resources
	**/
	app.controller('ResourcesCtrl', require('../controllers/resources/resourcesCtrl'));
	app.controller('PdfCtrl', require('../controllers/resources/pdfCtrl'));
	app.controller('YoutubeCtrl', require('../controllers/resources/youtubeCtrl'));
	app.controller('ImageCtrl', require('../controllers/resources/imageCtrl'));
	app.controller('WebpageCtrl', require('../controllers/resources/webpageCtrl'));
	app.controller('ResourceDetailCtrl', require('../controllers/resources/resourceDetailCtrl'));
	/**
	* Resources
	**/
}
