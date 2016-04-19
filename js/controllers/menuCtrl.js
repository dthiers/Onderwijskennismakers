app.controller('menuCtrl', ['$scope', '$routeParams', function(sc, routeParams){
  sc.items = [
        {"title":"Zoeken", "url":"search"},
        {"title":"School toevoegen", "url":""},
        {"title":"Content aanmaken", "url":""},
        {"title":"Contact opnemen", "url":""},
        {"title":"Mijn updates", "url":""}
    ];
}]);