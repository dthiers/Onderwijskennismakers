module.exports = function (app) {
    console.log('Word ik gerequired');
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: '../partials/dashboard.html',
                controller: 'DashboardCtrl'
            })
    });
}
