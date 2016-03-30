// The start of our Angular App. Modules can be injected in the array (like ng-route)
var app = angular.module('app', ['ngRoute'])

  // This removes the templateCaching. During development this might get you into trouble
  .run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
    })
  })

  // routeProvider.
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/person/:id', {
        templateUrl: 'partials/profile.html',
        controller: 'profileCtrl'    
      })
      .when('/search_result', {
        templateUrl: 'partials/search_result.html'
      })
      .when('/web', {
        templateUrl: 'partials/web.html',
        controller: 'webCtrl'
      })
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