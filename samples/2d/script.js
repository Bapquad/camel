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
    Timer = assetMgr.GetProgress();
    
    /** When the progress of download finish */
    if(assetMgr.IsComplete()) 
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
	var canvas2D = document.getElementById("Camel2D");
	canvas2D.width = window.innerWidth;
	canvas2D.height = window.innerHeight;
	var ctx = document.getElementById("Camel2D").getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillStyle = "#f00";
	ctx.textAlign = "left";
	ctx.textBaseline = "hanging";
	ctx.fillText("AABB", 12, 12);
    /** Set up the clear color. */
	engine.SetClearColor(255, 255, 255);
    /** Set up the size so it fit the zise of the browser. */
    engine.SizeFitBrowser();
    
    /** Create the perspective of the game's scenes. */
    var ortho = new Camel.Orthographic(0, 0, engine.GetWidth(), engine.GetHeight(), 1, 200);
	window.onresize = function() 
	{
		engine.SizeFitBrowser();
		ortho.set(0, 0, engine.GetWidth(), engine.GetHeight(), 1, 200);
	};
    
    /** Create the camera for game. */
    var camera = new Camel.Camera(new Camel.Vec3(0.0, 0.0, 0.0), 
								  new Camel.Vec3(0.0, 0.0, 0.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
								  
	/** Build scene for game */
	var scene = engine.BuildScene(
		CAMEL_RENDERER_CAREM, 
		function() 
		{
			this.cell = this.AddChild(new Camel.Cell(1));
			this.cell.Scale(100, 55, 1);
			this.cell.Translate(100, 55, 0);
			this.cell.Translate(0, 60, 0);
			this.cell.RotateY(Math.PI);
			this.cell.maskart = new Camel.Vec4();
			this.cell.SetAlpha(50);
			this.cell.Set2Side(true);
			this.cell.SetDiffuseMap(engine.GetTexture(assetMgr.GetAsset('images/fish1.png')));
			this.cell.onTick(function(dt) {
				this.maskart.SetVector(198/assetMgr.GetAsset('images/fish1.png').asset.width, 114/assetMgr.GetAsset('images/fish1.png').asset.height, parseFloat(Math.round(levelTime*0.01)%3), 1.0);
				this.TranslateX(dt*0.1);
			});

			this.projection = ortho;
			this.camera = camera;
		}
	);
	
	/** Game Cycle */
	var animate = function(time) 
	{
		levelTime = time;
		engine.Cycle(time);
		RequestAnimationFrame(animate);
	};
	animate(0);
}