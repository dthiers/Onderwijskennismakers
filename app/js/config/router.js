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
                        defer.resolve($localStorage.user);

                        return defer.promise;
                        //return "pennis"
                    }
                }
            })

            .state('administratiepaneel', {
                url: '/administratiepaneel',
                data: {
                    requireLogin: true
                },
                resolve: {
                    user: function($q, $localStorage){
                        var defer;
                        defer = $q.defer();
                        defer.resolve($localStorage.user);

                        return defer.promise;
                    }
                },
                views: {

                    '': { 
                        templateUrl: 'partials/admin/adminPanel.html',
                        controller: 'AdminCtrl'
                    },

                    'personalContent@administratiepaneel': {
                        templateUrl: 'partials/admin/personalContent.html',
                        controller: 'PersonalContentCtrl'
                    },

                    'keywords@administratiepaneel': {
                        templateUrl: 'partials/admin/keywords.html',
                        controller: 'KeywordsCtrl'
                    },

                    'tags@administratiepaneel': {
                        templateUrl: 'partials/admin/tags.html',
                        controller: 'TagsCtrl'
                    },

                    'profile@administratiepaneel': {
                        templateUrl: 'partials/admin/profile.html',
                        controller: 'ProfileCtrl'
                    },

                    'school@administratiepaneel': {
                        templateUrl: 'partials/admin/adminSchool.html',
                        controller: 'AdminSchoolCtrl'
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
