// JavaScript Document

function init() 
{
	var projMatrix, viewMatrix, modelMatrix; 
	var cShader = new CShader(
		"CShader",				// ID of Canvas Element.
		// Settings of WEBGL.
		{
			antialias: false	// Blur setup to false.
		}
	);
	
	window.onresize = function() 
	{
		cShader.sizeFitBrowser();
		console.log(cShader.getWidth());
		projMatrix = csmatrix.projection(45, cShader.getWidth()/cShader.getHeight(), 1, 100)
	};
	window.onresize();

	/** Create Render */
	var vs = cShader.getGLSL('vertex-shader');
	var fs = cShader.getGLSL('fragment-shader');
	var render = cShader.buildRender(
		[vs, fs], 
		{
			'pMatrix' : CSHADER_UNIFORM, 
			'vMatrix' : CSHADER_UNIFORM, 
			'mMatrix' : CSHADER_UNIFORM, 
			'positionIn' : CSHADER_ATTRIB, 
			'colorIn' : CSHADER_ATTRIB
		}
	);
	render.select();

	/** Create Vertices Buffer */
	var cube_vertex = [
		-1,-1,-1,	0, 0, 0, 		// position left - bottom - back; black;
		 1,-1,-1,	1, 0, 0,		// position right - bottom - back; red;
		 1, 1,-1,	1, 1, 0,		// position right - top - back; yellow;
		-1, 1,-1,	0, 1, 0,		// position left - top -back; green;
		-1,-1, 1,	0, 0, 1,		// position left - bottom - front; blue;
		 1,-1, 1,	1, 0, 1, 		// position right - bottom - front; purple;
		 1, 1, 1,	1, 1, 1, 		// position right - top - front; white;
		-1, 1, 1,	0, 1, 1,		// position left - top - front; cyan;
	], 
	cube_vbuff = cShader.createVAB(cube_vertex);

	/** Create Indices Buffer */
	var cube_face = [
		0, 1, 2, 	0, 2, 3,	// Back
		4, 5, 6, 	4, 6, 7, 	// Front
		0, 3, 7, 	0, 4, 7, 	// Left
		1, 2, 6, 	1, 5, 6, 	// Right
		2, 3, 6, 	3, 7, 6, 	// Top
		0, 1, 5, 	0, 4, 5, 	// Bottom
	], 
	cube_ibuff = cShader.createIAB(cube_face);

	/** MATRIX */
	projMatrix = csmatrix.projection(45, cShader.getWidth()/cShader.getHeight(), 1, 100), 
	viewMatrix = csmatrix.create();
	modelMatrix = csmatrix.create();
	csmatrix.translateZ(modelMatrix, -6);

	cShader._GL.enable(cShader._GL.DEPTH_TEST);
	cShader._GL.depthFunc(cShader._GL.LEQUAL);
	cShader._GL.clearColor(1.0, 0.0, 1.0, 1.0);
	cShader._GL.clearDepth(1.0);

	var time_old=0;
	var animate=function(time) 
	{
		var dt=time-time_old;
		time_old=time;
		csmatrix.rotateZ(modelMatrix, dt*0.001);
		csmatrix.rotateY(modelMatrix, dt*0.002);
		csmatrix.rotateX(modelMatrix, dt*0.003);

		cShader._GL.viewport(0.0, 0.0, cShader.getWidth(), cShader.getHeight());
		cShader._GL.clear(cShader._GL.COLOR_BUFFER_BIT | cShader._GL.DEPTH_BUFFER_BIT);

		cShader._GL.uniformMatrix4fv(render.pMatrix, false, projMatrix);
		cShader._GL.uniformMatrix4fv(render.vMatrix, false, viewMatrix);
		cShader._GL.uniformMatrix4fv(render.mMatrix, false, modelMatrix);

		cShader._GL.bindBuffer(cShader._GL.ARRAY_BUFFER, cube_vbuff);
		cShader._GL.vertexAttribPointer(render.positionIn, 3, cShader._GL.FLOAT, false,4*(3+3),0);
		cShader._GL.vertexAttribPointer(render.colorIn, 3, cShader._GL.FLOAT, false,4*(3+3),3*4);

		cShader._GL.bindBuffer(cShader._GL.ELEMENT_ARRAY_BUFFER, cube_ibuff);
		cShader._GL.drawElements(cShader._GL.TRIANGLES, 6*2*3, cShader._GL.UNSIGNED_SHORT, 0);

		cShader._GL.flush();

		window.requestAnimationFrame(animate);
	};
	animate(0);
}