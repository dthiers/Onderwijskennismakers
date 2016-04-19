app.controller('menuCtrl', ['$scope', '$routeParams', function(sc, routeParams){
  sc.items = [
        {"title":"Zoeken"},
        {"title":"School toevoegen"},
        {"title":"Content aanmaken"},
        {"title":"Contact opnemen"},
        {"title":"Mijn updates"}
    ];
}]);