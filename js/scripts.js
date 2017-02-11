$(function() {
	$("h1, h2").click(function() {
  	alert("This is a header.");
	});

	$("p").click(function() {
	  alert("This is a paragraph.")
	});

	$("img").click(function() {
	  alert("This is an image.");
	});

	$(".clickable").click(function() {
	  $(".walrus-showing").toggle();
	  $(".walrus-hidden").toggle();
	});
});