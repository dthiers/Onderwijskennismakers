app.controller('schoolProfileCtrl', ['$scope', '$routeParams', function(sc, routeParams){

  sc.$on('$viewContentLoaded', function(event) {
    	for(var i = 0; i < 90; i++){
    		var desc = '';
    		desc += '<div class="content-container color2 darken">';
    		desc += '<div class="content-header"><h4>ICT In Bedrijf</h4>';
    		desc += '<div class="content-rating">';
    		desc += '<img src="images/star-filled.png" width="20" height="20"><img src="images/star-filled.png" width="20" height="20"><img src="images/star-filled.png" width="20" height="20"><img src="images/star-half-filled.png" width="20" height="20"><img src="images/star-empty.png" width="20" height="20">';
    		desc += '</div><img src="images/document.png"></div>';
    		desc += '<div class="short_description">Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.</div><div class="content-author"><p>Auteur: Patrick Duffy</p><p>Datum: 29/03/2016</p></div></div>';

		$('#content-box').append(desc);
	}
  });
}]);
