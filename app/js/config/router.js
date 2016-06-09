module.exports = function (app) {

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //$urlRouterProvider.otherwise('/login');

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    requireLogin: true
                },
                resolve: {
                    user: function($q, $localStorage){
                        var defer;

                        defer = $q.defer();

                        console.log($localStorage.user)

                        defer.resolve($localStorage.user);

                        return defer.promise;
                        //return "pennis"
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login/full-login.html',
                controller: 'LoginCtrl'
                // data: {
                //     requireLogin: false
                // }
            })
            .state('logout', {
                url: '/logout',
                controller: function($localStorage, $state){
                    delete $localStorage.user;

                    $state.go('login');
                }
            })
            .state("otherwise", {
                url: "*path",
                controller: function($timeout, $state){
                    $state.go('login');
                }
            })

            // .state('register', {
            //     url: '/register',
            //     views: {

            //         '': { templateUrl: '../partials/home.html' },

            //         'dashboard@register': {
            //             templateUrl: '../partials/dashboard/dashboard.html',
            //             controller: 'DashboardCtrl'
            //         },
            //         'register@register': {
            //             templateUrl: '../partials/login/register.html',
            //             controller: 'RegisterCtrl'
            //         }
            //     }
            // })

            // .state('login', {
            //     url: '/login',
            //     views: {

            //         '': { templateUrl: '../partials/home.html' },

            //         'dashboard@login': {
            //             templateUrl: '../partials/dashboard/dashboard.html',
            //             controller: 'DashboardCtrl'
            //         },
            //         'login@login': {
            //             templateUrl: '../partials/login/login.html',
            //             controller: 'LoginCtrl'
            //         }
            //     }
            // })


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
