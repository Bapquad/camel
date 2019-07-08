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

CAMEL_DEVICE_MOBILE = false;

var assetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json|vert|frag');
var Timer = 0;

function init() 
{
	assetMgr.QueueFile('images/dragon.png');
	assetMgr.QueueFile('model/dragon.json');
	assetMgr.QueueDownloadAll();
	progress();
}

function progress() 
{
	Timer = assetMgr.GetProgress();
	if(assetMgr.IsComplete()) {
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
		// Set number of renderer which holded with
		4 
	);
	engine.SetClearColor(23, 26, 30);
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
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 5.0, 20.0), 
								  new Camel.Vec3(0.0, 0.0, -1.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
	
	/** create tex-render */
	var tex_scene = engine.BuildScene(
		CAMEL_RENDERER_TEXTURE, 
		function() 
		{
			this.cell = this.AddChild(new Camel.Cell(10));
			this.cell.Translate(18, -15, -20);
			this.cell.SetAlpha(20);
			this.cell.Set2Side(true);
			
			this.cell.SetDiffuseMap(engine.CreateRTT('bnv2.04', 512, 512, 1.0, 0.0, 0.0, 0.0, function() {
				scene.Pass(CAMEL_RENDERER_WORLD);
			}));

			this.cell.SetDiffuse(255, 255, 255);
			
			this.projection = projection;
			this.camera = camera;
		}
	);
	
	/** Create scene */
	var scene = engine.BuildScene(
		CAMEL_RENDERER_WORLD, 
		function() 
		{
			this.dragon = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/dragon.json')));
			this.dragon.TranslateY(-6.0);
			this.dragon.TranslateZ(-16.0);
			this.dragon.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/dragon.png')));
			this.dragon.onTick(function(dt) {
				this.RotateY(0.002*dt);
			});
			this.dragon.SetDiffuse(25.0, 20.0, 160.0);
			
			this.AddLight(new Camel.DirectLight(0.9, 0.8, 0.0));
			
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