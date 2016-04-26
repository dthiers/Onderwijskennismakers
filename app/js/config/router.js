module.exports = function (app) {
    
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('dashboard', {
                url: '/',
                views: {

                    '': { templateUrl: '../partials/home.html'},

                    'profile@dashboard': {
                        templateUrl: '../partials/profile/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'dashboard@dashboard': {
                        templateUrl: '../partials/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            })


    });
}
