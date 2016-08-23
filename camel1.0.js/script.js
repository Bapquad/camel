// Javascript Document.

var menuBtn = "";
var headerNav = "";
var cllLink = "";
var htmlBody = "";

$(window).resize(function() {
	
	if(window.innerWidth >= 960) 
	{
		headerNav.show();
	}
	
});

$( document ).ready( function() { w3IncludeHTML( function() {
	
	menuBtn = $("#menu-btn");
	headerNav = $("header nav");
	cllLink = $("#cll");
	htmlBody = $("html, body");
	
	menuBtn.click(function() {
		headerNav.toggle();
	});
	
	cllLink.click(function() {
		htmlBody.animate({scrollTop: 0});
		if(window.innerWidth <= 959) 
		{
			headerNav.toggle();	
		}
	});
	
} );} );