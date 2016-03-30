var selectedRatingIndex = 0;

$ ( document ).ready(function() {
	resizeProfilePicture();
});

$( window ).resize(function() {
	resizeProfilePicture();
});

$( '.profile-sidebar-rating-icon' ).click(function() { 
	selectedRatingIndex = $(this).attr('index');
});

$( '.profile-sidebar-rating-icon' ).hover(function() {
	alert('a');
	highlightRatings($(this).attr('index'));
}, function() {
	if(selectedRatingIndex == 0) {
		highlightRatings(0);
	} else {
		highlightRatings(selectedRatingIndex); 
	}
});

function resizeProfilePicture() {
	var width = $( '.profile-sidebar-picture' ).width();

	$( '.profile-sidebar-picture' ).height(width);
	$( '.profile-sidebar-picture img' ).height(width);
}

function highlightRatings(index) {
	$( '.profile-sidebar-rating-icons > img' ).each(function() {
		if($(this).attr('index') <= index) {
			$(this).attr('src', 'img/rating_highlight.png');
		} else {
			$(this).attr('src', 'img/rating.png');
		}
	});
}