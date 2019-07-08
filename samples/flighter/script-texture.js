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

var assetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json|vert|frag');
var Timer = 0;
var carem2d;
var centerPosX2d, centerPosY2d;
var frameWidth, frameHeight;

function init() 
{
	carem2d = new Carem.Layer("Camel2D");
	carem2d.SetBackground(0, 0, 0, 0);
	frameWidth = carem2d.GetWidth();
	frameHeight = carem2d.GetHeight();
	centerPosX2d = frameWidth/2;
	centerPosY2d = frameHeight/2;
	
	carem2d.Text = new Carem.SymbolText(carem2d);
	carem2d.Text.SetPosition(0, 0);
	carem2d.Text.SetOrgin(0, 0);
	carem2d.Text.SetRotate(0);
	carem2d.Text.SetFont("Arial");
	carem2d.Text.SetSize(24);
	carem2d.Text.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
	carem2d.Text.SetAlign("center");
	carem2d.Text.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
	
	carem2d.Intro = new Carem.SymbolText(carem2d);
	carem2d.Intro.SetPosition(centerPosX2d, centerPosY2d);
	carem2d.Intro.SetOrgin(0, 0);
	carem2d.Intro.SetRotate(0);
	carem2d.Intro.SetFont("Arial");
	carem2d.Intro.SetSize(24);
	carem2d.Intro.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
	carem2d.Intro.SetAlign("center");
	carem2d.Intro.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
	carem2d.Intro.AddText("AIR-CRAFT Loading", 0, -40);
	carem2d.Intro.AddText("Air-craft game demo designed for perfomence testing,", 0, 90);
	carem2d.Intro.AddText("and test features of CAMELJS. Air-craft © 2018 Bapquad Games.", 0, 120);
	// carem2d.Intro.AddText("", 0, 100);
	
	assetMgr.QueueFile('images/Ame.png');
	assetMgr.QueueFile('images/space.png');
	assetMgr.QueueFile('images/hole.png');
	assetMgr.QueueFile('images/asteroid.jpg');
	assetMgr.QueueFile('model/model.json');
	assetMgr.QueueFile('model/space.json');
	assetMgr.QueueFile('model/hole.json');
	assetMgr.QueueFile('model/asteroid.json');
	assetMgr.QueueDownloadAll();
	
	progress();
}

function progress() 
{
	var loadedProgress = assetMgr.GetProgress();
	carem2d.Text.SetText(loadedProgress+"%", centerPosX2d, centerPosY2d);
	carem2d.Clear();
	carem2d.Swap();
	if(assetMgr.IsComplete()) 
	{
		Timer = setTimeout(function() 
		{
			UnTick();
			carem2d.Remove(carem2d.Text);
			carem2d.Remove(carem2d.Intro);
			carem2d.Clear();
			
			create();
		}, 4000);
		return;
	}
	TickGID = RequestAnimationFrame(progress);
}

function create() 
{
	clearTimeout(Timer);
	var gameScore = 0;
	var gameLife = 4;
	
	carem2d.Score = new Carem.SymbolText(carem2d);
	carem2d.Score.SetPosition(0, 0);
	carem2d.Score.SetOrgin(0, 0);
	carem2d.Score.SetRotate(0);
	carem2d.Score.SetFont("Arial");
	carem2d.Score.SetSize(48);
	carem2d.Score.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
	carem2d.Score.SetAlign("left");
	carem2d.Score.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
	
	carem2d.Life = new Carem.SymbolText(carem2d);
	carem2d.Life.SetPosition(0, 0);
	carem2d.Life.SetOrgin(0, 0);
	carem2d.Life.SetRotate(0);
	carem2d.Life.SetFont("Arial");
	carem2d.Life.SetSize(48);
	carem2d.Life.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
	carem2d.Life.SetAlign("right");
	carem2d.Life.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
	
	var t = 0;
	var d = -1;
	var n = 0;
	
	var left = function(k) 
	{
		if( d==1 && n==1 ) 
		{
			t = k;
			d = -1;
		} 
		n = 0;
	} 
	
	var right = function(k) 
	{
		if( d==-1 && n==1 ) 
		{
			t = k;
			d = 1;
		}
		n = 0;
	}
	
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
	engine.SetClearColor(0, 0, 0);
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
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 4.0, 10.0), 
								  new Camel.Vec3(0.0, 2.0, 0.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));
	
	/** create tex-render */
	var tex_scene = engine.BuildScene(
		CAMEL_RENDERER_STANDARD, 
		function() 
		{
			this.space = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/space.json')));
			this.space.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/space.png')));
			this.space.Scale(50.0, 50.0, 50.0);
			this.space.Set2Side(true);
			this.space.SetAlpha(30);
			this.space.onTick(function(dt)
			{
				this.RotateZ(0.000009*dt);
				this.RotateY(0.000009*dt);
				this.RotateX(0.000009*dt);
			});
			
			this.hole = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/hole.json')));
			this.hole.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/hole.png')));
			this.hole.Set2Side(true);
			this.hole.SetAlpha(60);
			this.hole.TranslateX(-3.5);
			this.hole.TranslateY(.5);
			this.hole.TranslateZ(-40.0);
			this.hole.onTick(function(dt)
			{
				this.TranslateZ(.2);
				if( this.GetPositionZ() > 2 ) 
				{
					this.TranslateZ(-75.0);
					if(d==-1) 
					{
						gameScore += 10;
					}
				}
			});
			
			this.hole = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/hole.json')));
			this.hole.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/hole.png')));
			this.hole.Set2Side(true);
			this.hole.SetAlpha(60);
			this.hole.TranslateX(3.5);
			this.hole.TranslateY(.5);
			this.hole.TranslateZ(-80.0);
			this.hole.onTick(function(dt)
			{
				this.TranslateZ(.2);
				if( this.GetPositionZ() > 2 ) 
				{
					this.TranslateZ(-75.0);
					if(d==1) 
					{
						gameScore += 10;
					}
				}
			});
			
			this.asteroid = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/asteroid.json')));
			this.asteroid.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/asteroid.jpg')));
			this.asteroid.Set2Side(true);
			this.asteroid.TranslateX(3.5);
			this.asteroid.TranslateY(.5);
			this.asteroid.TranslateZ(-120.0);
			this.asteroid.onTick(function(dt)
			{
				this.RotateX(0.002*dt);
				this.RotateY(0.003*dt);
				this.RotateZ(0.001*dt);
				this.TranslateZ(.2);
				if( this.GetPositionZ() > 5 ) 
				{
					this.TranslateZ(-75.0);
					if(d==1) 
					{
						gameLife -= 1;
						if(gameLife<=0) 
						{
							gameLife = 0;
						}
					}
				}
			});
			
			this.asteroid = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/asteroid.json')));
			this.asteroid.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/asteroid.jpg')));
			this.asteroid.Set2Side(true);
			this.asteroid.TranslateX(-3.5);
			this.asteroid.TranslateY(.5);
			this.asteroid.TranslateZ(-100.0);
			this.asteroid.onTick(function(dt)
			{
				this.RotateX(-0.002*dt);
				this.RotateY(0.001*dt);
				this.RotateZ(-0.003*dt);
				this.TranslateZ(.2);
				if( this.GetPositionZ() > 5 ) 
				{
					this.TranslateZ(-75.0);
					if(d==-1) 
					{
						gameLife -= 1;
						if(gameLife<=0) 
						{
							gameLife = 0;
						}
					}
				}
			});
			
			this.flighter = this.AddChild(new Camel.Model(assetMgr.GetAsset('model/model.json')));
			this.flighter.TranslateX(-3.5);
			this.flighter.RotateX(-3.14/2);
			this.flighter.RotateY(-3.14/2);
			this.flighter.RotateZ(-.25);
			this.flighter.SetDiffuseMap(engine.CreateTexture(assetMgr.GetAsset('images/Ame.png')));
			this.flighter.onTick(function(dt) {
				t -= 1;
				if( t<=0 ) 
				{
					t=0;
					n=1;
					if( d==1 ) 
					{
						if( this.GetPositionX() != 3.5 ) 
						{
							this.TranslateX( 3.5 - this.GetPositionX() );
						}
					}
				}
				this.RotateZ(0.009*(t/10)*d);
				this.TranslateX((0.008*d)*dt*(t/10));
			});
			
			this.projection = projection;
			this.camera = camera;
		}
	);
	
	document.getElementById("game").addEventListener("mouseup", function(e)
	{
		var centerX = window.innerWidth/2;
		var cmX = e.clientX || e.layerX;
		if( cmX < centerX ) 
		{
			right(33);
		} 
		else 
		{
			left(33);
		}
	});
	
	var animate = function(time) 
	{
		if(gameLife<=0) 
		{
			carem2d.Over = new Carem.SymbolText(carem2d);
			carem2d.Over.SetPosition(0, 0);
			carem2d.Over.SetOrgin(0, 0);
			carem2d.Over.SetRotate(0);
			carem2d.Over.SetFont("Arial");
			carem2d.Over.SetSize(160);
			carem2d.Over.SetBaseLine(CAREM_TEXT_BASELINE_MIDDLE);
			carem2d.Over.SetAlign("center");
			carem2d.Over.SetBackground([{r:220, g:0, b:0, a:1, stop:0}]);
			carem2d.Over.SetText("Gameover", centerPosX2d, centerPosY2d);
		} 
		else 
		{
			engine.Cycle(time);
			TickGID = RequestAnimationFrame(animate);
		}
		
		carem2d.Score.SetText("Score: " + gameScore, 10, 10);
		carem2d.Life.SetText("Life: " + gameLife, frameWidth-10, 10 );
		carem2d.Clear();
		carem2d.Swap();
	};
	animate(0);
}