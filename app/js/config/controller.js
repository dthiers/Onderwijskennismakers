module.exports = function (app) {
	app.controller('DashboardCtrl', require('../controllers/dashboardCtrl'));
	app.controller('ProfileCtrl', require('../controllers/profileCtrl'));
	app.controller('MenuCtrl', require('../controllers/menuCtrl'));
	app.controller('SchoolCtrl', require('../controllers/schoolCtrl'));
}
