// The start of our Angular App. Modules can be injected in the array (like ng-route)
var app = angular.module('app', ['ngRoute','ngVis'])

  // This removes the templateCaching. During development this might get you into trouble
  .run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
    })
  })

  // routeProvider.
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      // Web routes
      .when('/', {
        templateUrl: 'partials/web.html',
        controller: 'webCtrl'
      })
      // Profile routes
      .when('/person/:id', {
        templateUrl: 'partials/profile.html',
        controller: 'profileCtrl'    
      })
      .when('/school_overview', {
        templateUrl: 'partials/school_overview.html',
        controller: 'schoolProfileCtrl'    
      })
      // Search routes
      .when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'searchCtrl'
      })
      .when('/search_result', {
        templateUrl: 'partials/search_result.html'
      })
      // menu route
      .when('/menu', {
        templateUrl: 'partials/menusample.html',
        controller: 'menuCtrl.js'
      })

      // Unused routes      
      .when('/news', {
        templateUrl: 'partials/news.html',
        controller: 'newsCtrl',
        resolve: {
          newsItem: function(){
            // This way you can send certain values to a new controller
            return "This is a news item produced by the resolve";
          }
        }
      })
  })