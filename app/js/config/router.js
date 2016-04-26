module.exports = function (app) {
    
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '../partials/dashboard/dashboard',
                controller: 'DashboardCtrl'
            })


           // .state('dashboard.profile', {
           //      url: '/profile',
           //      templateUrl: '../partials/profile/profile',
           //      controller: 'ProfileCtrl'
           //  }) 
           // .state('dashboard.school', {
           //      url: '/school',
           //      templateUrl: '../partials/school/school',
           //      controller: 'SchoolCtrl'
           // })


           // .state('dashboard.profile', {
            //     url: '/profile',
            //     views: {

            //         '': { templateUrl: '../partials/profile_view.html'},

            //         'profile@dashboard': {
            //             templateUrl: '../partials/profile/profile.html',
            //             controller: 'ProfileCtrl'
            //         },
            //         'dashboard@dashboard': {
            //             templateUrl: '../partials/dashboard/dashboard.html',
            //             controller: 'DashboardCtrl'
            //         }
            //     }
            // })


    });
}
