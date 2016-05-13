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
	AssetMgr = new Camel.AssetManager('jpg|png|gif', 'mp3|wav|ogg', 'json');
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
		projection = new Camel.Perspective(45, engine.getWidth()/engine.getHeight(), 1, 200);
	};
	window.onresize();
	
	var camera = new Camel.Camera(new Camel.Vec3(0.0, 5.0, 20.0), 
								  new Camel.Vec3(0.0, 0.0, -1.0),
								  new Camel.Vec3(0.0, 1.0, 0.0));

	/** Get 3D JSON Model */
	var dragon;
	dragon = JSON.parse(AssetMgr.getAsset('model/dragon.json').Asset.getXHR().responseText);
	
	/** Create Vertices Buffer */
	var dragon_vertex = dragon.vertices, 
	dragon_vbuff = engine.createVAB(dragon_vertex);
	
	/** Create Indices Buffer */
	var dragon_face = dragon.indices, 
	dragon_ibuff = engine.createIAB(dragon_face);
	
	/** Textures */
	var dragon_tex = engine.createTexture(AssetMgr.getAsset('images/dragon.png'));

	/** Create Plane Vertices Buffer */
	

	/** Textures */
	var plane_tex = engine.createTexture(AssetMgr.getAsset('images/texture.png'));
	
	/** Textures FrameBuffer */
	var RttBuff = engine.createRTT(512, 512, 1.0, 0.0, 0.0, 0.0);

	/** Model view matrix */
	modelMatrix = Camel.mx4.create();
	Camel.mx4.translateZ(modelMatrix, -16);
	Camel.mx4.translateY(modelMatrix, -6);
	
	planeMatrix = Camel.mx4.create();
	Camel.mx4.translateX(planeMatrix, 38);
	Camel.mx4.translateY(planeMatrix, 18);
	Camel.mx4.translateZ(planeMatrix, -80);
	
	/** create tex-render */
	var tex_vs = engine.getGLSL('tex-vertex-shader');
	var tex_fs = engine.getGLSL('tex-fragment-shader');
	var plane_vbuff, plane_ibuff;
	var tex_scene = engine.buildScene(
		engine.buildRender(
			[tex_vs, tex_fs], 
			{
				'pMatrix' : CAMEL_UNIFORM, 
				'vMatrix' : CAMEL_UNIFORM, 
				'mMatrix' : CAMEL_UNIFORM, 
				'sampler' : CAMEL_UNIFORM, 
				'positionIn' : CAMEL_ATTRIB, 
				'texCoordIn' : CAMEL_ATTRIB, 
			}, 
			function() 
			{
				this.use();
			}
		), 
		function() {
			this.cell = this.addChild(new Camel.Cell(10));
			this.cell.createCell(10);
			
			this.cell.translate(38, 18, -80);
		}, 
		function(dt) {
			this.cell.rotateY(dt*0.002*(-1));
		}, 
		function(r) 
		{
			r.gl.uniformMatrix4fv(r.pMatrix, false, projection.loadMXFloat());
			r.gl.uniformMatrix4fv(r.vMatrix, false, camera.loadMXFloat());

			r.gl.uniformMatrix4fv(r.mMatrix, false, this.cell.mx);

			r.gl.uniform1i(r.sampler, 0);
			if(RttBuff.Texture != NULL) 
			{
				r.gl.activeTexture(r.gl.TEXTURE0);
				r.gl.bindTexture(r.gl.TEXTURE_2D, RttBuff.Texture);
			}
			
			var alpha = 1.0; 

			if(alpha < 1.0) 
			{
				r.gl.enable(r.gl.BLEND);
				r.gl.enable(r.gl.CULL_FACE);
			}
			else
			{
				r.gl.disable(r.gl.BLEND);
				r.gl.disable(r.gl.CULL_FACE);	
			}
			
			r.gl.bindBuffer(r.gl.ARRAY_BUFFER, this.cell.vertexBuffer);
			r.gl.vertexAttribPointer(r.positionIn, 3, r.gl.FLOAT, false,4*(3+2),0);
			r.gl.vertexAttribPointer(r.texCoordIn, 2, r.gl.FLOAT, false,4*(3+2),3*4);

			r.gl.bindBuffer(r.gl.ELEMENT_ARRAY_BUFFER, this.cell.indicesBuffer);
			r.gl.drawElements(r.gl.TRIANGLES, this.cell.numberOfIndices, r.gl.UNSIGNED_INT, 0);
			
			// r.gl.bindBuffer(r.gl.ARRAY_BUFFER, plane_vbuff);
			// r.gl.vertexAttribPointer(r.positionIn, 3, r.gl.FLOAT, false,4*(3+2),0);
			// r.gl.vertexAttribPointer(r.texCoordIn, 2, r.gl.FLOAT, false,4*(3+2),3*4);

			// r.gl.bindBuffer(r.gl.ELEMENT_ARRAY_BUFFER, plane_ibuff);
			// r.gl.drawElements(r.gl.TRIANGLES, 6, r.gl.UNSIGNED_INT, 0);
		}
	);

	/** Create scene */
	var vs = engine.getGLSL('vertex-shader');
	var fs = engine.getGLSL('fragment-shader');
	var renderer = engine.buildRender(
		[vs,fs], 
		{
			'pMatrix' : CAMEL_UNIFORM, 
			'vMatrix' : CAMEL_UNIFORM, 
			'mMatrix' : CAMEL_UNIFORM, 
			'sampler' : CAMEL_UNIFORM, 
			'positionIn' : CAMEL_ATTRIB, 
			'texCoordIn' : CAMEL_ATTRIB, 
			'normalIn' : CAMEL_ATTRIB
		}, 
		function() 
		{
			this.use();
		}
	);
	var scene = engine.buildScene(
		renderer, 
		function() {
			
		}, 
		function(dt) {
			Camel.mx4.rotateY(modelMatrix, dt*0.002);
		}, 
		function(r) 
		{
			r.gl.uniformMatrix4fv(r.pMatrix, false, projection.loadMXFloat());
			r.gl.uniformMatrix4fv(r.vMatrix, false, camera.loadMXFloat());
			
			r.gl.uniformMatrix4fv(r.mMatrix, false, modelMatrix);

			r.gl.uniform1i(r.sampler, 0);
			if(dragon_tex.Texture !== NULL) 
			{
				r.gl.activeTexture(r.gl.TEXTURE0);
				r.gl.bindTexture(r.gl.TEXTURE_2D, dragon_tex.Texture);
			}
			
			var alpha = 0.5;

			if(alpha < 1.0) 
			{
				r.gl.enable(r.gl.BLEND);
				r.gl.enable(r.gl.CULL_FACE);
			}
			else
			{
				r.gl.disable(r.gl.BLEND);
				r.gl.disable(r.gl.CULL_FACE);	
			}
			
			r.gl.bindBuffer(r.gl.ARRAY_BUFFER, dragon_vbuff);
			r.gl.vertexAttribPointer(r.positionIn, 3, r.gl.FLOAT, false,4*(3+3+2),0);
			r.gl.vertexAttribPointer(r.normalIn, 3, r.gl.FLOAT, false,4*(3+3+2),3*4);
			r.gl.vertexAttribPointer(r.texCoordIn, 2, r.gl.FLOAT, false,4*(3+3+2),(3+3)*4);

			r.gl.bindBuffer(r.gl.ELEMENT_ARRAY_BUFFER, dragon_ibuff);
			r.gl.drawElements(r.gl.TRIANGLES, dragon.indices.length, r.gl.UNSIGNED_INT, 0);
		}
	);

	engine.buildBefore(function() {
		engine.openRTT(RttBuff);
		scene.pass(renderer);
		engine.closeRTT();
	});
	
	var animate = function(time) 
	{
		engine.cycle(time);
		RequestAnimationFrame(animate);
	};
	animate(0);
}