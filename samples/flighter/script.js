// JavaScript Document
var TickGID;
var RequestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame || 
							function( callback ){
								return window.setTimeout(callback, 1000 / 60);
							};
var CancelAnimationFrame = window.cancelAnimationFrame || 
							function(animId) {
								return window.clearTimeout(animId);
							};
function UnTick() {
	CancelAnimationFrame(TickGID);	
}

var AssetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json|vert|frag');
var Timer = 0;

function init() 
{
	AssetMgr.QueueFile('images/Ame.png');
	AssetMgr.QueueFile('model/model.json');
	AssetMgr.QueueDownloadAll();
	progress();
}

function progress() 
{
	Timer = AssetMgr.GetProgress();
	if(AssetMgr.IsComplete()) 
	{
		UnTick();
		Timer = setTimeout(create, 300);
		return;
	}
	TickGID = RequestAnimationFrame(progress);
}

function create() 
{
	clearTimeout(Timer);
	
	var engine = new Camel(
		"Camel",				// ID of Canvas Element.
		// Settings of WEBGL.
		{
			antialias: true	// Blur setup to false.
		}, 
		// Get Extension for Webgl
		[
			"OES_element_index_uint", 
			"WEBKIT_OES_element_index_uint", 
		], 
		// Set number of render which holded with
		4 
	);
	engine.SetClearColor(220, 220, 220);
	engine.SizeFitBrowser();
	
	/**
	 * Create Projection and Camera
	 */
	var projection = new Camel.Perspective(45, engine.GetWidth()/engine.GetHeight(), 1, 200);
	window.onresize = function() 
	{
		engine.SizeFitBrowser();
		projection.Set(45, engine.GetWidth()/engine.GetHeight(), 1, 200);
	};
	
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 5.0, 10.0), 
								  new Camel.Vec3(0.0, 0.0, 0.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
	
	/** Create scene */
	var scene = engine.BuildScene( 
		CAMEL_RENDERER_WORLD, 
		function() 
		{
			this.dragon = this.AddChild(new Camel.Model(AssetMgr.GetAsset('model/model.json')));
			this.dragon.RotateX(-3.14/2);
			this.dragon.SetDiffuseMap(engine.CreateTexture(AssetMgr.GetAsset('images/Ame.png')));
			this.dragon.onTick(function(dt) {
				this.RotateY(0.0002*dt);
			});
			this.dragon.SetDiffuse(120.0, 120.0, 150.0);
			
			this.AddLight(new Camel.DirectLight(0.0, 0.7, 1.0));
			
			this.projection = projection;
			this.camera = camera;
		}
	);
	
	var animate = function(time) 
	{
		engine.Cycle(time);
		RequestAnimationFrame(animate);
	};
	animate(0);
}