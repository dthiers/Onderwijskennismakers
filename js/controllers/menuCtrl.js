app.controller('menuCtrl', ['$scope', '$routeParams', function(sc, routeParams){
  sc.items = [
        {"title":"Zoeken", "url":"search", "inuse": true},
        {"title":"School toevoegen", "url":"", "inuse": true},
        {"title":"Content aanmaken", "url":"", "inuse": true},
        {"title":"Contact opnemen", "url":"", "inuse": false},
        {"title":"Mijn updates", "url":"", "inuse": true}
    ];
}]);