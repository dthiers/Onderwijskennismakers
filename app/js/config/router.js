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

            .state('login', {
                url: '/login',
                views: {

                    '': { templateUrl: '../partials/home.html'},

                    'profile@login': {
                        templateUrl: '../partials/profile/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'dashboard@login': {
                        templateUrl: '../partials/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    },
                    'login@login': {
                        templateUrl: '../partials/login/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })


    });
}
