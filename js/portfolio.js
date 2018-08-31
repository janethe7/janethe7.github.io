'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function()) {
	initializePage();
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
	$(".img-thumbnail").click(projectClick);
}

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#20415f")
	$(this).parent().next().toggle();
}

$(".img-thumbnail").click(projectClick);

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#000000")
	console.log("It worked!")
}
