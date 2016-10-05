// Javascript Document.

var menuButton = 0;
var topPage = 0;
var mainMenu = 0;
var cllLink = 0;
var htmlBody = 0;
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
