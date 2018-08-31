'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
<<<<<<< HEAD
	$(".img-thumbnail").click(projectClick);
}

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#20415f")
	$(this).parent().next().toggle();
=======
}

$(".img-thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#000000")
>>>>>>> c9e8e79803c73ac6d4d88c5e2eb4f0c417ba3155
	console.log("It worked!")
}
