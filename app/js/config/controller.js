module.exports = function (app) {
    app.controller('NewsCtrl', require('../controllers/newsCtrl'));
    app.controller('ProfileCtrl', require('../controllers/profileCtrl'));
    app.controller('SchoolProfileCtrl', require('../controllers/schoolProfileCtrl'));
    app.controller('SearchCtrl', require('../controllers/searchCtrl'));
    app.controller('WebCtrl', require('../controllers/webCtrl'));
}
