module.exports = function (app) {
	app.controller('DashboardCtrl', require('../controllers/dashboardCtrl'));
	app.controller('MenuCtrl', require('../controllers/menuCtrl'));
	app.controller('LoginCtrl', require('../controllers/loginCtrl'));

	/**
	* Admin
	**/
	app.controller('AdminCtrl', require('../controllers/admin/adminCtrl'));
	app.controller('PersonalContentCtrl', require('../controllers/admin/personalContentCtrl'));
	app.controller('KeywordsCtrl', require('../controllers/admin/keywordsCtrl'));
	app.controller('TagsCtrl', require('../controllers/admin/tagsCtrl'));
	app.controller('ProfileCtrl', require('../controllers/admin/profileCtrl'));
	app.controller('AdminSchoolCtrl', require('../controllers/admin/adminSchoolCtrl'));

	/**
	* Resources
	**/
	app.controller('ResourcesCtrl', require('../controllers/contentResources/resourcesCtrl'));
	app.controller('PdfCtrl', require('../controllers/contentResources/pdfCtrl'));
	app.controller('YoutubeCtrl', require('../controllers/contentResources/youtubeCtrl'));
	app.controller('ImageCtrl', require('../controllers/contentResources/imageCtrl'));
	app.controller('WebpageCtrl', require('../controllers/contentResources/webpageCtrl'));
	app.controller('ResourceDetailCtrl', require('../controllers/contentResources/resourceDetailCtrl'));
	app.controller('TagsCtrlResources', require('../controllers/admin/BACKUP_tagsCtrl'));
}
