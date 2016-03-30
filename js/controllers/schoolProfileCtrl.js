app.controller('schoolProfileCtrl', ['$scope', '$routeParams', function(sc, routeParams){

  sc.$on('$viewContentLoaded', function(event) {
    	for(var i = 0; i < 90; i++){
		$('#content-box').append('<div class="content-container color2 darken"><div class="content-header"><h4>ICT In Bedrijf</h4><img src="images/document.png"></div><div class="content-author"><p>Auteur: Patrick Duffy</p><p>Datum: 29/03/2016</p></div><div class="content-rating"><img src="images/star-filled.png" width="25" height="25"><img src="images/star-filled.png" width="25" height="25"><img src="images/star-filled.png" width="25" height="25"><img src="images/star-half-filled.png" width="25" height="25"><img src="images/star-empty.png" width="25" height="25"><p>Beoordeling</p></div></div>');
	}
  });
}]);
