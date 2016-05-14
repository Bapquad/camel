/**
 * ************************************************************************************
 * Javascript Document
 * 
 * Library Classes Name: Camel
 * 
 * Developer: Vu Huy Cuong
 * 
 * Email: vuhuycuong291987@gmail.com
 * 
 * Website: bapquadgames.com
 * ************************************************************************************
 */

var CAMEL_WEBGL = 'experimental-webgl', 
	CAMEL_SHADER_VERT = 'x-shader/x-vertex', 
	CAMEL_SHADER_FRAGMENT = 'x-shader/x-fragment', 
	CAMEL_ATTRIB = 0, 
	CAMEL_UNIFORM = 1, 
	CAMEL_QUEUE_IMAGE = 0, 
	CAMEL_QUEUE_SOUND = 1,
	CAMEL_QUEUE_XHTTP = 2,
	CAMEL_QUEUE_VIDEO = 3;
var CAMEL_CREATE_CELL = 0, 
	CAMEL_CREATE_BOX = 1, 
	CAMEL_CREATE_SPHERE = 2, 
	CAMEL_CREATE_CONE = 3;
var CAMEL_TYPE_OBJECT = 'object', 
	CAMEL_TYPE_STRING = 'string', 
	CAMEL_TYPE_FUNC = 'function';
var CAMEL_MATH_EPSILON = 0.000001;
var CAMEL_IL_FOUR = 4, 
	CAMEL_IL_THREE = 3,  
	CAMEL_IL_TWO = 2, 
	CAMEL_IL_ONE = 1;
var NULL = null, 
	TRUE = true, 
	FALSE = false, 
	INFINITY = -9999999, 
	EMPTY = '', 
	UNSET = undefined;
var GL_COLOR_BUFFER_BIT = 16384, 
	GL_DEPTH_BUFFER_BIT = 256;
var CAMEL_RENDERER_TEXTURE = EMPTY, 
	CAMEL_RENDERER_WORLD = EMPTY;
var CAMEL_LIGHT_DIRECT = 0, 
	CAMEL_LIGHT_POINT = 1;
	
/**
 * New function for Math
 */
/**
 * Convert the angle to radian
 * 
 * Return the number of radian
 */
Math.degToRad = function(angle) 
{
	return angle*Math.PI/180;
};

var Camel = function(CANVASElementID, Settings, Extensions, numberHolder) 
{
	this.id 		= CANVASElementID;
	this.element	= document.getElementById(this.id);
	this.gl 		= NULL;
	this.context 	= NULL;
	
	this.lastTime	= 0;
	this.clearColor = new Array(3);
	
	this.renderHolder = (numberHolder == UNSET) ? new Array(8) : new Array(numberHolder);
	try 
	{
		var engine = this;
		this.gl = this.element.getContext(CAMEL_WEBGL, Settings);
		this.gl.engine = this;
		this.context = this.getWGL();
		var lim = Extensions.length;
		for(var i=0; i<lim; i++)
			this.gl.getExtension(Extensions[i]);
		
		this.buildDefault();
	}
	catch(e) 
	{
		Camel.Alert("Could not initialize WebGL. Maybe browser not support WebGL compatible.");
		return FALSE;
	}
};

Camel.prototype.getWidth = function() 
{
	return parseInt(this.element.style.width);
};

Camel.prototype.getHeight = function() 
{
	return parseInt(this.element.style.height);
};

Camel.prototype.getBrowserWidth = function() 
{
	return window.innerWidth;
};

Camel.prototype.getBrowserHeight = function() 
{
	return window.innerHeight;
};

Camel.prototype.sizeFitBrowser = function() 
{
	this.element.width =  window.innerWidth;
	this.element.height = window.innerHeight;
	this.element.style.width = window.innerWidth+'px';
	this.element.style.height = window.innerHeight+'px';
	return;
};

Camel.prototype.setClearColor = function(r, g, b) 
{
	this.clearColor[0] = (r/255).toFixed(2);
	this.clearColor[1] = (g/255).toFixed(2);
	this.clearColor[2] = (b/255).toFixed(2);
	return this;
}

Camel.prototype.getGLSL = function(shaderID) 
{
	var c = EMPTY, d = 0, sc = 0, sd = 0;
	if(typeof shaderID == CAMEL_TYPE_OBJECT && shaderID.isAsset) 
	{
		if(shaderID.Ext == 'vert') 
			sc = {type:CAMEL_SHADER_VERT};
		else if(shaderID.Ext == 'frag')
			sc = {type:CAMEL_SHADER_FRAGMENT};
		else 
			return;
		c = shaderID.Asset.getXHR().responseText;
	}
	else if(typeof shaderID == CAMEL_TYPE_OBJECT && shaderID[0].indexOf('-shader') >=0) 
	{
		sc = {type:shaderID.shift()};
		c = shaderID.join('\n');
	}
	else 
	{
		sc = document.getElementById(shaderID);
		if(!sc)
			return NULL;
		d = sc.firstChild;
		while(d) 
		{
			c += d.textContent;
			d = d.nextSibling;
		}
	}
	
	if(sc.type == CAMEL_SHADER_VERT) 
	{
		sd = this.gl.createShader(this.gl.VERTEX_SHADER);
	}
	else if(sc.type = CAMEL_SHADER_FRAGMENT) 
	{
		sd = this.gl.createShader(this.gl.FRAGMENT_SHADER);
	}
	else 
	{
		return NULL;
	}

	this.gl.shaderSource(sd, c);
	this.gl.compileShader(sd);
	if(!this.gl.getShaderParameter(sd, this.gl.COMPILE_STATUS)) 
	{
		Camel.Alert('You have a problem: \n' + this.gl.getShaderInfoLog(sd));
		return NULL;
	}
	return sd;
};

Camel.prototype.buildScene = function(renderer, startCB, updateCB, renderCB, beforeRenderCB) 
{
	var scene = NULL;
	switch(typeof renderer) 
	{
		case CAMEL_TYPE_FUNC:
		
			break;
		case CAMEL_TYPE_OBJECT:
		default:
			scene = new Camel.Scene(startCB, updateCB, renderCB, beforeRenderCB);
			scene.addRenderer(renderer);
	}
	return scene;
};

Camel.prototype.orderRender = function(renderer) 
{
	if(renderer == UNSET) 
	{
		return false;
	}
	else 
	{
		var lim = this.renderHolder.length;
		for(var i=0; i<lim; i++)
			if(this.renderHolder[i] == UNSET) 
			{
				this.renderHolder[i] = renderer;
				break;
			}
		return renderer; 
	}
};

Camel.prototype.buildRender = function(shaders, constants, beforeCB, finishCB) 
{
	if(Array.isArray(shaders) && this.gl) 
	{
		var gl = this.gl, 
			p = gl.createProgram(), 
			s = shaders, 
			c = constants;
		var lim = s.length;
		for(var i=0;i<lim;i++)
			gl.attachShader(p, s[i]);
		gl.linkProgram(p);
		if(!gl.getProgramParameter(p, gl.LINK_STATUS)) 
		{
			Camel.Alert('Could not initialize shader!');
			return NULL;
		}
		else 
		{
			var renderer = new Object();
			renderer.gl = gl;
			renderer.program = p;
			renderer.sceneHolder = new Array(8);
			for(x in c) 
			{
				switch(c[x]) 
				{
					case CAMEL_ATTRIB:
						renderer[x] = gl.getAttribLocation(p, x);
						gl.enableVertexAttribArray(renderer[x]);
						if(renderer.inputLayout == UNSET) 
						{
							renderer.inputLayout = 1;
						}
						else 
						{
							renderer.inputLayout++;
						}
						break;
					case CAMEL_UNIFORM:
					default:
						renderer[x] = gl.getUniformLocation(p, x);
						break;
				}
			}
			
			if(beforeCB == UNSET)
				renderer.before = function() 
				{
					this.use();
				};				
			else
				renderer.before = beforeCB;
				
			renderer.finish = finishCB;
			
			renderer.use = function() 
			{
				this.gl.useProgram(this.program);
			};
			
			renderer.orderScene = function(scene) 
			{
				var lim = this.sceneHolder.length;
				for(var i=0; i<lim; i++) 
				{
					if(this.sceneHolder[i] == UNSET) 
					{
						this.sceneHolder[i] = scene;
						break;
					}
				}
			};
			return this.orderRender(renderer);
		}
	}
	else 
	{
		return NULL;
	}
};

Camel.prototype.createVAB = function(vArr) 
{
	var vBuf = this.gl.createBuffer();
	this.gl.bindBuffer(
		this.gl.ARRAY_BUFFER, 
		vBuf
	);
	this.gl.bufferData(
		this.gl.ARRAY_BUFFER, 
		new Float32Array(vArr), 
		this.gl.STATIC_DRAW
	);
	return vBuf;
};

Camel.prototype.createIAB = function(iArr) 
{
	var iBuf = this.gl.createBuffer();
	this.gl.bindBuffer(
		this.gl.ELEMENT_ARRAY_BUFFER, 
		iBuf
	);
	this.gl.bufferData(
		this.gl.ELEMENT_ARRAY_BUFFER, 
		new Uint32Array(iArr), 
		this.gl.STATIC_DRAW
	);
	return iBuf;
};

Camel.prototype.createTexture = function(asset) 
{
	asset.Texture = NULL;
	var t = this.gl.createTexture();
	this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, TRUE);
	this.gl.bindTexture(this.gl.TEXTURE_2D, t);
	this.gl.texImage2D(
		this.gl.TEXTURE_2D, 
		0, 
		this.gl.RGBA, 
		this.gl.RGBA, 
		this.gl.UNSIGNED_BYTE, 
		asset.Asset
	);
	this.gl.texParameteri(
		this.gl.TEXTURE_2D, 
		this.gl.TEXTURE_MAG_FILTER, 
		this.gl.LINEAR
	);
	this.gl.texParameteri(
		this.gl.TEXTURE_2D, 
		this.gl.TEXTURE_MIN_FILTER, 
		this.gl.LINEAR
	);
	this.gl.generateMipmap(this.gl.TEXTURE_2D);
	this.gl.bindTexture(this.gl.TEXTURE_2D, NULL);
	asset.Texture = t;
	return asset;
};

Camel.prototype.createRTT = function(name, width, height, red, green, blue, alpha, render) 
{
	var rb = this.gl.createRenderbuffer();
	this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, rb);
	this.gl.renderbufferStorage(
		this.gl.RENDERBUFFER, 
		this.gl.DEPTH_COMPONENT16 , 
		width, 
		height
	);

	var rt = this.gl.createTexture();
	this.gl.bindTexture(this.gl.TEXTURE_2D, rt);
	this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
	this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
	this.gl.texImage2D(
		this.gl.TEXTURE_2D, 
		0, 
		this.gl.RGBA, 
		width, 
		height, 
		0, 
		this.gl.RGBA, 
		this.gl.UNSIGNED_BYTE, 
		NULL
	);

	var fbuff = this.gl.createFramebuffer();
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fbuff);
	this.gl.framebufferTexture2D(
		this.gl.FRAMEBUFFER, 
		this.gl.COLOR_ATTACHMENT0, 
		this.gl.TEXTURE_2D, 
		rt, 
		0
	);
	this.gl.framebufferRenderbuffer(
		this.gl.FRAMEBUFFER, 
		this.gl.DEPTH_ATTACHMENT, 
		this.gl.RENDERBUFFER, 
		rb
	);
	fbuff.RTTW = width;
	fbuff.RTTH = height;
	fbuff.clearColor = {
		red: red, 
		green : green, 
		blue : blue, 
		alpha : alpha
	};
	fbuff.Texture = rt;
	fbuff.pass = render;
	
	if(this.frameBuffers == UNSET) 
	{
		this.frameBuffers = new Object();
	};
	
	this.frameBuffers[name] = fbuff;

	this.gl.bindTexture(this.gl.TEXTURE_2D, NULL);
	this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, NULL);
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, NULL);

	return fbuff;
};

Camel.prototype.openRTT = function(frameBuffer) 
{
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, frameBuffer);
	this.gl.clearColor(
		frameBuffer.clearColor.red, 
		frameBuffer.clearColor.green, 
		frameBuffer.clearColor.blue, 
		frameBuffer.clearColor.alpha
	);
	this.gl.viewport(
		0.0, 
		0.0, 
		frameBuffer.RTTW, 
		frameBuffer.RTTH
	);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	return;
};

Camel.prototype.closeRTT = function() 
{
	this.gl.flush();
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, NULL);
	return;
};

Camel.prototype.getWGL = function() 
{
	return this.getContext();
};

Camel.prototype.getContext = function() 
{
	return this.gl;
};

Camel.prototype.prepare = function() 
{
	var lim = this.renderHolder.length;
	for(var i=0; i<lim; i++) 
	{
		if(this.renderHolder[i] == UNSET) 
			break;
		
		var limscn = this.renderHolder[i].sceneHolder.length;
		for(var j=0; j<limscn; j++) 
		{
			if(this.renderHolder[i].sceneHolder[j] != UNSET) 
			{
				this.renderHolder[i].sceneHolder[j].start();
				for(var k=0; k<32; k++) 
				{
					if(this.renderHolder[i].sceneHolder[j].particleHolder[k] != UNSET 
					&& this.renderHolder[i].sceneHolder[j].particleHolder[k].vertices != UNSET 
					&& this.renderHolder[i].sceneHolder[j].particleHolder[k].indices != UNSET) 
					{
						this.renderHolder[i].sceneHolder[j].particleHolder[k].vertexBuffer = this.createVAB(this.renderHolder[i].sceneHolder[j].particleHolder[k].vertices);
						this.renderHolder[i].sceneHolder[j].particleHolder[k].indicesBuffer = this.createIAB(this.renderHolder[i].sceneHolder[j].particleHolder[k].indices);
					}
				}
			}
		}
	}
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
	this.gl.depthFunc(this.gl.LEQUAL);
	this.gl.clearDepth(1.0);

	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.frontFace(this.gl.CCW);
	
	this.beforeCycle = function() 
	{
		for(x in this.frameBuffers)
		{
			this.openRTT(this.frameBuffers[x]);
				this.frameBuffers[x].pass();
			this.closeRTT();
		}
	};
};

Camel.prototype.cycle = function(time) 
{
	if(time<=0) 
	{
		this.prepare();
		return;
	}
	var dt = time - this.lastTime;
	this.lastTime = time;
	var lim = this.renderHolder.length;
	for(var i=0; i<lim; i++) 
	{
		if(this.renderHolder[i] == UNSET) 
			break;
			
		var limscn = this.renderHolder[i].sceneHolder.length;
		for(var j=0; j<limscn; j++) 
		{
			if(this.renderHolder[i].sceneHolder[j] != UNSET) 
			{
				this.renderHolder[i].sceneHolder[j].update(dt);
			}
		}

		if(i == 0) 
		{
			if(this.beforeCycle != UNSET)
				this.beforeCycle();

			this.gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], 1.0);
			this.gl.viewport(0.0, 0.0, this.getWidth(), this.getHeight());
			this.gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
		}
		
		for(var j=0; j<limscn; j++) 
		{
			if(this.renderHolder[i].sceneHolder[j] != UNSET) 
			{
				if(this.renderHolder[i].sceneHolder[j].visible 
				&& this.renderHolder[i].sceneHolder[j].render != NULL 
				&& !this.renderHolder[i].sceneHolder[j].disable) 
				{
					this.renderHolder[i].before();
					this.renderHolder[i].sceneHolder[j].pass(this.renderHolder[i]);
				}
			}
		}
		
		if(i == 0)
		{
			this.gl.flush();
		}
	}
};

Camel.prototype.buildDefault = function() 
{
	var engine = this, c = [CAMEL_SHADER_VERT, 'attribute vec3 positionIn;', 'attribute vec2 texCoordIn;', 'uniform mat4 pMatrix;', 'uniform mat4 vMatrix;', 'uniform mat4 mMatrix;', 'varying vec2 texCoordOut;', 'void main(void)', '{', '	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);', '	texCoordOut = texCoordIn;', '}'];var vs = engine.getGLSL(c);
		c =	[CAMEL_SHADER_FRAGMENT,'precision mediump float;','uniform sampler2D sampler;','uniform float mat_alpha;','varying vec2 texCoordOut;','void main(void)','{','	vec3 color = vec3(texture2D(sampler, texCoordOut));','	gl_FragColor = vec4(color, mat_alpha);','}'];var fs = engine.getGLSL(c);
		CAMEL_RENDERER_TEXTURE = this.buildRender([vs,fs],{'pMatrix' : CAMEL_UNIFORM,'vMatrix' : CAMEL_UNIFORM,'mMatrix' : CAMEL_UNIFORM,'sampler' : CAMEL_UNIFORM,'mat_alpha' : CAMEL_UNIFORM,'positionIn' : CAMEL_ATTRIB,'texCoordIn' : CAMEL_ATTRIB,});
		c = [CAMEL_SHADER_VERT,'attribute vec3 positionIn;','attribute vec3 normalIn;','attribute vec2 texCoordIn;','uniform mat4 pMatrix;','uniform mat4 vMatrix;','uniform mat4 mMatrix;','varying vec2 texCoordOut;','varying vec3 normalOut;','varying vec3 viewOut;','void main(void)','{','	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);','	texCoordOut = texCoordIn;','	normalOut = vec3(mMatrix * vec4(normalIn, 0.0));','	viewOut = vec3(vMatrix * mMatrix * vec4(positionIn, 1.0));','}'];vs = engine.getGLSL(c);
		c = [CAMEL_SHADER_FRAGMENT,'precision mediump float;','uniform sampler2D sampler;','varying vec2 texCoordOut;','varying vec3 normalOut;','varying vec3 viewOut;','struct PLight ','{','	vec3 ambient_color;','	vec3 diffuse_color;','	vec3 specular_color;','	vec3 position;','};','uniform vec3 dlight_ambient_color;','uniform vec3 dlight_diffuse_color;','uniform vec3 dlight_specular_color;','uniform vec3 dlight_vector;','uniform PLight plight[7];','uniform vec3 mat_ambient_color;','uniform vec3 mat_diffuse_color;','uniform vec3 mat_specular_color;','uniform float mat_shininess;','uniform float mat_alpha;','void main(void)','{','	vec3 color = vec3(texture2D(sampler, texCoordOut));','	vec3 ambient = dlight_ambient_color * mat_ambient_color;','	vec3 diffuse = dlight_diffuse_color * mat_diffuse_color * max(0.0, dot(normalOut, dlight_vector));','	vec3 Eye = normalize(viewOut);','	vec3 N = reflect(dlight_vector, normalOut);','	vec3 specular = dlight_specular_color * mat_specular_color * pow(max(dot(N, Eye), 0.0), mat_shininess);','	vec3 light = ambient + diffuse + specular;','	gl_FragColor = vec4(color*light, mat_alpha);','}'];fs = engine.getGLSL(c);
		CAMEL_RENDERER_WORLD = this.buildRender([vs,fs],{'pMatrix' : CAMEL_UNIFORM,'vMatrix' : CAMEL_UNIFORM,'mMatrix' : CAMEL_UNIFORM,'sampler' : CAMEL_UNIFORM,'mat_alpha' : CAMEL_UNIFORM,'mat_shininess' : CAMEL_UNIFORM,'mat_diffuse_color' : CAMEL_UNIFORM,'mat_ambient_color' : CAMEL_UNIFORM,'mat_specular_color' : CAMEL_UNIFORM,'dlight_ambient_color' : CAMEL_UNIFORM,'dlight_diffuse_color' : CAMEL_UNIFORM,'dlight_specular_color' : CAMEL_UNIFORM,'dlight_vector' : CAMEL_UNIFORM,'plight[0].ambient_color' : CAMEL_UNIFORM,'plight[0].diffuse_color' : CAMEL_UNIFORM,'plight[0].specular_color' : CAMEL_UNIFORM,'plight[0].position' : CAMEL_UNIFORM,'plight[1].ambient_color' : CAMEL_UNIFORM, 'plight[1].diffuse_color' : CAMEL_UNIFORM,'plight[1].specular_color' : CAMEL_UNIFORM,'plight[1].position' : CAMEL_UNIFORM,'positionIn' : CAMEL_ATTRIB, 'texCoordIn' : CAMEL_ATTRIB,'normalIn' : CAMEL_ATTRIB});
};

Camel.Alert = function(param) 
{
	alert(param);
	return param;
};

Camel.Log = function(param) 
{
	console.log(param);
	return param;
};

/**________________________________________________________________________
 * 
 * The Vec2 of Camel
 */
Camel.Vec2 = function(x, y) 
{
	this.vec = new Float32Array(2);
	this.setVector(x, y);
};
Camel.Vec2.prototype.loadVecFloat = function() 
{
	return this.vec;
};
Camel.Vec2.prototype.setVector = function(x, y) 
{
	this.vec[0] = x;
	this.vec[1] = y;
	return this;
};

/**________________________________________________________________________
 * 
 * The Vec3 of Camel
 */
Camel.Vec3 = function(x, y, z) 
{
	this.vec = new Float32Array(3);
	this.setVector(x, y, z);
};
Camel.Vec3.prototype.loadVecFloat = function() 
{
	return this.vec;
};
Camel.Vec3.prototype.setVector = function(x, y, z) 
{
	this.vec[0] = x;
	this.vec[1] = y;
	this.vec[2] = z;
	return this;
};

/**________________________________________________________________________
 * 
 * The Vec4 of Camel
 */
Camel.Vec4 = function(x, y, z, w) 
{
	this.vec = new Float32Array(4);
	this.setVector(x, y, z, w);
};
Camel.Vec4.prototype.loadVecFloat = function() 
{
	return this.vec;
};
Camel.Vec4.prototype.setVector = function(x, y, z, w) 
{
	this.vec[0] = x;
	this.vec[1] = y;
	this.vec[2] = z;
	this.vec[3] = w;
	return this;
};

/**________________________________________________________________________
 * 
 * The Perspective of Camel
 */
Camel.Perspective = function(angle, aspect, near, far)
{
	this.mx = new Float32Array(16);
	this.initialize(angle, aspect, near, far);
};
Camel.Perspective.prototype.loadMXFloat = function() 
{
	return this.mx;
};
Camel.Perspective.prototype.initialize = function(angle, aspect, near, far) 
{
	return this.integrate(angle, aspect, near, far);
};
Camel.Perspective.prototype.set = function(angle, aspect, near, far) 
{
	return this.integrate(angle, aspect, near, far);
};
Camel.Perspective.prototype.integrate = function(angle, aspect, near, far) 
{
	var tan = Math.tan(Math.degToRad(0.5*angle)) , 
		A = -(far+near)/(far-near) , 
		B = (-2*far*near)/(far-near);
	for(var i=0;i<16;i++)
		if(i==0) this.mx[i] = 0.5/tan;
		else if(i==5) this.mx[i] = 0.5*aspect/tan;	
		else if(i==10) this.mx[i] = A;	
		else if(i==11) this.mx[i] = -1;
		else if(i==14) this.mx[i] = B;
		else this.mx[i] = 0.0;
	return this;
};

/**________________________________________________________________________
 * 
 * The Camera of Camel
 */
Camel.Camera = function(eye, look, up) 
{
	this.eye = eye.loadVecFloat();		//: Camel::Vec3
	this.look = look.loadVecFloat();	//: Camel::Vec3 
	this.up = up.loadVecFloat(); 		//: Camel::Vec3
	this.mx = new Float32Array(16);
	this.integrate();
}; 
Camel.Camera.prototype.loadMXFloat = function() 
{
	return this.mx;
};
Camel.Camera.prototype.identity = function() 
{
	this.mx[0]=1.0;	this.mx[1]=0.0; this.mx[2]=0.0; this.mx[3]=0.0;
	this.mx[4]=0.0;	this.mx[5]=1.0; this.mx[6]=0.0; this.mx[7]=0.0;
	this.mx[8]=0.0;	this.mx[9]=0.0; this.mx[10]=1.0; this.mx[11]=0.0;
	this.mx[12]=0.0; this.mx[13]=0.0; this.mx[14]=0.0; this.mx[15]=1.0;
	return this;
};
Camel.Camera.prototype.integrate = function() 
{
	var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	eyex = this.eye[0],eyey = this.eye[1],eyez = this.eye[2],
	upx = this.up[0],upy = this.up[1],upz = this.up[2],
	lookx = this.look[0],looky = this.look[1],lookz = this.look[2];

	if (Math.abs(eyex - lookx) < CAMEL_MATH_EPSILON &&
		Math.abs(eyey - looky) < CAMEL_MATH_EPSILON &&
		Math.abs(eyez - lookz) < CAMEL_MATH_EPSILON) {
		return this.identity().loadMXFloat();
	}

	z0 = eyex - lookx;
	z1 = eyey - looky;
	z2 = eyez - lookz;

	len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;

	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if (!len) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	} else {
		len = 1 / len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}

	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;

	len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}

	this.mx[0] = x0;
	this.mx[1] = y0;
	this.mx[2] = z0;
	this.mx[3] = 0;
	this.mx[4] = x1;
	this.mx[5] = y1;
	this.mx[6] = z1;
	this.mx[7] = 0;
	this.mx[8] = x2;
	this.mx[9] = y2;
	this.mx[10] = z2;
	this.mx[11] = 0;
	this.mx[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	this.mx[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	this.mx[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	this.mx[15] = 1;

	return this;
};

Camel.GetHttpRequest = function() 
{
	this._suc = NULL;
	this._err = NULL;
	this._xhr = NULL;
	this._m = 'GET';
};

Camel.GetHttpRequest.prototype.addEventListener = function(e, callback, t) 
{
	switch(e) 
	{
		case 'error':
			this._err = callback;
			break;
		case 'ready':
		default:
			this._suc = callback;
			break;
	}
	return;
};

Camel.GetHttpRequest.prototype.getXHR = function() 
{
	return this._xhr;
};

Camel.GetHttpRequest.prototype.Url = function(URLRequest) 
{
	var ent = this;
	this._xhr = new XMLHttpRequest();
	this._xhr.open(this._m, URLRequest, TRUE);
	this._xhr.onreadystatechange = function() 
	{
		if(this.readyState == 4 && this.status == 200) 
		{
			ent._suc(this);
		}
		else if(this.status == 404) 
		{
			ent._err(this);
		}
	}
	this._xhr.send();
	return;
};

Camel.AssetManager = function(ImageExt, SoundExt, XhttpExt, VideoExt) {
	this.QueueType = [
		ImageExt, 
		SoundExt,
		XhttpExt,
		VideoExt, 
	];
	this.errorCount = 0;
	this.successCount = 0;
	this.AssetList = new Array();
};

Camel.AssetManager.prototype.getErrorNumber = function() 
{
	return this.errorCount;
};

Camel.AssetManager.prototype.getSuccessNumber = function() 
{
	return this.successCount;
};

Camel.AssetManager.prototype.getAssetList = function() 
{
	return this.AssetList;
};

Camel.AssetManager.prototype.isComplete = function() 
{
	return this.AssetList.length == (this.errorCount+this.successCount);
};

Camel.AssetManager.prototype.getProgress = function() 
{
	return (this.errorCount+this.successCount)*100/this.AssetList.length;
};

Camel.AssetManager.prototype.parseExt = function(Path) 
{
	var ExtensionRegular = /(?:\.([^.]+))?$/;
	return ExtensionRegular.exec(Path)[1];	
};

Camel.AssetManager.prototype.getType = function(Path) 
{
	this.extStr = this.parseExt(Path);
	var type = 0;
	for(var i=0;i<this.QueueType.length;i++) {
		if(this.QueueType[i].indexOf(this.extStr) != -1) {
			type = i;
			break;
		}
	}
	return type;
};

Camel.AssetManager.prototype.isQueued = function(Path) 
{
	var lim = this.AssetList.length;
	for(var i=0; i<lim; i++) {
		if(this.AssetList[i].Path == Path) {
			return i;
		}
	}
	return -1;
};

Camel.AssetManager.prototype.QueueFile = function(Path) 
{
	var isQueued = this.isQueued(Path);
	if(isQueued != -1)
		return;
	var FilePoint;
	var Type = this.getType(Path);
	switch(Type) {
		case CAMEL_QUEUE_IMAGE:
			FilePoint = new Image();
			break;
		case CAMEL_QUEUE_VIDEO:
			FilePoint = document.createElement("video");
			FilePoint.autoplay = TRUE;
			break;
		case CAMEL_QUEUE_SOUND:
			FilePoint = new Audio();
			break;
		case CAMEL_QUEUE_XHTTP:
			FilePoint = new Camel.GetHttpRequest();
			break;
		default:
			break;
	}
	this.AssetList.push(
		{
			Path:Path, 
			Asset:FilePoint, 
			Type:Type, 
			Ready:false, 
			Ext:this.extStr,
			isAsset:true,  
		}
	);
	this.extStr = null;
	return;
};

Camel.AssetManager.prototype.QueueDownloadFile = function(Index, Type) 
{		
	var File = this.AssetList[Index];
	var Manager = this;
	var ErrorEventFlag = "error";
	if(Type == CAMEL_QUEUE_SOUND 
	|| Type == CAMEL_QUEUE_VIDEO)
		var CompleteEventFlag = "canplaythrough";
	else if(Type == CAMEL_QUEUE_IMAGE) 
		var CompleteEventFlag = "load";
	else 
		var CompleteEventFlag = "ready";
	// Tracking Success State
	File.Asset.addEventListener(CompleteEventFlag, function() 
	{
		File.Ready = true;
		Manager.successCount += 1;
	}, false);
	// Tracking Failure State
	File.Asset.addEventListener(ErrorEventFlag, function() 
	{
		File.Ready = false;
		Manager.errorCount += 1;
	}, false);
	if(typeof(File.Asset.src) != 'undefined')
	{			
		File.Asset.src = File.Path;
	}
	else
	{
		File.Asset.Url(File.Path);
	}
	return;
};

Camel.AssetManager.prototype.QueueDownloadAll = function() 
{
	var lim = this.AssetList.length;
	for(var i=0; i<lim; i++) 
	{
		this.QueueDownloadFile(i, this.AssetList[i].Type);
	}
	return;
};

Camel.AssetManager.prototype.getAsset = function(Path) 
{
	var Index = this.isQueued(Path);
	if(Index != -1) 
		return this.AssetList[Index];
	else 
	{
		this.QueueFile(Path);
		var Type = this.getType(Path);
		this.QueueDownloadFile(this.AssetList.length-1, Type);
		return this.getAsset(Path);
	}
};

Camel.Scene = function(startCB, updateCB, renderCB, beforeRenderCB) 
{
	this.visible	= true;
	this.disable	= false;
	this.particleHolder = new Array(32);
	
	this.start = startCB;
	
	if(updateCB == UNSET) 
		this.update	= function(dt) 
		{
			for(var i=0;i<32;i++) 
			{
				if(this.particleHolder[i] == UNSET 
				|| this.particleHolder[i].disable 
				|| this.particleHolder[i].ontick == UNSET)
					continue;
				this.particleHolder[i].ontick(dt);
			}
		};
	else 
		this.ontick	= updateCB;
	
	if(renderCB == UNSET)
		this.render	= function(renderer) 
		{
			renderer.gl.uniformMatrix4fv(renderer.pMatrix, false, this.projection.loadMXFloat());
			renderer.gl.uniformMatrix4fv(renderer.vMatrix, false, this.camera.loadMXFloat());
			
			if(this.lightHolder != UNSET)
				for(var i=0;i<8;i++) 
				{
					if(this.lightHolder[i] == UNSET) 
						break;
					if(this.lightHolder[i].type == CAMEL_LIGHT_DIRECT) 
					{
						renderer.gl.uniform3fv(renderer.dlight_ambient_color, this.lightHolder[i].color.ambient.loadVecFloat());
						renderer.gl.uniform3fv(renderer.dlight_diffuse_color, this.lightHolder[i].color.ambient.loadVecFloat());
						renderer.gl.uniform3fv(renderer.dlight_specular_color, this.lightHolder[i].color.specular.loadVecFloat());
						renderer.gl.uniform3fv(renderer.dlight_vector, this.lightHolder[i].loadVecFloat());
					}
					else (this.lightHolder[i].type == CAMEL_LIGHT_POINT)
					{
						renderer.gl.uniform3fv(renderer.plight_ambient_color, this.lightHolder[i].color.ambient.loadVecFloat());
						renderer.gl.uniform3fv(renderer.plight_diffuse_color, this.lightHolder[i].color.ambient.loadVecFloat());
						renderer.gl.uniform3fv(renderer.plight_specular_color, this.lightHolder[i].color.specular.loadVecFloat());
						renderer.gl.uniform3fv(renderer.plight_vector, this.lightHolder[i].loadVecFloat());
					}
				}
			
			for(var i=0;i<32;i++) 
			{
				if(this.particleHolder[i] == UNSET 
				|| this.particleHolder[i].disable 
				|| !this.particleHolder[i].visible)
					continue;
					
				if(this.particleHolder[i].alpha < 1.0) 
				{
					renderer.gl.uniform1f(renderer.mat_alpha, this.particleHolder[i].alpha);
					renderer.gl.enable(renderer.gl.BLEND);
				}
				else
					renderer.gl.disable(renderer.gl.BLEND);
				
				renderer.gl.uniform1f(renderer.mat_shininess, this.particleHolder[i].shininess);
				renderer.gl.uniform3fv(renderer.mat_ambient_color, this.particleHolder[i].color.ambient.loadVecFloat());
				renderer.gl.uniform3fv(renderer.mat_diffuse_color, this.particleHolder[i].color.diffuse.loadVecFloat());
				renderer.gl.uniform3fv(renderer.mat_specular_color, this.particleHolder[i].color.specular.loadVecFloat());
				
				if(!this.particleHolder[i].cull)
					renderer.gl.enable(renderer.gl.CULL_FACE);	
				else 
					renderer.gl.disable(renderer.gl.CULL_FACE);
				
				renderer.gl.uniform1i(renderer.sampler, 0);
				if(this.particleHolder[i].map.diffuse != NULL) 
				{
					renderer.gl.activeTexture(renderer.gl.TEXTURE0);
					renderer.gl.bindTexture(renderer.gl.TEXTURE_2D, this.particleHolder[i].map.diffuse.Texture);
				}
				
				renderer.gl.uniformMatrix4fv(renderer.mMatrix, false, this.particleHolder[i].mx);

				renderer.gl.bindBuffer(renderer.gl.ARRAY_BUFFER, this.particleHolder[i].vertexBuffer);
				switch(renderer.inputLayout) 
				{
					case CAMEL_IL_TWO :
						renderer.gl.vertexAttribPointer(renderer.positionIn, 3, renderer.gl.FLOAT, false,4*(3+2),0);
						renderer.gl.vertexAttribPointer(renderer.texCoordIn, 2, renderer.gl.FLOAT, false,4*(3+2),3*4);
						break;
					case CAMEL_IL_THREE :
					default:
						renderer.gl.vertexAttribPointer(renderer.positionIn, 3, renderer.gl.FLOAT, false,4*(3+3+2),0);
						renderer.gl.vertexAttribPointer(renderer.normalIn, 3, renderer.gl.FLOAT, false,4*(3+3+2),3*4);
						renderer.gl.vertexAttribPointer(renderer.texCoordIn, 2, renderer.gl.FLOAT, false,4*(3+3+2),(3+3)*4);
						break;
				};

				renderer.gl.bindBuffer(renderer.gl.ELEMENT_ARRAY_BUFFER, this.particleHolder[i].indicesBuffer);
				renderer.gl.drawElements(renderer.gl.TRIANGLES, this.particleHolder[i].numberOfIndices, renderer.gl.UNSIGNED_INT, 0);
			}
		};
	else 
		this.render	= renderCB;
	
	this.beforeRender = beforeRenderCB;
};

Camel.Scene.prototype.Enable = function() 
{
	this.disable = false;
};

Camel.Scene.prototype.Disable = function() 
{
	this.disable = true;
};

Camel.Scene.prototype.addRenderer = function(renderer) 
{
	renderer.orderScene(this);
	return this;
};

Camel.Scene.prototype.pass = function(renderer) 
{
	if(this.visible && this.render != NULL && !this.disable) 
	{
		renderer.before();
		this.render(renderer);
	}
};

Camel.Scene.prototype.addChild = function(particle) 
{
	for(var i=0;i<32;i++) 
	{
		if(this.particleHolder[i] == UNSET) 
		{
			this.particleHolder[i] = particle;
			return particle;
		}
		else 
		{
			return;
		}
	}
};

Camel.Scene.prototype.addLight = function(light) 
{
	if(this.lightHolder == UNSET) 
	{
		this.lightHolder = new Array(8);
		this.lightHolder[0] = light;
		return light;
	};
	for(var i=0;i=8;i++) 
	{
		if(light.type == CAMEL_LIGHT_DIRECT 
		&& this.lightHolder[i].type == CAMEL_LIGHT_DIRECT) 
		{
			break;
		};
		if(this.lightHolder[i] == UNSET) 
		{
			this.lightHolder[i] = light;
			break;
		}
	}
};

/**________________________________________________________________________
 * 
 * The Mx44 of Camel
 * 
 * This is a implemental class.
 * 
 */
Camel.Mx44 = function() 
{
	this.mx = new Float32Array(16);
	
	// Initialize the matrix
	this.mx[0]=1.0;	this.mx[1]=0.0; this.mx[2]=0.0; this.mx[3]=0.0;
	this.mx[4]=0.0;	this.mx[5]=1.0; this.mx[6]=0.0; this.mx[7]=0.0;
	this.mx[8]=0.0;	this.mx[9]=0.0; this.mx[10]=1.0; this.mx[11]=0.0;
	this.mx[12]=0.0; this.mx[13]=0.0; this.mx[14]=0.0; this.mx[15]=1.0;
	
	this.loadMXFloat = function() 
	{
		return this.mx;
	};
	
	this.identity = function(m) 
	{
		if(m != undefined)
		{
			m = new Float32Array(16);
			m[0]=1.0;	m[1]=0.0; m[2]=0.0; m[3]=0.0;
			m[4]=0.0;	m[5]=1.0; m[6]=0.0; m[7]=0.0;
			m[8]=0.0;	m[9]=0.0; m[10]=1.0; m[11]=0.0;
			m[12]=0.0; m[13]=0.0; m[14]=0.0; m[15]=1.0;
			return m;
		}
		else 
		{
			this.mx[0]=1.0;	this.mx[1]=0.0; this.mx[2]=0.0; this.mx[3]=0.0;
			this.mx[4]=0.0;	this.mx[5]=1.0; this.mx[6]=0.0; this.mx[7]=0.0;
			this.mx[8]=0.0;	this.mx[9]=0.0; this.mx[10]=1.0; this.mx[11]=0.0;
			this.mx[12]=0.0; this.mx[13]=0.0; this.mx[14]=0.0; this.mx[15]=1.0;
			return this;
		}
	};
	
	this.translateZ = function(d) 
	{
		this.mx[14]+=d;
	};
	 
	this.translateY = function(d) 
	{
		this.mx[13]+=d;
	};
	
	this.translateX = function(d) 
	{
		this.mx[12]+=d;
	};
	
	this.translate = function(x, y, z) 
	{
		this.mx[12]+=x;
		this.mx[13]+=y;
		this.mx[14]+=z;
	};
	
	this.rotateX = function(angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv1=this.mx[1], mv5=this.mx[5], mv9=this.mx[9];
		this.mx[1]=this.mx[1]*c-this.mx[2]*s;
		this.mx[5]=this.mx[5]*c-this.mx[6]*s;
		this.mx[9]=this.mx[9]*c-this.mx[10]*s;

		this.mx[2]=this.mx[2]*c+mv1*s;
		this.mx[6]=this.mx[6]*c+mv5*s;
		this.mx[10]=this.mx[10]*c+mv9*s;
	};
	
	this.rotateY = function(angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv0=this.mx[0], mv4=this.mx[4], mv8=this.mx[8];
		this.mx[0]=c*this.mx[0]+s*this.mx[2];
		this.mx[4]=c*this.mx[4]+s*this.mx[6];
		this.mx[8]=c*this.mx[8]+s*this.mx[10];

		this.mx[2]=c*this.mx[2]-s*mv0;
		this.mx[6]=c*this.mx[6]-s*mv4;
		this.mx[10]=c*this.mx[10]-s*mv8;
	};

	this.rotateZ = function(angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv0=this.mx[0], mv4=this.mx[4], mv8=this.mx[8];
		this.mx[0]=c*this.mx[0]-s*this.mx[1];
		this.mx[4]=c*this.mx[4]-s*this.mx[5];
		this.mx[8]=c*this.mx[8]-s*this.mx[9];

		this.mx[1]=c*this.mx[1]+s*mv0;
		this.mx[5]=c*this.mx[5]+s*mv4;
		this.mx[9]=c*this.mx[9]+s*mv8;
	};
};

Camel.Transform = function() 
{
	this.x = 0.0;
	this.y = 0.0;
	this.z = 0.0;
	
	this.angleX = 0.0;
	this.angleY = 0.0;
	this.angleZ = 0.0;
	
	this.scaleX = 1.0;
	this.scaleY = 1.0;
	this.scaleZ = 1.0;
};

Camel.Geometry = function() 
{
	this.vertexBuffer = NULL;
	this.indicesBuffer = NULL;
	this.numberOfIndices = NULL;
	this.vertices = NULL;
	this.indices = NULL;

	this.createCell = function(size) 
	{
		this.vertices = [
			-1.0*size, -1.0*size, 0.0, 0.0, 0.0, 
			1.0*size, -1.0*size, 0.0, 1.0, 0.0, 
			1.0*size,  1.0*size, 0.0, 1.0, 1.0, 
			-1.0*size,  1.0*size, 0.0, 0.0, 1.0,  
		];
		this.indices = [
			0,1,2,
			0,2,3,
		];
		this.numberOfIndices = this.indices.length;
		return this;
	};
	
	this.setModel = function(model) 
	{
		model = JSON.parse(model.Asset.getXHR().responseText);
		this.vertices = model.vertices;
		this.indices = model.indices;
		this.numberOfIndices = this.indices.length;
		return this;
	};
};

Camel.Color = function() 
{
	this.cull = true;
	this.alpha = 1.0;
	this.shininess = 10.0;
	this.color = 
	{
		diffuse : new Camel.Vec3(
			(128/255).toFixed(2), 
			(128/255).toFixed(2), 
			(128/255).toFixed(2)
		), 
		ambient : new Camel.Vec3(
			(128/255).toFixed(2), 
			(128/255).toFixed(2), 
			(128/255).toFixed(2)
		), 
		specular : new Camel.Vec3(
			(255/255).toFixed(2), 
			(255/255).toFixed(2), 
			(255/255).toFixed(2)
		), 
	};
	
	/**
	 * Function allow developer set the alpha value
	 *  
	 * Parameters
	 * 		[value] which the developer want to setup to object.
	 * 
	 * @return self
	 */
	this.setAlpha = function(value) 
	{
		this.alpha = value/100;
		return this;
	};
	
	/**
	 * Function allow developer set the diffuse color 
	 * 
	 * Parameters
	 * 		[red] which the developer want to setup the red color value to the diffuse color.
	 * 		[green] which the developer want to setup the green color value to the diffuse color.
	 * 		[blue] which the developer want to setup the blue color value to the diffuse color.
	 * 
	 * @return self
	 */
	this.setDiffuse = function(red, green, blue) 
	{
		this.color.diffuse.vec[0] = (red/255).toFixed(2);
		this.color.diffuse.vec[1] = (green/255).toFixed(2);
		this.color.diffuse.vec[2] = (blue/255).toFixed(2);
		return this;
	};
	
	this.setAmbient = function(red, green, blue) 
	{
		this.color.ambient.vec[0] = (red/255).toFixed(2);
		this.color.ambient.vec[1] = (green/255).toFixed(2);
		this.color.ambient.vec[2] = (blue/255).toFixed(2);
		return this;
	};
	
	this.setSpecular = function(red, green, blue) 
	{
		this.color.specular.vec[0] = (red/255).toFixed(2);
		this.color.specular.vec[1] = (green/255).toFixed(2);
		this.color.specular.vec[2] = (blue/255).toFixed(2);
		return this;
	};
	
	this.set2Side = function(value) 
	{
		this.cull = value;
		return this;
	};
	
	/**
	 * Get the alpha value
	 */
	this.getAlpha = function() 
	{
		return this.alpha;
	};
	
	/**
	 * Set Shininess
	 */
	this.setShininess = function(value) 
	{
		this.shininess = value;
		return this;
	};
};

Camel.Light = function(x, y, z) 
{
	this.__proto__ = new Camel.Color();	
	this.__proto__.__proto__ =  new Camel.Vec3(x, y, z);
};

Camel.PointLight = function(x, y, z) 
{
	this.__proto__ = new Camel.Light(x, y, z);
	
	this.type = CAMEL_LIGHT_POINT;
};

Camel.DirectLight = function(x, y, z) 
{
	this.__proto__ = new Camel.Light(x, y, z);
	
	this.type = CAMEL_LIGHT_DIRECT;
};

Camel.Material = function() 
{
	this.__proto__ = new Camel.Color();
	
	this.map = {
		diffuse : NULL, 
		ambient : NULL, 
		specular : NULL, 
	};
	
	this.setDiffuseMap = function(map) 
	{
		this.map.diffuse = map;
		return this;
	};
	
	this.setAmbientMap = function(map) 
	{
		this.map.ambient = map;
		return this;
	};
	
	this.setSpecularMap = function(map) 
	{
		this.map.specular = map;
		return this;
	};
};

Camel.Particle = function() 
{
	this.__proto__ = new Camel.Mx44();
	this.__proto__.__proto__ = new Camel.Transform();	
	this.__proto__.__proto__.__proto__ = new Camel.Geometry();
	this.__proto__.__proto__.__proto__.__proto__ = new Camel.Material();
	
	this.visible = true;
	this.disable = false;
	this.freezed = false;
	
	this.hide = function() 
	{
		this.visible = false;
		return this;
	};
	
	this.show = function() 
	{
		this.visible = true;
		return this;
	};
	
	this.live = function() 
	{
		this.disable = false;
		return this;
	};
	
	this.dead = function() 
	{
		this.disable = true;
		return this;
	};
	
	this.lock = function() 
	{
		this.freezed = true;
		return this;
	};
	
	this.free = function() 
	{
		this.freezed = false;
		return this;
	};
	
	this.onTick = function(callback) 
	{
		this.ontick = callback;
	};
};

Camel.Cell = function() 
{
	this.__proto__ = new Camel.Particle();
	
	this.createCell(10);
};

Camel.Model = function(assetModel) 
{
	this.__proto__ = new Camel.Particle();
	
	this.setModel(assetModel);
};



















Camel.mx4 = { 
	/**
	 * Create the new Matrix4x4.
	 * 
	 * Return the new matrix4x4
	 */
	create : function() 
	{
		return [1, 0, 0, 0, 
				0, 1, 0, 0, 
				0, 0, 1, 0, 
				0, 0, 0, 1];
	},
	
	/**
	 * Create the new Projection Matrix4x4
	 * 
	 * Return the new matrix of projection
	 */
	perspective : function(angle, a, zMin, zMax) 
	{
		var tan=Math.tan(Math.degToRad(0.5*angle)),
			A=-(zMax+zMin)/(zMax-zMin),
			B=(-2*zMax*zMin)/(zMax-zMin);

	    return [
			0.5/tan,0 ,			0, 0,
			0, 		0.5*a/tan,	0, 0,
			0, 		0,         	A, -1,
			0,		0,			B, 0
	    ];
	}, 
	lookAt : function (out, eye, at, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        atx = at[0],
	        aty = at[1],
	        atz = at[2];

	    if (Math.abs(eyex - atx) < CAMEL_MATH_EPSILON &&
	        Math.abs(eyey - aty) < CAMEL_MATH_EPSILON &&
	        Math.abs(eyez - atz) < CAMEL_MATH_EPSILON) {
	        return Camel.mx4.identity(out);
	    }

	    z0 = eyex - atx;
	    z1 = eyey - aty;
	    z2 = eyez - atz;

	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;

	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }

	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;

	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }

	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;

	    return out;
	},
	
	reset : function(m) 
	{
		m[0]=1, m[1]=0, m[2]=0, m[3]=0,
		m[4]=0, m[5]=1, m[6]=0, m[7]=0,
		m[8]=0, m[9]=0, m[10]=1, m[11]=0,
		m[12]=0, m[13]=0, m[14]=0, m[15]=1;
	}, 
	
	identity : function(m) 
	{
		if(m != undefined)
			var m = new Array(16);
		m[0]=1, m[1]=0, m[2]=0, m[3]=0,
		m[4]=0, m[5]=1, m[6]=0, m[7]=0,
		m[8]=0, m[9]=0, m[10]=1, m[11]=0,
		m[12]=0, m[13]=0, m[14]=0, m[15]=1;
		return m;
	}, 
	
	rotateX: function(m, angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv1=m[1], mv5=m[5], mv9=m[9];
		m[1]=m[1]*c-m[2]*s;
		m[5]=m[5]*c-m[6]*s;
		m[9]=m[9]*c-m[10]*s;

		m[2]=m[2]*c+mv1*s;
		m[6]=m[6]*c+mv5*s;
		m[10]=m[10]*c+mv9*s;
	},
	rotateY: function(m, angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv0=m[0], mv4=m[4], mv8=m[8];
		m[0]=c*m[0]+s*m[2];
		m[4]=c*m[4]+s*m[6];
		m[8]=c*m[8]+s*m[10];

		m[2]=c*m[2]-s*mv0;
		m[6]=c*m[6]-s*mv4;
		m[10]=c*m[10]-s*mv8;
	},

	rotateZ: function(m, angle) 
	{
		var c=Math.cos(angle);
		var s=Math.sin(angle);
		var mv0=m[0], mv4=m[4], mv8=m[8];
		m[0]=c*m[0]-s*m[1];
		m[4]=c*m[4]-s*m[5];
		m[8]=c*m[8]-s*m[9];

		m[1]=c*m[1]+s*mv0;
		m[5]=c*m[5]+s*mv4;
		m[9]=c*m[9]+s*mv8;
	},
	
	translateZ: function(m, t) 
	{
		m[14]+=t;
	},
	 
	translateY: function(m, t){
		m[13]+=t;
	},
	 
	translateX: function(m, t){
		m[12]+=t;
	}
};