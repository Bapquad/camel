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

var AssetMgr;
var TimeWait;

function init() 
{
	AssetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json|vert|frag');
	AssetMgr.QueueFile('images/texture.png');
	AssetMgr.QueueFile('images/dragon.png');
	AssetMgr.QueueFile('model/dragon.json');
	AssetMgr.QueueDownloadAll();
	progress();
}

function progress() 
{
	TimeWait = AssetMgr.getProgress();
	if(AssetMgr.isComplete()) {
		UnTick();
		TimeWait = setTimeout(create, 300);
		return;
	}
	TickGID = RequestAnimationFrame(progress);
}

function create() 
{
	clearTimeout(TimeWait);
	
	var modelMatrix, planeMatrix; 
	
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
		// Set number of scene which holded with
		3 
	);
	engine.setClearColor(23, 26, 30);
	
	/**
	 * Create Projection and Camera
	 */
	var projection;
	window.onresize = function() 
	{
		engine.sizeFitBrowser();
		if(projection == UNSET) 
			projection = new Camel.Perspective(45, engine.getWidth()/engine.getHeight(), 1, 200);
		else 
			projection.set(45, engine.getWidth()/engine.getHeight(), 1, 200);
	};
	window.onresize();
	
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 5.0, 20.0), 
								  new Camel.Vec3(0.0, 0.0, -1.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
	
	/** create tex-render */
	var tex_scene = engine.buildScene(
		CAMEL_RENDERER_TEXTURE, 
		function() {
			this.cell = this.addChild(new Camel.Cell(10));
			this.cell.createCell(10);
			this.cell.translate(38, 18, -80);
			this.cell.setAlpha(20);
			this.cell.set2Side(true);
			
			this.cell.setDiffuseMap(engine.createRTT('bnv2.04', 512, 512, 1.0, 0.0, 0.0, 0.0, function() {
				scene.pass(CAMEL_RENDERER_WORLD);
			}));
			
			this.projection = projection;
			this.camera = camera;
		}
	);
	
	/** Create scene */
	var scene = engine.buildScene(
		function() {
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