require('angular/angular');
require('ng-storage/ngStorage.min');
require('angular-ui-router/release/angular-ui-router');
require('angular-modal-service');

// Create your app
var app = angular.module('app', ['ui.router', 'ngStorage', 'ngVis', 'angularModalService']);

// Include jQuery
global.$ = require('jquery');

// Include Routing
require('./config/router.js')(app)

// Include Routing
require('./config/directive.js')(app)

// Include Config
require('./config/config.js')(app);

// Include Constants
require('./constant/constant.js')(app);

// Include all Controllers
require('./config/controller.js')(app);

// Include all Services
require('./config/service.js')(app);