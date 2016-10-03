// Javascript Document.

var menuButton = '';
var topPage = '';
var mainMenu = '';
var cllLink = '';
var htmlBody = '';
var headerReady = false; 

solution5.SetMutationEvent( document, function( e ) 
{
	element5.includeHtml( e.target ); 
});

function header() 
{
	mainMenu = element5( '#mainmenu' ); 
	topPage = element5( '#top' ); 
	pageToTop = element5( '#cll' ); 
	
	menuButton = element5( '#menu-btn' ); 
	
	menuButton.addEventListener( 'click', function( e ) 
	{
		mainMenu.Toggle();
	}, false); 

	if( window.innerWidth < 960 ) 
	{
		mainMenu.AddClass( 'hidden' ); 
	} 

	pageToTop.addEventListener( 'click', function() 
	{
		element5.body.scrollToY( 0, 50 );
	}, false);
};

window.addEventListener( 'resize', function( e ) 
{
	if( window.innerWidth > 960 ) 
	{
		mainMenu.Show();
	} 
	else 
	{
		mainMenu.Hide();
	}
}, false ); 

window.addEventListener( 'load', function( e ) 
{
	element5.body = element5.GetBody();
	wrapper = element5( '#wrapper' );
	
	if( headerReady ) 
	{
		header();
	}
		
}, false );

// $( document ).ready( function() { w3IncludeHTML( function() {
	
	// menuBtn = $("#menu-btn");
	// headerNav = element5("#mainmenu");
	// cllLink = $("#cll");
	// htmlBody = $("html, body");
	
	// menuBtn.click(function() {
		// headerNav.toggle();
	// });
	
	// cllLink.click(function() {
		// htmlBody.animate({scrollTop: 0});
		// if(window.innerWidth <= 959) 
		// {
			// headerNav.toggle();	
		// }
	// });
	
// } );} );