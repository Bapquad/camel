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

var AssetMng;
var TimeWait;

function init() 
{
	AssetMng = new CanvasShader.AssetManager('jpg|png|gif', 'mp3|wav|ogg');
	AssetMng.QueueFile('images/texture.png');
	AssetMng.QueueDownloadAll();
	progress();
}

function progress() 
{
	TimeWait = AssetMng.getProgress();
	if(AssetMng.isComplete()) {
		UnTick();
		TimeWait = setTimeout(create, 300);
		return;
	}
	TickGID = RequestAnimationFrame(progress);
}

function create() 
{
	clearTimeout(TimeWait);
	
	var projMatrix, viewMatrix, modelMatrix; 
	var canvasshader = new CanvasShader(
		"CanvasShader",				// ID of Canvas Element.
		// Settings of WEBGL.
		{
			antialias: false	// Blur setup to false.
		}
	);
	
	window.onresize = function() 
	{
		canvasshader.sizeFitBrowser();
		projMatrix = CanvasShader.mx.projection(45, canvasshader.getWidth()/canvasshader.getHeight(), 1, 100)
	};
	window.onresize();

	/** Create Render */
	var vs = canvasshader.getGLSL('vertex-shader');
	var fs = canvasshader.getGLSL('fragment-shader');
	var scene = canvasshader.startScene(
		[vs, fs], 
		{
			'pMatrix' : CANVASSHADER_UNIFORM, 
			'vMatrix' : CANVASSHADER_UNIFORM, 
			'mMatrix' : CANVASSHADER_UNIFORM, 
			'sampler' : CANVASSHADER_UNIFORM, 
			'positionIn' : CANVASSHADER_ATTRIB, 
			'texCoordIn' : CANVASSHADER_ATTRIB
		}
	);
	scene.render = function() 
	{
		this.start();

		this.gl.uniformMatrix4fv(this.pMatrix, false, projMatrix);
		this.gl.uniformMatrix4fv(this.vMatrix, false, viewMatrix);
		this.gl.uniformMatrix4fv(this.mMatrix, false, modelMatrix);

		this.gl.uniform1i(this.sampler, 0);
		if(cube_tex.Texture !== NULL) 
		{
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, cube_tex.Texture);
		}

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, cube_vbuff);
		this.gl.vertexAttribPointer(this.positionIn, 3, this.gl.FLOAT, false,4*(3+2),0);
		this.gl.vertexAttribPointer(this.texCoordIn, 2, this.gl.FLOAT, false,4*(3+2),3*4);

		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, cube_ibuff);
		this.gl.drawElements(this.gl.TRIANGLES, cube_face.length, this.gl.UNSIGNED_INT, 0);
	}

	/** Create Vertices Buffer */
	var cube_vertex = [
		-1,-1,-1,	0,0,
		1,-1,-1,	1,0,
		1, 1,-1,	1,1,
		-1, 1,-1,	0,1,

		-1,-1, 1,	0,0,
		1,-1, 1,	1,0,
		1, 1, 1,	1,1,
		-1, 1, 1,	0,1,

		-1,-1,-1,	0,0,
		-1, 1,-1,	1,0,
		-1, 1, 1,	1,1,
		-1,-1, 1,	0,1,

		1,-1,-1,	0,0,
		1, 1,-1,	1,0,
		1, 1, 1,	1,1,
		1,-1, 1,	0,1,

		-1,-1,-1,	0,0,
		-1,-1, 1,	1,0,
		1,-1, 1,	1,1,
		1,-1,-1,	0,1,

		-1, 1,-1,	0,0,
		-1, 1, 1,	1,0,
		1, 1, 1,	1,1,
		1, 1,-1,	0,1
	], 
	cube_vbuff = canvasshader.createVAB(cube_vertex);

	/** Create Indices Buffer */
	var cube_face = [
		0,1,2,		0,2,3,

		4,5,6,		4,6,7,

		8,9,10,		8,10,11,

		12,13,14,	12,14,15,

		16,17,18,	16,18,19,

		20,21,22,	20,22,23
	], 
	cube_ibuff = canvasshader.createIAB(cube_face);

	/** Textures */
	var cube_tex = canvasshader.createTexture(AssetMng.getAsset('images/texture.png'));

	/** MATRIX */
	projMatrix = CanvasShader.mx.projection(45, canvasshader.getWidth()/canvasshader.getHeight(), 1, 100), 
	viewMatrix = CanvasShader.mx.create();
	modelMatrix = CanvasShader.mx.create();
	CanvasShader.mx.translateZ(modelMatrix, -6);

	canvasshader.gl.enable(canvasshader.gl.DEPTH_TEST);
	canvasshader.gl.depthFunc(canvasshader.gl.LEQUAL);
	canvasshader.gl.clearColor(1.0, 0.0, 1.0, 1.0);
	canvasshader.gl.clearDepth(1.0);

	var time_old=0;
	var animate = function(time) 
	{
		var dt = time - time_old;
		time_old = time;
		CanvasShader.mx.rotateZ(modelMatrix, dt*0.001);
		CanvasShader.mx.rotateY(modelMatrix, dt*0.002);
		CanvasShader.mx.rotateX(modelMatrix, dt*0.003);

		canvasshader.gl.viewport(0.0, 0.0, canvasshader.getWidth(), canvasshader.getHeight());
		canvasshader.gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

		scene.render();

		canvasshader.gl.flush();

		RequestAnimationFrame(animate);
	};
	animate(0);
}