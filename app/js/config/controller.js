module.exports = function (app) {
	app.controller('DashboardCtrl', require('../controllers/dashboardCtrl'));
	app.controller('MenuCtrl', require('../controllers/menuCtrl'));
	app.controller('LoginCtrl', require('../controllers/loginCtrl'));
}
