module.exports = function (app) {
    console.log('Word ik gerequired');
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('');

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('web', {
                url: '/',
                templateUrl: '../partials/web.html',
                controller: 'WebCtrl'
            })
            .state('personProfile', {
                url: '/person/:id',
                templateUrl: '../partials/profile.html',
                controller: 'ProfileCtrl'
            })
            .state('school', {
                url: '/school/:id',
                templateUrl: '../partials/school_overview.html',
                controller: 'SchoolProfileCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: '../partials/search.html',
                controller: 'SearchCtrl'
            })
            .state('searchResult', {
                url: '/search_result',
                templateUrl: '../partials/search_result.html'
            })
    });
}
