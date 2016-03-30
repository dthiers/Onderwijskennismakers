$(document).ready(function(){
	setEqualDimensions($('.rounded_image'));
	$( window ).resize(function() {
	  setEqualDimensions($('.rounded_image'));
	});
	
})

function setEqualDimensions(elem){
	elem.height(elem.width());
}