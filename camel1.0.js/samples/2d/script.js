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

/** Initialize the assetManager */
var assetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json|vert|frag');

/** Initialize the game timer */
var Timer = 0;
/** Initialize the level timer */
var levelTime = 0;

/** Initialize the game */
function init() 
{
    /** Queue the files into the asset manager */
    assetMgr.QueueFile('images/texture.png');
	assetMgr.QueueFile('images/bubble.png');
	assetMgr.QueueFile('images/fish1.png');
    assetMgr.QueueFile('images/fish2.png');
	
    /** Start to download all into asset list*/
    assetMgr.QueueDownloadAll();
    
    /** Begin session of the game */
    progress();
}

function progress() 
{
    /** Count the complete steps */
    Timer = assetMgr.getProgress();
    
    /** When the progress of download finish */
    if(assetMgr.isComplete()) 
    {
        UnTick();               // Escape the progress.
        Timer = setTimeout(create, 300);   // Move to the create level.
        return;
    }
    TickGID = RequestAnimationFrame(progress);
}

function create() 
{
    if(Timer)
        clearTimeout(Timer);
    
    /** Create the gamr engine */
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
    /** Set up the clear color. */
	engine.setClearColor(23, 26, 30);
    /** Set up the size so it fit the zise of the browser. */
    engine.sizeFitBrowser();
    
    /** Create the perspective of the game's scenes. */
    var ortho = new Camel.Orthographic(0, 0, engine.getWidth(), engine.getHeight(), 1, 200);
	window.onresize = function() 
	{
		engine.sizeFitBrowser();
		ortho.set(0, 0, engine.getWidth(), engine.getHeight(), 1, 200);
	};
    
    /** Create the camera for game. */
    var camera = new Camel.Camera(new Camel.Vec3(0.0, 0.0, 0.0), 
								  new Camel.Vec3(0.0, 0.0, 0.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
								  
	/** Build scene for game */
	var scene = engine.buildScene(
		CAMEL_RENDERER_CAREM, 
		function() 
		{
			this.cell = this.addChild(new Camel.Cell(1));
			this.cell.scale(100, 55, 1);
			this.cell.translate(100, 55, 0);
			this.cell.translate(0, 60, 0);
			this.cell.rotateY(Math.PI);
			this.cell.maskart = new Camel.Vec4();
			this.cell.setAlpha(50);
			this.cell.set2Side(true);
			this.cell.setDiffuseMap(engine.getTexture(assetMgr.getAsset('images/fish1.png')));
			this.cell.onTick(function(dt) {
				this.maskart.setVector(198/assetMgr.getAsset('images/fish1.png').Asset.width, 114/assetMgr.getAsset('images/fish1.png').Asset.height, parseFloat(Math.round(levelTime*0.01)%3), 1.0);
				this.translateX(dt*0.1);
			});

			this.projection = ortho;
			this.camera = camera;
		}
	);
	
	/** Game Cycle */
	var animate = function(time) 
	{
		levelTime = time;
		engine.cycle(time);
		RequestAnimationFrame(animate);
	};
	animate(0);
}