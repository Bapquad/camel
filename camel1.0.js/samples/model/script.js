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
	AssetMgr.QueueFile('images/dragon.png');
	AssetMgr.QueueFile('model/dragon.json');
	AssetMgr.QueueDownloadAll();
	progress();
}

function progress() 
{
	Timer = AssetMgr.getProgress();
	if(AssetMgr.isComplete()) 
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
			antialias: false	// Blur setup to false.
		}, 
		// Get Extension for Webgl
		[
			"OES_element_index_uint", 
			"WEBKIT_OES_element_index_uint", 
		], 
		// Set number of render which holded with
		4 
	);
	engine.setClearColor(23, 26, 30);
	engine.sizeFitBrowser();
	
	/**
	 * Create Projection and Camera
	 */
	var projection = new Camel.Perspective(45, engine.getWidth()/engine.getHeight(), 1, 200);
	window.onresize = function() 
	{
		engine.sizeFitBrowser();
		projection.set(45, engine.getWidth()/engine.getHeight(), 1, 200);
	};
	
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 5.0, 20.0), 
								  new Camel.Vec3(0.0, 0.0, -1.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
	
	/** Create scene */
	var scene = engine.buildScene( 
		function() 
		{
			this.dragon = this.addChild(new Camel.Model(AssetMgr.getAsset('model/dragon.json')));
			this.dragon.translateY(-6.0);
			this.dragon.translateZ(-16.0);
			this.dragon.setDiffuseMap(engine.createTexture(AssetMgr.getAsset('images/dragon.png')));
			this.dragon.onTick(function(dt) {
				this.rotateY(0.002*dt);
			});
			this.dragon.setDiffuse(25.0, 120.0, 60.0);
			
			this.addLight(new Camel.DirectLight(0.0, 0.0, 1.0));
			
			this.projection = projection;
			this.camera = camera;
		}
	);
	
	var animate = function(time) 
	{
		engine.cycle(time);
		RequestAnimationFrame(animate);
	};
	animate(0);
}