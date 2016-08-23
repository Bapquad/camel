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
	CAMEL_RENDERER_WORLD = EMPTY, 
	CAMEL_RENDERER_STANDARD = EMPTY, 
	CAMEL_RENDERER_CAREM = EMPTY;
var CAMEL_LIGHT_DIRECT = 0, 
	CAMEL_LIGHT_POINT = 1;
var CAMEL_STRIKE_ATTRIB = 0, 
	CAMEL_OFFSET_ATTRIB = 0;
	
var CAMEL_IS_OPERA = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;	// Opera 8.0+
var CAMEL_IS_FIREFOX = typeof InstallTrigger !== 'undefined';	// Firefox 1.0+
var CAMEL_IS_SAFARI = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;	// At least Safari 3+: "[object HTMLElementConstructor]"
var CAMEL_IS_IE = /*@cc_on!@*/false || !!document.documentMode;	// Internet Explorer 6-11
var CAMEL_IS_EDGE = !CAMEL_IS_IE && !!window.StyleMedia;	// Edge 20+
var CAMEL_IS_CHROME = !!window.chrome && !!window.chrome.webstore;		// Chrome 1+
var CAMEL_IS_BLINK = (CAMEL_IS_CHROME || CAMEL_IS_OPERA) && !!window.CSS;	// Blink engine detection
var CAMEL_DEVICE_ANDROID = /android/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_BLACKBERRY = /blackberry/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_IOS =/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_IPHONE = /iphone/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_IPAD = /ipad/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_IPOD = /ipod/i.test(navigator.userAgent.toLowerCase());
var CAMEL_IS_OPERAMINI = navigator.userAgent.match(/Opera Mini/i);
var CAMEL_DEVICE_WINDOWSPHONE = /windows phone/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_WEBOS = /webos/i.test(navigator.userAgent.toLowerCase());
var CAMEL_DEVICE_MOBILE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
	
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

Camel.Digital = /(^Digit)|(^Numpad)|(^Delete$)|(^Period$)|(^Backspace$)|(^ArrowRight$)|(^ArrowLeft$)|(^F5$)/;

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
	var scene = EMPTY;
	switch(typeof renderer) 
	{
		case CAMEL_TYPE_FUNC:
			scene = new Camel.Scene(renderer, updateCB, renderCB, beforeRenderCB);
			scene.addRenderer(CAMEL_RENDERER_WORLD);
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
			p = gl.createProgram();
		
		var lim = shaders.length;
		for(var i=0;i<lim;i++)
			gl.attachShader(p, shaders[i]);
		
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
			for(x in constants) 
			{
				switch(constants[x]) 
				{
					case CAMEL_ATTRIB:
						renderer[x] = gl.getAttribLocation(p, x);
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
	if(asset.Texture == UNSET) 
	{
		var t = this.gl.createTexture();
		this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, TRUE);
		this.gl.bindTexture(this.gl.TEXTURE_2D, t);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, asset.Asset);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
		this.gl.generateMipmap(this.gl.TEXTURE_2D);
		this.gl.bindTexture(this.gl.TEXTURE_2D, NULL);
		asset.Texture = t;
	}
	return asset;
};

Camel.prototype.getTexture = function(asset) 
{
	if(asset.Texture == UNSET)
		return this.createTexture(asset);
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
	this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
	this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
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
			if(this.renderHolder[i].sceneHolder[j] != UNSET) 
				this.renderHolder[i].sceneHolder[j].update(dt);

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
	var engine = this;
	var vs = 0;
	var fs = 0;
	var c = 0;
	
	c = [
			CAMEL_SHADER_VERT, 
			'attribute vec3 positionIn;', 
			'attribute vec2 texCoordIn;', 
			'uniform mat4 pMatrix;', 
			'uniform mat4 vMatrix;', 
			'uniform mat4 mMatrix;', 
			'varying vec2 texCoordOut;', 
			'void main(void)', 
			'{', 
			'	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);', 
			'	texCoordOut = texCoordIn;', 
			'}'
		];
	vs = engine.getGLSL(c);
	c =	[
			CAMEL_SHADER_FRAGMENT, 
			'precision mediump float;', 
			'uniform sampler2D sampler;', 
			'uniform float mat_alpha;', 
			'varying vec2 texCoordOut;', 
			'void main(void)', 
			'{', 
			'	vec3 color = vec3(texture2D(sampler, texCoordOut));', 
			'	gl_FragColor = vec4(color, mat_alpha);', 
			'}'
		];
	fs = engine.getGLSL(c);
	CAMEL_RENDERER_TEXTURE = this.buildRender( 
		[vs,fs], 
		{
			'pMatrix' : CAMEL_UNIFORM, 
			'vMatrix' : CAMEL_UNIFORM, 
			'mMatrix' : CAMEL_UNIFORM, 
			'sampler' : CAMEL_UNIFORM, 
			'mat_alpha' : CAMEL_UNIFORM, 
			'positionIn' : CAMEL_ATTRIB, 
			'texCoordIn' : CAMEL_ATTRIB,
		}
	);
	
	c = [
			CAMEL_SHADER_VERT, 
			'attribute vec3 positionIn;', 
			'attribute vec3 normalIn;', 
			'attribute vec2 texCoordIn;', 
			'uniform mat4 pMatrix;', 
			'uniform mat4 vMatrix;', 
			'uniform mat4 mMatrix;', 
			'varying vec2 texCoordOut;', 
			'varying vec3 normalOut;', 
			'void main(void)', 
			'{', 
			'	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);', 
			'	normalOut = normalIn;', 
			'	texCoordOut = texCoordIn;', 
			'}'
		];
	vs = engine.getGLSL(c);
	c =	[
			CAMEL_SHADER_FRAGMENT, 
			'precision mediump float;', 
			'uniform sampler2D sampler;', 
			'uniform float mat_alpha;', 
			'varying vec2 texCoordOut;', 
			'varying vec3 normalOut;', 
			'void main(void)', 
			'{', 
			'	vec3 color = vec3(texture2D(sampler, texCoordOut));', 
			'	gl_FragColor = vec4(color, mat_alpha);', 
			'}'
		];
	fs = engine.getGLSL(c);
	CAMEL_RENDERER_STANDARD = this.buildRender( 
		[vs,fs], 
		{
			'pMatrix' : CAMEL_UNIFORM, 
			'vMatrix' : CAMEL_UNIFORM, 
			'mMatrix' : CAMEL_UNIFORM, 
			'sampler' : CAMEL_UNIFORM, 
			'mat_alpha' : CAMEL_UNIFORM, 
			'positionIn' : CAMEL_ATTRIB, 
			'texCoordIn' : CAMEL_ATTRIB, 
			'normalIn' : CAMEL_ATTRIB
		}
	);
	
	c = [
			CAMEL_SHADER_VERT, 
			'attribute vec3 positionIn;', 
			'attribute vec2 texCoordIn;', 
			'uniform mat4 pMatrix;', 
			'uniform mat4 vMatrix;', 
			'uniform mat4 mMatrix;', 
			'varying vec2 texCoordOut;', 
			'uniform vec4 maskart;', 
			'void main(void)', 
			'{', 
			'	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);', 
			'	texCoordOut = vec2(texCoordIn.s*maskart.x+(maskart.x*maskart.z), texCoordIn.t*maskart.y+(maskart.y*maskart.w));', 
			'}'
		]; 
	vs = engine.getGLSL(c);
	c =	[
			CAMEL_SHADER_FRAGMENT, 
			'precision mediump float;', 
			'uniform sampler2D sampler;', 
			'varying vec2 texCoordOut;', 
			'void main(void)', 
			'{', 
			'	gl_FragColor = texture2D(sampler, texCoordOut);', 
			'}'
		];
	fs = engine.getGLSL(c); 
	CAMEL_RENDERER_CAREM = this.buildRender( 
		[vs,fs], 
		{ 
			'pMatrix' : CAMEL_UNIFORM, 
			'vMatrix' : CAMEL_UNIFORM, 
			'mMatrix' : CAMEL_UNIFORM, 
			'sampler' : CAMEL_UNIFORM, 
			'maskart' : CAMEL_UNIFORM, 
			'positionIn' : CAMEL_ATTRIB, 
			'texCoordIn' : CAMEL_ATTRIB, 
		}
	);
	
	if(CAMEL_DEVICE_MOBILE) 
	{
		return;
	}
	
	c = [
			CAMEL_SHADER_VERT, 
			'attribute vec3 positionIn;', 
			'attribute vec3 normalIn;', 
			'attribute vec2 texCoordIn;', 
			'uniform mat4 pMatrix;', 
			'uniform mat4 vMatrix;', 
			'uniform mat4 mMatrix;', 
			'varying vec2 texCoordOut;', 
			'varying vec3 normalOut;', 
			'varying vec3 viewOut;', 
			'void main(void)', 
			'{', 
			'	gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);', 
			'	texCoordOut = texCoordIn;','	normalOut = vec3(mMatrix * vec4(normalIn, 0.0));', 
			'	viewOut = vec3(vMatrix * mMatrix * vec4(positionIn, 1.0));', 
			'}'
		]; 
	vs = engine.getGLSL(c);
	c = [
			CAMEL_SHADER_FRAGMENT, 
			'precision mediump float;', 
			'uniform sampler2D sampler;', 
			'varying vec2 texCoordOut;', 
			'varying vec3 normalOut;', 
			'varying vec3 viewOut;', 
			'struct PLight ', 
			'{', 
			'	vec3 ambient_color;', 
			'	vec3 diffuse_color;', 
			'	vec3 specular_color;', 
			'	vec3 position;', 
			'};', 
			'uniform vec3 dlight_ambient_color;', 
			'uniform vec3 dlight_diffuse_color;', 
			'uniform vec3 dlight_specular_color;', 
			'uniform vec3 dlight_vector;', 
			'uniform PLight plight[7];', 
			'uniform vec3 mat_ambient_color;', 
			'uniform vec3 mat_diffuse_color;', 
			'uniform vec3 mat_specular_color;', 
			'uniform float mat_shininess;', 
			'uniform float mat_alpha;', 
			'void main(void)', 
			'{', 
			'	vec3 color = vec3(texture2D(sampler, texCoordOut));', 
			'	vec3 ambient = dlight_ambient_color * mat_ambient_color;', 
			'	vec3 diffuse = dlight_diffuse_color * mat_diffuse_color * max(0.0, dot(normalOut, dlight_vector));', 
			'	vec3 Eye = normalize(viewOut);', 
			'	vec3 N = reflect(dlight_vector, normalOut);', 
			'	vec3 specular = dlight_specular_color * mat_specular_color * pow(max(dot(N, Eye), 0.0), mat_shininess);', 
			'	vec3 light = ambient + diffuse + specular;', 
			'	gl_FragColor = vec4(color*light, mat_alpha);', 
			'}'
		]; 
	fs = engine.getGLSL(c);
	CAMEL_RENDERER_WORLD = this.buildRender(
		[vs,fs], 
		{
			'pMatrix' : CAMEL_UNIFORM, 
			'vMatrix' : CAMEL_UNIFORM, 
			'mMatrix' : CAMEL_UNIFORM, 
			'sampler' : CAMEL_UNIFORM, 
			'mat_alpha' : CAMEL_UNIFORM, 
			'mat_shininess' : CAMEL_UNIFORM, 
			'mat_diffuse_color' : CAMEL_UNIFORM, 
			'mat_ambient_color' : CAMEL_UNIFORM, 
			'mat_specular_color' : CAMEL_UNIFORM, 
			'dlight_ambient_color' : CAMEL_UNIFORM, 
			'dlight_diffuse_color' : CAMEL_UNIFORM, 
			'dlight_specular_color' : CAMEL_UNIFORM, 
			'dlight_vector' : CAMEL_UNIFORM, 
			'plight[0].ambient_color' : CAMEL_UNIFORM, 
			'plight[0].diffuse_color' : CAMEL_UNIFORM, 
			'plight[0].specular_color' : CAMEL_UNIFORM, 
			'plight[0].position' : CAMEL_UNIFORM, 
			'plight[1].ambient_color' : CAMEL_UNIFORM, 
			'plight[1].diffuse_color' : CAMEL_UNIFORM, 
			'plight[1].specular_color' : CAMEL_UNIFORM, 
			'plight[1].position' : CAMEL_UNIFORM, 
			'positionIn' : CAMEL_ATTRIB, 
			'texCoordIn' : CAMEL_ATTRIB, 
			'normalIn' : CAMEL_ATTRIB
		}
	);
	
	return;
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
	x = x || 0.0;
	y = y || 0.0;

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
Camel.Vec2.prototype.clone = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] = v.vec[0];
		this.vec[1] = v.vec[1];
		return this;
	}
	else 
		return new Camel.Vec2(this.vec[0], this.vec[1]);
};
Camel.Vec2.prototype.add = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] += v.vec[0];
		this.vec[1] += v.vec[1];
	}
	return this;
};
Camel.Vec2.prototype.subtract = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] -= v.vec[0];
		this.vec[1] -= v.vec[1];
	}
	return this;
};
Camel.Vec2.prototype.multiply = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= v.vec[0];
		this.vec[1] *= v.vec[1];
	}
	return this;
};
Camel.Vec2.prototype.divide = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] /= v.vec[0];
		this.vec[1] /= v.vec[1];
	}
	return this;
};
Camel.Vec2.prototype.scale = function(value) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= value;
		this.vec[1] *= value;
	}
	return this;
};
Camel.Vec2.prototype.sqrtLen = function() 
{
	return this.vec[0]*this.vec[0] + this.vec[1]*this.vec[1];
};
Camel.Vec2.prototype.length = function() 
{
	return Math.sqrt(this.sqrtLen());
};
Camel.Vec2.prototype.sqrtDist = function(v) 
{
	if(v != UNSET) 
	{
		var x = v.vec[0]-this.vec[0], 
			y = v.vec[1]-this.vec[1];
		return x*x + y*y;
	}
	else 
		return NULL;
};
Camel.Vec2.prototype.distance = function(v) 
{
	if(v != UNSET)
		return Math.sqrt(this.sqrtDist(v));
	else 
		return NULL;
};
Camel.Vec2.prototype.symmetry = function(x, y) 
{
	x = x || 1.0;
	y = y || 1.0;
	this.vec[0] *= (-1)*x;
	this.vec[1] *= (-1)*y;
	return this;
};
Camel.Vec2.prototype.inverse = function() 
{
	this.vec[0] = 1.0/this.vec[0];
	this.vec[1] = 1.0/this.vec[1];
	return this;
};
Camel.Vec2.prototype.normalize = function(out) 
{
	var v=this;
	if(out != UNSET)
		v = out;
	if(v.sqrtLen() > 0) 
	{
		var l = 1 / v.length();
		return new Camel.Vec2(v.vec[0]*l, v.vec[1]*l);
	}
	return NULL;
};
Camel.Vec2.prototype.dot = function(v) 
{
	if(v != UNSET) 
		return this.vec[0] * v.vec[0] + 
			   this.vec[1] * v.vec[1];
	else 
		return NULL;
};
Camel.Vec2.prototype.cross = function(v) 
{
	if(v != UNSET) 
	{
		var z = this.vec[0] * v.vec[1] - this.vec[1] * v.vec[0];
		return new Camel.Vec3(0.0, 0.0, z);
	}
	else 
		return NULL;
};
Camel.Vec2.prototype.lerp = function(v, t) 
{
	if(v == UNSET || t == UNSET) 
		return NULL;
	else
	{
		var x = this.vec[0], 
			y = this.vec[1];
		return new Camel.Vec2(x+t * (v.vec[0]-x), 
							  y+t * (v.vec[1]-y));
	} 
};
Camel.Vec2.prototype.random = function(scale) 
{
	scale = scale || 1.0;
	var r = Math.random() * 2.0 * Math.PI;
	this.vec[0] = Math.cos(r) * scale;
	this.vec[1] = Math.sin(r) * scale;
	return this;
};
Camel.Vec2.prototype.transformMat2 = function(m) 
{
	if(m != UNSET) 
	{
		var x = this.vec[0], 
			y = this.vec[1];
		this.vec[0] = m.mat[0] * x + m.mat[2] * y;
		this.vec[1] = m.mat[1] * x + m.mat[3] * y;
	}
	return this;
};
Camel.Vec2.prototype.transformMat2d = function(m) 
{
	if(m != UNSET) 
	{
		var x = this.vec[0], 
			y = this.vec[1];
		this.vec[0] = m.mat[0] * x + m.mat[2] * y + m.mat[4];
		this.vec[1] = m.mat[1] * x + m.mat[3] * y + m.mat[5];
	}
	return this;
};
Camel.Vec2.prototype.transformMat3 = function(m) 
{
	if(m != UNSET) 
	{
		var x = this.vec[0], 
			y = this.vec[1];
		this.vec[0] = m.mat[0] * x + m.mat[3] * y + m.mat[6];
		this.vec[1] = m.mat[1] * x + m.mat[4] * y + m.mat[7];
	}
	return this;
};
Camel.Vec2.prototype.transformMat4 = function(m) 
{
	if(m != UNSET) 
	{
		var x = this.vec[0], 
			y = this.vec[1];
		this.vec[0] = m.mat[0] * x + m.mat[4] * y + m.mat[12];
		this.vec[1] = m.mat[1] * x + m.mat[5] * y + m.mat[13];
	}
	return this;
};
Camel.Vec2.prototype.toString = function() 
{
	return 'vec2('+this.vec[0].toString()+', '+this.vec[1].toString()+')';
};
Camel.Vec2.prototype.instanceOf = function() 
{
	return Camel.Vec2.toString();
};
Camel.Vec2.toString = function() 
{
	return 'Camel.Vec2';
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
Camel.Vec3.prototype.clone = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] = v.vec[0];
		this.vec[1] = v.vec[1];
		this.vec[2] = v.vec[2];
		return this;
	}
	else 
		return new Camel.Vec3(this.vec[0], this.vec[1], this.vec[2]);
};
Camel.Vec3.prototype.add = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] += v.vec[0];
		this.vec[1] += v.vec[1];
		this.vec[2] += v.vec[2];
	}
	return this;
};
Camel.Vec3.prototype.subtract = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] -= v.vec[0];
		this.vec[1] -= v.vec[1];
		this.vec[2] -= v.vec[2];
	}
	return this;
};
Camel.Vec3.prototype.multiply = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= v.vec[0];
		this.vec[1] *= v.vec[1];
		this.vec[2] *= v.vec[2];
	}
	return this;
};
Camel.Vec3.prototype.divide = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] /= v.vec[0];
		this.vec[1] /= v.vec[1];
		this.vec[2] /= v.vec[2];
	}
	return this;
};
Camel.Vec3.prototype.scale = function(value) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= value;
		this.vec[1] *= value;
		this.vec[2] *= value;
	}
	return this;
};
Camel.Vec3.prototype.sqrtLen = function() 
{
	return this.vec[0]*this.vec[0] + this.vec[1]*this.vec[1] + this.vec[2]*this.vec[2];
};
Camel.Vec3.prototype.length = function() 
{
	return Math.sqrt(this.sqrtLen());
};
Camel.Vec3.prototype.sqrtDist = function(v) 
{
	if(v != UNSET) 
	{
		var x = v.vec[0]-this.vec[0], 
			y = v.vec[1]-this.vec[1], 
			z = v.vec[2]-this.vec[2];
		return x*x + y*y + z*z;
	}
	else 
		return NULL;
};
Camel.Vec3.prototype.distance = function(v) 
{
	if(v != UNSET)
		return Math.sqrt(this.sqrtDist(v));
	else 
		return NULL;
};
Camel.Vec3.prototype.symmetry = function(x, y, z) 
{
	x = x || 1.0;
	y = y || 1.0;
	z = z || 1.0;
	this.vec[0] *= (-1)*x;
	this.vec[1] *= (-1)*y;
	this.vec[2] *= (-1)*z;
	return this;
};
Camel.Vec3.prototype.inverse = function() 
{
	this.vec[0] = 1.0/this.vec[0];
	this.vec[1] = 1.0/this.vec[1];
	this.vec[2] = 1.0/this.vec[2];
	return this;
};
Camel.Vec3.prototype.normalize = function(out) 
{
	var v = this;
	if(out != UNSET)
		v = out;
	if(v.sqrtLen() > 0) 
	{
		var l = 1 / v.length();
		return new Camel.Vec3(v.vec[0]*l, v.vec[1]*l, v.vec[2]*l);
	}
	return NULL;
};
Camel.Vec3.prototype.dot = function(v) 
{
	if(v != UNSET) 
		return this.vec[0] * v.vec[0] + 
			   this.vec[1] * v.vec[1] + 
			   this.vec[2] * v.vec[2];
	else 
		return NULL;
};
Camel.Vec3.prototype.cross = function(v) 
{
	if(v != UNSET) 
	{
		var ax = this.vec[0], ay = this.vec[1], az = this.vec[2], bx = v.vec[0], by = v.vec[1], bz = v.vec[2];
		return new Camel.Vec3(ay * bz - az * by, 
							  az * bx - ax * bz, 
							  ax * by - ay * bx);
	}
	else 
		return NULL;
};
Camel.Vec3.prototype.lerp = function(v, t) 
{
	if(v == UNSET || t == UNSET) 
		return NULL;
	else
	{
		var x = this.vec[0], 
			y = this.vec[1], 
			z = this.vec[2];
		return new Camel.Vec3(x+t * (v.vec[0]-x), 
							  y+t * (v.vec[1]-y),
							  z+t * (v.vec[2]-z));
	} 
};
/**
 * Performs a hermite interpolation with two control points
 */
Camel.Vec3.prototype.hermite = function (a, b, c, d, t) 
{
	var factorTimes2 = t * t,
		f1 = factorTimes2 * (2 * t - 3) + 1,
		f2 = factorTimes2 * (t - 2) + t,
		f3 = factorTimes2 * (t - 1),
		f4 = factorTimes2 * (3 - 2 * t);
	this.vec[0] = a[0] * f1 + b[0] * f2 + c[0] * f3 + d[0] * f4;
	this.vec[1] = a[1] * f1 + b[1] * f2 + c[1] * f3 + d[1] * f4;
	this.vec[2] = a[2] * f1 + b[2] * f2 + c[2] * f3 + d[2] * f4;
	return this;
};
/**
 * Performs a bezier interpolation with two control points
 */
Camel.Vec3.prototype.bezier = function (a, b, c, d, t) 
{
	var inverseFactor = 1 - t,
		inverseFactorTimesTwo = inverseFactor * inverseFactor,
		factorTimes2 = t * t,
		f1 = inverseFactorTimesTwo * inverseFactor,
		f2 = 3 * t * inverseFactorTimesTwo,
		f3 = 3 * factorTimes2 * inverseFactor,
		f4 = factorTimes2 * t;
	this.vec[0] = a[0] * f1 + b[0] * f2 + c[0] * f3 + d[0] * f4;
	this.vec[1] = a[1] * f1 + b[1] * f2 + c[1] * f3 + d[1] * f4;
	this.vec[2] = a[2] * f1 + b[2] * f2 + c[2] * f3 + d[2] * f4;
	return this;
};
Camel.Vec3.prototype.random = function(scale) 
{
	scale = scale || 1.0;
	var r = Math.random() * 2.0 * Math.PI, 
		z = (Math.random() * 2.0) - 1.0, 
		s = Math.sqrt(1.0-z*z) * scale;
	this.vec[0] = Math.cos(r) * s;
	this.vec[1] = Math.sin(r) * s;
	this.vec[2] = z * scale;
	return this;
};
Camel.Vec3.prototype.transformMat3 = function(m) 
{
	var x = this.vec[0], 
		y = this.vec[1], 
		z = this.vec[2];
	this.vec[0] = x * m.mat[0] + y * m.mat[3] + z * m.mat[6];
	this.vec[1] = x * m.mat[1] + y * m.mat[4] + z * m.mat[7];
	this.vec[2] = x * m.mat[2] + y * m.mat[5] + z * m.mat[8];
	return this;
};
Camel.Vec3.prototype.transformMat4 = function(m) 
{
	var x = this.vec[0], 
		y = this.vec[1], 
		z = this.vec[2],
		w = m.mat[3] * x + m.mat[7] * y + m.mat[11] * z + m.mat[15];
	w = w || 1.0;
	this.vec[0] = (m.mat[0] * x + m.mat[4] * y +  m.mat[8] * z + m.mat[12]) / w;
	this.vec[1] = (m.mat[1] * x + m.mat[5] * y +  m.mat[9] * z + m.mat[13]) / w;
	this.vec[2] = (m.mat[2] * x + m.mat[6] * y + m.mat[10] * z + m.mat[14]) / w;
	return this;
};
Camel.Vec3.prototype.transformQuat = function(q) {
	// benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
	var x = this.vec[0], 
		y = this.vec[1], 
		z = this.vec[2],
		qx = q.quat[0], qy = q.quat[1], qz = q.quat[2], qw = q.quat[3],
		// calculate quat * vec
		ix = qw * x + qy * z - qz * y,
		iy = qw * y + qz * x - qx * z,
		iz = qw * z + qx * y - qy * x,
		iw = -qx * x - qy * y - qz * z;
	// calculate result * inverse quat
	this.vec[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	this.vec[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	this.vec[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	return this;
};
Camel.Vec3.prototype.angle = function(v) 
{
	var tmpA = this.normalize(), 
		tmpB = this.normalize(v);
	
	var cosine = tmpA.dot(tmpB);

	if(cosine > 1.0)
		return 0;
	else
		return Math.acos(cosine);
};
Camel.Vec3.prototype.toString = function() 
{
	return 'vec3('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+')';
};
Camel.Vec3.prototype.instanceOf = function() 
{
	return Camel.Vec3.toString();
};
Camel.Vec3.toString = function() 
{
	return 'Camel.Vec3';
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
Camel.Vec4.prototype.clone = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] = v.vec[0];
		this.vec[1] = v.vec[1];
		this.vec[2] = v.vec[2];
		this.vec[3] = v.vec[3];
		return this;
	}
	else 
		return new Camel.Vec4(this.vec[0], this.vec[1], this.vec[2], this.vec[3]);
};
Camel.Vec4.prototype.add = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] += v.vec[0];
		this.vec[1] += v.vec[1];
		this.vec[2] += v.vec[2];
		this.vec[3] += v.vec[3];
	}
	return this;
};
Camel.Vec4.prototype.subtract = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] -= v.vec[0];
		this.vec[1] -= v.vec[1];
		this.vec[2] -= v.vec[2];
		this.vec[3] -= v.vec[3];
	}
	return this;
};
Camel.Vec4.prototype.multiply = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= v.vec[0];
		this.vec[1] *= v.vec[1];
		this.vec[2] *= v.vec[2];
		this.vec[3] *= v.vec[3];
	}
	return this;
};
Camel.Vec4.prototype.divide = function(v) 
{
	if(v != UNSET) 
	{
		this.vec[0] /= v.vec[0];
		this.vec[1] /= v.vec[1];
		this.vec[2] /= v.vec[2];
		this.vec[3] /= v.vec[3];
	}
	return this;
};
Camel.Vec4.prototype.scale = function(value) 
{
	if(v != UNSET) 
	{
		this.vec[0] *= value;
		this.vec[1] *= value;
		this.vec[2] *= value;
		this.vec[3] *= value;
	}
	return this;
};
Camel.Vec4.prototype.sqrtLen = function() 
{
	return this.vec[0]*this.vec[0] + this.vec[1]*this.vec[1] + this.vec[2]*this.vec[2] + this.vec[3]*this.vec[3];
};
Camel.Vec4.prototype.length = function() 
{
	return Math.sqrt(this.sqrtLen());
};
Camel.Vec4.prototype.sqrtDist = function(v) 
{
	if(v != UNSET) 
	{
		var x = v.vec[0]-this.vec[0], 
			y = v.vec[1]-this.vec[1], 
			z = v.vec[2]-this.vec[2], 
			w = v.vec[3]-this.vec[3];
		return x*x + y*y + z*z + w*w;
	}
	else 
		return NULL;
};
Camel.Vec4.prototype.distance = function(v) 
{
	if(v != UNSET)
		return Math.sqrt(this.sqrtDist(v));
	else 
		return NULL;
};
Camel.Vec4.prototype.symmetry = function(x, y, z, w) 
{
	x = x || 1.0;
	y = y || 1.0;
	z = z || 1.0;
	w = w || 1.0;
	this.vec[0] *= (-1)*x;
	this.vec[1] *= (-1)*y;
	this.vec[2] *= (-1)*z;
	this.vec[3] *= (-1)*w;
	return this;
};
Camel.Vec4.prototype.inverse = function() 
{
	this.vec[0] = 1.0/this.vec[0];
	this.vec[1] = 1.0/this.vec[1];
	this.vec[2] = 1.0/this.vec[2];
	this.vec[3] = 1.0/this.vec[3];
	return this;
};
Camel.Vec4.prototype.normalize = function(out) 
{
	var v = this;
	if(out != UNSET)
		v = out;
	if(v.sqrtLen() > 0) 
	{
		var l = 1 / v.length();
		return new Camel.Vec4(v.vec[0]*l, v.vec[1]*l, v.vec[2]*l, v.vec[3]*l);
	}
	return NULL;
};
Camel.Vec4.prototype.dot = function(v) 
{
	if(v != UNSET) 
		return this.vec[0] * v.vec[0] + 
			   this.vec[1] * v.vec[1] + 
			   this.vec[2] * v.vec[2] + 
			   this.vec[3] * v.vec[3];
	else 
		return NULL;
};
Camel.Vec4.prototype.lerp = function(v, t) 
{
	if(v == UNSET || t == UNSET) 
		return NULL;
	else
	{
		var x = this.vec[0], 
			y = this.vec[1], 
			z = this.vec[2], 
			w = this.vec[3];
		return new Camel.Vec4(x+t * (v.vec[0]-x), 
							  y+t * (v.vec[1]-y),
							  z+t * (v.vec[2]-z), 
							  w+t * (v.vec[3]-w));
	} 
};
Camel.Vec4.prototype.random = function(scale) 
{
	scale = scale || 1.0;
	this.vec[0] = Math.random();
	this.vec[1] = Math.random();
	this.vec[2] = Math.random();
	this.vec[3] = Math.random();
	var n = this.normalize();
	n.scale(scale);
	this.setVector(n.vec[0], n.vec[1], n.vec[2], n.vec[3]);
	return this;
};
Camel.Vec4.prototype.transformMat4 = function(m) 
{
	var x = this.vec[0], y = this.vec[1], z = this.vec[2], w = this.vec[3];
	this.vec[0] = m.mat[0] * x + m.mat[4] * y + m.mat[8] * z + m.mat[12] * w;
	this.vec[1] = m.mat[1] * x + m.mat[5] * y + m.mat[9] * z + m.mat[13] * w;
	this.vec[2] = m.mat[2] * x + m.mat[6] * y + m.mat[10] * z + m.mat[14] * w;
	this.vec[3] = m.mat[3] * x + m.mat[7] * y + m.mat[11] * z + m.mat[15] * w;
	return this;
};
Camel.Vec4.prototype.transformQuat = function(q) 
{
	var x = this.vec[0], y = this.vec[1], z = this.vec[2],
		qx = q[0], qy = q[1], qz = q[2], qw = q[3],
		// calculate quat * vec
		ix = qw * x + qy * z - qz * y,
		iy = qw * y + qz * x - qx * z,
		iz = qw * z + qx * y - qy * x,
		iw = -qx * x - qy * y - qz * z;
	// calculate result * inverse quat
	this.vec[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	this.vec[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	this.vec[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	this.vec[3] = a[3];
	return this;
};
Camel.Vec4.prototype.toString = function() 
{
	return 'vec4('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+')';
};
Camel.Vec4.prototype.instanceOf = function() 
{
	return Camel.Vec4.toString();
};
Camel.Vec4.toString = function() 
{
	return 'Camel.Vec4';
};

/**________________________________________________________________________
 * 
 * The Quaternion of Camel
 */
Camel.Quat = function(x, y, z, w) 
{
	x = x || 0.0;
	y = y || 0.0;
	z = z || 0.0;
	w = w || 1.0;
	this.vec = new Float32Array(4);
	this.setVector(x, y, z, w);
};
Camel.Quat.prototype.loadVecFloat = Camel.Vec4.prototype.loadVecFloat;
Camel.Quat.prototype.setVector = Camel.Vec4.prototype.setVector;
Camel.Quat.prototype.clone = Camel.Vec4.prototype.clone;
Camel.Quat.prototype.add = Camel.Vec4.prototype.add;
Camel.Quat.prototype.multiply = Camel.Vec4.prototype.multiply;
Camel.Quat.prototype.scale = Camel.Vec4.prototype.scale;
Camel.Quat.prototype.dot = Camel.Vec4.prototype.dot;
Camel.Quat.prototype.lerp = Camel.Vec4.prototype.lerp;
Camel.Quat.prototype.sqrtLen = Camel.Vec4.prototype.sqrtLen;
Camel.Quat.prototype.length = Camel.Vec4.prototype.length;
Camel.Quat.prototype.sqrtDist = Camel.Vec4.prototype.sqrtDist;
Camel.Quat.prototype.distance = Camel.Vec4.prototype.distance;
Camel.Quat.prototype.normalize = Camel.Vec4.prototype.normalize;
Camel.Quat.prototype.identity = function() 
{
	this.vec[0] = 0.0;
	this.vec[1] = 0.0;
	this.vec[2] = 0.0;
	this.vec[3] = 1.0;
	return this;
};
Camel.Quat.prototype.setAxisAngle = function(axis, rad) 
{
	rad = rad * 0.5;
	var s = Math.sin(rad);
	this.vec[0] = s * axis.vec[0];
	this.vec[1] = s * axis.vec[1];
	this.vec[2] = s * axis.vec[2];
	this.vec[3] = Math.cos(rad);
	return this;
};
Camel.Quat.prototype.rotateX = function (rad) 
{
	rad *= 0.5; 
	var ax = this.vec[0], 
		ay = this.vec[1], 
		az = this.vec[2], 
		aw = this.vec[3],
		bx = Math.sin(rad), bw = Math.cos(rad);
	this.vec[0] = ax * bw + aw * bx;
	this.vec[1] = ay * bw + az * bx;
	this.vec[2] = az * bw - ay * bx;
	this.vec[3] = aw * bw - ax * bx;
	return this;
};
Camel.Quat.prototype.rotateY = function (rad) 
{
	rad *= 0.5; 
	var ax = this.vec[0], 
		ay = this.vec[1], 
		az = this.vec[2], 
		aw = this.vec[3],
		by = Math.sin(rad), bw = Math.cos(rad);
	this.vec[0] = ax * bw - az * by;
	this.vec[1] = ay * bw + aw * by;
	this.vec[2] = az * bw + ax * by;
	this.vec[3] = aw * bw - ay * by;
	return this;
};
Camel.Quat.prototype.rotateZ = function (rad) 
{
	rad *= 0.5; 
	var ax = this.vec[0], 
		ay = this.vec[1], 
		az = this.vec[2], 
		aw = this.vec[3],
		bz = Math.sin(rad), bw = Math.cos(rad);
	this.vec[0] = ax * bw + ay * bz;
	this.vec[1] = ay * bw - ax * bz;
	this.vec[2] = az * bw + aw * bz;
	this.vec[3] = aw * bw - az * bz;
	return this;
};
Camel.Quat.prototype.calculateW = function () 
{
	var x = this.vec[0], 
		y = this.vec[1], 
		z = this.vec[2];
	this.vec[0] = x;
	this.vec[1] = y;
	this.vec[2] = z;
	this.vec[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	return this;
};
Camel.Quat.prototype.slerp = function (q1, q2, t) 
{
	// benchmarks:
	// http://jsperf.com/quaternion-slerp-implementations
	var ax = q1[0], 
		ay = q1[1], 
		az = q1[2], 
		aw = q1[3],
		bx = q2[0], 
		by = q2[1], 
		bz = q2[2], 
		bw = q2[3];
	var omega, cosom, sinom, scale0, scale1;
	// calc cosine
	cosom = ax * bx + ay * by + az * bz + aw * bw;
	// adjust signs (if necessary)
	if ( cosom < 0.0 ) 
	{
		cosom = -cosom;
		bx = - bx;
		by = - by;
		bz = - bz;
		bw = - bw;
	}
	// calculate coefficients
	if ( (1.0 - cosom) > 0.000001 ) 
	{
		// standard case (slerp)
		omega  = Math.acos(cosom);
		sinom  = Math.sin(omega);
		scale0 = Math.sin((1.0 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} 
	else 
	{        
		// "from" and "to" quaternions are very close 
		//  ... so we can do a linear interpolation
		scale0 = 1.0 - t;
		scale1 = t;
	}
	// calculate final values
	this.vec[0] = scale0 * ax + scale1 * bx;
	this.vec[1] = scale0 * ay + scale1 * by;
	this.vec[2] = scale0 * az + scale1 * bz;
	this.vec[3] = scale0 * aw + scale1 * bw;
	return this;
};
Camel.Quat.prototype.sqlerp = (function () 
{
	var temp1 = new Camel.Quat();
	var temp2 = new Camel.Quat();
	return function (a, b, c, d, t) 
	{
		temp1.slerp(a, d, t);
		temp2.slerp(b, c, t);
		this.slerp(temp1, temp2, 2 * t * (1 - t));
		return this;
	};
}());
Camel.Quat.prototype.invert = function() 
{
	var a0 = this.vec[0], 
		a1 = this.vec[1], 
		a2 = this.vec[2], 
		a3 = this.vec[3],
		dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
		invDot = dot ? 1.0/dot : 0;
	// TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	this.vec[0] = -a0*invDot;
	this.vec[1] = -a1*invDot;
	this.vec[2] = -a2*invDot;
	this.vec[3] = a3*invDot;
	return this;
};
Camel.Quat.prototype.conjugate = function () 
{
	this.vec[0] *= (-1);
	this.vec[1] *= (-1);
	this.vec[2] *= (-1);
	this.vec[3] = this.vec[3];
	return this;
};
Camel.Quat.prototype.fromMat3 = function(m) 
{
	// Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	// article "Quaternion Calculus and Fast Animation".
	var fTrace = m.mat[0] + m.mat[4] + m.mat[8];
	var fRoot;

	if (fTrace > 0.0) 
	{
		// |w| > 1/2, may as well choose w > 1/2
		fRoot = Math.sqrt(fTrace + 1.0);  // 2w
		this.vec[3] = 0.5 * fRoot;
		fRoot = 0.5/fRoot;  // 1/(4w)
		this.vec[0] = (m.mat[5]-m.mat[7])*fRoot;
		this.vec[1] = (m.mat[6]-m.mat[2])*fRoot;
		this.vec[2] = (m.mat[1]-m.mat[3])*fRoot;
	} 
	else 
	{
		// |w| <= 1/2
		var i = 0;
		if ( m.mat[4] > m.mat[0] )
			i = 1;
		if ( m.mat[8] > m.mat[i*3+i] )
			i = 2;
		var j = (i+1)%3;
		var k = (i+2)%3;
		
		fRoot = Math.sqrt(m.mat[i*3+i]-m.mat[j*3+j]-m.mat[k*3+k] + 1.0);
		this.vec[i] = 0.5 * fRoot;
		fRoot = 0.5 / fRoot;
		this.vec[3] = (m.mat[j*3+k] - m.mat[k*3+j]) * fRoot;
		this.vec[j] = (m.mat[j*3+i] + m.mat[i*3+j]) * fRoot;
		this.vec[k] = (m.mat[k*3+i] + m.mat[i*3+k]) * fRoot;
	}
	return this;
};
Camel.Quat.prototype.toString = function() 
{
	return 'quat('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+')';
};
Camel.Quat.prototype.instanceOf = function() 
{
	return Camel.Quat.toString();
};
Camel.Quat.toString = function() 
{
	return 'Camel.Quat';
};

/**________________________________________________________________________
 * 
 * The Mx22 of Camel
 */
Camel.Mx22 = function(x, y, z, w) 
{
	x = x || 1.0;
	y = y || 0.0;
	z = z || 0.0;
	w = w || 1.0;
	this.mat = new Float32Array(4);
	this.setMatrix(x, y, z, w);
};
Camel.Mx22.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Mx22.prototype.setMatrix = function(x, y, z, w) 
{
	this.mat[0] = x;
	this.mat[1] = y;
	this.mat[2] = z;
	this.mat[3] = w;
	return this;
};
Camel.Mx22.prototype.clone = function(m) 
{
	if(v != UNSET) 
	{
		this.mat[0] = m.mat[0];
		this.mat[1] = m.mat[1];
		this.mat[2] = m.mat[2];
		this.mat[3] = m.mat[3];
		return this;
	}
	else 
		return new Camel.Mx22(this.mat[0], this.mat[1], this.mat[2], this.mat[3]);
};
Camel.Mx22.prototype.identity = function() 
{
	this.mat[0] = 1.0;
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 1.0;
	return this;
};
Camel.Mx22.prototype.transpose = function() 
{
	var a1 = this.mat[1];
	this.mat[1] = this.mat[2];
	this.mat[2] = a1;
	return this;
};
Camel.Mx22.prototype.invert = function() 
{
	var a0 = this.mat[0], 
		a1 = this.mat[1], 
		a2 = this.mat[2], 
		a3 = this.mat[3], 
		det = a0 * a3 - a2 * a1;
	if (!det)
		return null;
	det = 1.0 / det;
	this.mat[0] =  a3 * det;
	this.mat[1] = -a1 * det;
	this.mat[2] = -a2 * det;
	this.mat[3] =  a0 * det;
	return this;
};
Camel.Mx22.prototype.adjoint = function() 
{
	// Caching this value is nessecary if out == a
	var a0 = this.mat[0];
	this.mat[0] =  this.mat[3];
	this.mat[1] = -this.mat[1];
	this.mat[2] = -this.mat[2];
	this.mat[3] =  a0;
	return this;
};
Camel.Mx22.prototype.determinant = function () 
{
	return this.mat[0] * this.mat[3] - this.mat[2] * this.mat[1];
};
Camel.Mx22.prototype.multiply = function (m) 
{
	var a0 = this.mat[0], a1 = this.mat[1], 
		a2 = this.mat[2], a3 = this.mat[3], 
		b0 = m.mat[0], b1 = m.mat[1], 
		b2 = m.mat[2], b3 = m.mat[3];
	this.mat[0] = a0 * b0 + a2 * b1;
	this.mat[1] = a1 * b0 + a3 * b1;
	this.mat[2] = a0 * b2 + a2 * b3;
	this.mat[3] = a1 * b2 + a3 * b3;
	return this;
};
Camel.Mx22.prototype.rotate = function (rad) 
{
	var a0 = this.mat[0], 
		a1 = this.mat[1], 
		a2 = this.mat[2], 
		a3 = this.mat[3],
		s = Math.sin(rad),
		c = Math.cos(rad);
	this.mat[0] = a0 *  c + a2 * s;
	this.mat[1] = a1 *  c + a3 * s;
	this.mat[2] = a0 * -s + a2 * c;
	this.mat[3] = a1 * -s + a3 * c;
	return this;
};
Camel.Mx22.prototype.scale = function(v) 
{
	var a0 = this.mat[0], 
		a1 = this.mat[1], 
		a2 = this.mat[2], 
		a3 = this.mat[3],
		v0 = v.vec[0], 
		v1 = v.vec[1];
	this.mat[0] = a0 * v0;
	this.mat[1] = a1 * v0;
	this.mat[2] = a2 * v1;
	this.mat[3] = a3 * v1;
	return this;
};
Camel.Mx22.prototype.fromRotation = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad);
	this.mat[0] = c;
	this.mat[1] = s;
	this.mat[2] = -s;
	this.mat[3] = c;
	return this;
};
Camel.Mx22.prototype.fromScaling = function(v) 
{
	this.mat[0] = v.vec[0];
	this.mat[1] = 0;
	this.mat[2] = 0;
	this.mat[3] = v.vec[1];
	return this;
};
Camel.Mx22.prototype.frob = function() 
{
	return Math.sqrt(Math.pow(this.mat[0], 2) + 
					 Math.pow(this.mat[1], 2) + 
					 Math.pow(this.mat[2], 2) + 
					 Math.pow(this.mat[3], 2));
};
Camel.Mx22.prototype.LDU = function(L, D, U) 
{ 
	L[2] = this.mat[2]/this.mat[0]; 
	U[0] = this.mat[0]; 
	U[1] = this.mat[1]; 
	U[3] = this.mat[3] - L[2] * U[1]; 
	return [L, D, U];
}; 
Camel.Mx22.prototype.toString = function() 
{
	return 'mat2('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+')';
};
Camel.Mx22.prototype.instanceOf = function() 
{
	return Camel.Mx22.toString();
};
Camel.Mx22.toString = function() 
{
	return 'Camel.Mx22';
};

/**________________________________________________________________________
 * 
 * The Mx23 of Camel
 */
Camel.Mx23 = function(x, y, z, w, p, q) 
{
	x = x || 1.0;
	y = y || 0.0;
	z = z || 0.0;
	w = w || 1.0;
	p = p || 0.0;
	q = q || 0.0;
	this.mat = new Float32Array(6);
	this.setMatrix(x, y, z, w, p, q);
};
Camel.Mx23.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Mx23.prototype.setMatrix = function(x, y, z, w, p, q) 
{
	this.mat[0] = x;
	this.mat[1] = y;
	this.mat[2] = z;
	this.mat[3] = w;
	this.mat[4] = p;
	this.mat[5] = q;
	return this;
};
Camel.Mx23.prototype.clone = function(m) 
{
	if(v != UNSET) 
	{
		this.mat[0] = m.mat[0];
		this.mat[1] = m.mat[1];
		this.mat[2] = m.mat[2];
		this.mat[3] = m.mat[3];
		this.mat[4] = m.mat[4];
		this.mat[5] = m.mat[5];
		return this;
	}
	else 
		return new Camel.Mx23(this.mat[0], this.mat[1], 
							  this.mat[2], this.mat[3], 
							  this.mat[4], this.mat[5]);
};
Camel.Mx23.prototype.identity = function() 
{
	this.mat[0] = 1.0;
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 1.0;
	this.mat[4] = 0.0;
	this.mat[5] = 0.0;
	return this;
};
Camel.Mx23.prototype.invert = function() 
{
	var aa = this.mat[0], ab = this.mat[1], 
		ac = this.mat[2], ad = this.mat[3],
		atx = this.mat[4], aty = this.mat[5];

	var det = aa * ad - ab * ac;
	if(!det) 
		return NULL;
	det = 1.0 / det;
	this.mat[0] = ad * det;
	this.mat[1] = -ab * det;
	this.mat[2] = -ac * det;
	this.mat[3] = aa * det;
	this.mat[4] = (ac * aty - ad * atx) * det;
	this.mat[5] = (ab * atx - aa * aty) * det;
	return this;
};
Camel.Mx23.prototype.determinant = function() 
{
	return this.mat[0] * this.mat[3] - this.mat[1] * this.mat[2];
};
Camel.Mx23.prototype.multiply = function (m) 
{
	var a0 = this.mat[0], a1 = this.mat[1], 
		a2 = this.mat[2], a3 = this.mat[3], 
		a4 = this.mat[4], a5 = this.mat[5],
		b0 = m.mat[0], b1 = m.mat[1], 
		b2 = m.mat[2], b3 = m.mat[3], 
		b4 = m.mat[4], b5 = m.mat[5];
	this.mat[0] = a0 * b0 + a2 * b1;
	this.mat[1] = a1 * b0 + a3 * b1;
	this.mat[2] = a0 * b2 + a2 * b3;
	this.mat[3] = a1 * b2 + a3 * b3;
	this.mat[4] = a0 * b4 + a2 * b5 + a4;
	this.mat[5] = a1 * b4 + a3 * b5 + a5;
	return this;
};
Camel.Mx23.prototype.rotate = function(rad) 
{
	var a0 = this.mat[0], a1 = this.mat[1], 
		a2 = this.mat[2], a3 = this.mat[3], 
		a4 = this.mat[4], a5 = this.mat[5],
		s = Math.sin(rad),
		c = Math.cos(rad);
	this.mat[0] = a0 *  c + a2 * s;
	this.mat[1] = a1 *  c + a3 * s;
	this.mat[2] = a0 * -s + a2 * c;
	this.mat[3] = a1 * -s + a3 * c;
	this.mat[4] = a4;
	this.mat[5] = a5;
	return this;
};
Camel.Mx23.prototype.scale = function(v) 
{
	var a0 = this.mat[0], a1 = this.mat[1], 
		a2 = this.mat[2], a3 = this.mat[3], 
		a4 = this.mat[4], a5 = this.mat[5],
		v0 = v.vec[0], v1 = v.vec[1];
	this.mat[0] = a0 * v0;
	this.mat[1] = a1 * v0;
	this.mat[2] = a2 * v1;
	this.mat[3] = a3 * v1;
	this.mat[4] = a4;
	this.mat[5] = a5;
	return this;
};
Camel.Mx23.prototype.translate = function(v) 
{
	var a0 = this.mat[0], a1 = this.mat[1], 
		a2 = this.mat[2], a3 = this.mat[3], 
		a4 = this.mat[4], a5 = this.mat[5],
		v0 = v.vec[0], v1 = v.vec[1];
	this.mat[0] = a0;
	this.mat[1] = a1;
	this.mat[2] = a2;
	this.mat[3] = a3;
	this.mat[4] = a0 * v0 + a2 * v1 + a4;
	this.mat[5] = a1 * v0 + a3 * v1 + a5;
	return this;
};
Camel.Mx23.prototype.fromRotation = function(rad) 
{
	var s = Math.sin(rad), 
		c = Math.cos(rad);
	this.mat[0] = c;
	this.mat[1] = s;
	this.mat[2] = -s;
	this.mat[3] = c;
	this.mat[4] = 0;
	this.mat[5] = 0;
	return this;
};
Camel.Mx23.prototype.fromScaling = function(v) 
{
	this.mat[0] = v.vec[0];
	this.mat[1] = 0;
	this.mat[2] = 0;
	this.mat[3] = v.vec[1];
	this.mat[4] = 0;
	this.mat[5] = 0;
	return this;
};
Camel.Mx23.prototype.fromTranslation = function(v) 
{
	this.mat[0] = 1;
	this.mat[1] = 0;
	this.mat[2] = 0;
	this.mat[3] = 1;
	this.mat[4] = v[0];
	this.mat[5] = v[1];
	return this;
};
Camel.Mx23.prototype.frob = function() 
{ 
	return (Math.sqrt(Math.pow(this.mat[0], 2) + 
					  Math.pow(this.mat[1], 2) + 
					  Math.pow(this.mat[2], 2) + 
					  Math.pow(this.mat[3], 2) + 
					  Math.pow(this.mat[4], 2) + 
					  Math.pow(this.mat[5], 2) + 1));
};
Camel.Mx23.prototype.toString = function() 
{
	return 'mat2d('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+', '+this.vec[4]+', '+this.vec[5]+')';
};
Camel.Mx23.prototype.instanceOf = function() 
{
	return Camel.Mx23.toString();
};
Camel.Mx23.toString = function() 
{
	return 'Camel.Mx23';
};

/**
 * The Mx23 of Camel
 */
Camel.Mx33 = function(a, b, c, o, p, q, x, y, z) 
{
	a = a || 1.0;
	b = b || 0.0;
	c = c || 0.0;
	o = o || 0.0;
	p = p || 1.0;
	q = q || 0.0;
	x = x || 0.0;
	y = y || 0.0;
	z = z || 1.0;
	this.mat = new Float32Array(9);
	this.setMatrix(a, b, c, o, p, q, x, y, z);
};
Camel.Mx33.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Mx33.prototype.setMatrix = function(a, b, c, o, p, q, x, y, z) 
{
	this.mat[0] = a;this.mat[1] = b;this.mat[2] = c;
	this.mat[3] = o;this.mat[4] = p;this.mat[5] = q;
	this.mat[6] = z;this.mat[7] = y;this.mat[8] = z;
	return this;
};
Camel.Mx33.prototype.clone = function(m) 
{
	if(v != UNSET) 
	{
		this.mat[0] = m.mat[0];this.mat[1] = m.mat[1];this.mat[2] = m.mat[2];
		this.mat[3] = m.mat[3];this.mat[4] = m.mat[4];this.mat[5] = m.mat[5];
		this.mat[6] = m.mat[6];this.mat[7] = m.mat[7];this.mat[8] = m.mat[8];
		return this;
	}
	else 
		return new Camel.Mx33(this.mat[0], this.mat[1], this.mat[2], 
							  this.mat[3], this.mat[4], this.mat[5], 
							  this.mat[6], this.mat[7], this.mat[8]);
};
Camel.Mx33.prototype.identity = function() 
{
	this.mat[0] = 1.0;
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 0.0;
	this.mat[4] = 1.0;
	this.mat[5] = 0.0;
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = 1.0;
	return this;
};
Camel.Mx33.prototype.transpose = function() 
{
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	var a01 = this.mat[1], 
		a02 = this.mat[2], 
		a12 = this.mat[5];
	this.mat[1] = this.mat[3];
	this.mat[2] = this.mat[6];
	this.mat[3] = a01;
	this.mat[5] = this.mat[7];
	this.mat[6] = a02;
	this.mat[7] = a12;
	return this;
};
Camel.Mx33.prototype.invert = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8],
		b01 = a22 * a11 - a12 * a21,
		b11 = -a22 * a10 + a12 * a20,
		b21 = a21 * a10 - a11 * a20,
		// Calculate the determinant
		det = a00 * b01 + a01 * b11 + a02 * b21;
	if(!det) 
		return null;
	det = 1.0 / det;
	this.mat[0] = b01 * det;
	this.mat[1] = (-a22 * a01 + a02 * a21) * det;
	this.mat[2] = (a12 * a01 - a02 * a11) * det;
	this.mat[3] = b11 * det;
	this.mat[4] = (a22 * a00 - a02 * a20) * det;
	this.mat[5] = (-a12 * a00 + a02 * a10) * det;
	this.mat[6] = b21 * det;
	this.mat[7] = (-a21 * a00 + a01 * a20) * det;
	this.mat[8] = (a11 * a00 - a01 * a10) * det;
	return this;
};
Camel.Mx33.prototype.adjoint = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8];

	this.mat[0] = (a11 * a22 - a12 * a21);
	this.mat[1] = (a02 * a21 - a01 * a22);
	this.mat[2] = (a01 * a12 - a02 * a11);
	this.mat[3] = (a12 * a20 - a10 * a22);
	this.mat[4] = (a00 * a22 - a02 * a20);
	this.mat[5] = (a02 * a10 - a00 * a12);
	this.mat[6] = (a10 * a21 - a11 * a20);
	this.mat[7] = (a01 * a20 - a00 * a21);
	this.mat[8] = (a00 * a11 - a01 * a10);
	return this;
};
Camel.Mx33.prototype.determinant = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8];
	return a00 * (a22 * a11 - a12 * a21) + 
		   a01 * (-a22 * a10 + a12 * a20) + 
		   a02 * (a21 * a10 - a11 * a20);
};
Camel.Mx33.prototype.multiply = function (m) 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8],
		b00 = m.mat[0], b01 = m.mat[1], b02 = m.mat[2],
		b10 = m.mat[3], b11 = m.mat[4], b12 = m.mat[5],
		b20 = m.mat[6], b21 = m.mat[7], b22 = m.mat[8];
	this.mat[0] = b00 * a00 + b01 * a10 + b02 * a20;
	this.mat[1] = b00 * a01 + b01 * a11 + b02 * a21;
	this.mat[2] = b00 * a02 + b01 * a12 + b02 * a22;
	this.mat[3] = b10 * a00 + b11 * a10 + b12 * a20;
	this.mat[4] = b10 * a01 + b11 * a11 + b12 * a21;
	this.mat[5] = b10 * a02 + b11 * a12 + b12 * a22;
	this.mat[6] = b20 * a00 + b21 * a10 + b22 * a20;
	this.mat[7] = b20 * a01 + b21 * a11 + b22 * a21;
	this.mat[8] = b20 * a02 + b21 * a12 + b22 * a22;
	return this;
};
Camel.Mx33.prototype.translate = function(v) 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8],
		x = v.vec[0], y = v.vec[1];
	this.mat[0] = a00;
	this.mat[1] = a01;
	this.mat[2] = a02;
	this.mat[3] = a10;
	this.mat[4] = a11;
	this.mat[5] = a12;
	this.mat[6] = x * a00 + y * a10 + a20;
	this.mat[7] = x * a01 + y * a11 + a21;
	this.mat[8] = x * a02 + y * a12 + a22;
	return this;
};
Camel.Mx33.prototype.rotate = function (rad) 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2],
		a10 = this.mat[3], a11 = this.mat[4], a12 = this.mat[5],
		a20 = this.mat[6], a21 = this.mat[7], a22 = this.mat[8],
		s = Math.sin(rad),
		c = Math.cos(rad);
	this.mat[0] = c * a00 + s * a10;
	this.mat[1] = c * a01 + s * a11;
	this.mat[2] = c * a02 + s * a12;
	this.mat[3] = c * a10 - s * a00;
	this.mat[4] = c * a11 - s * a01;
	this.mat[5] = c * a12 - s * a02;
	this.mat[6] = a20;
	this.mat[7] = a21;
	this.mat[8] = a22;
	return this;
};
Camel.Mx33.prototype.scale = function(v) 
{
	var x = v.vec[0], y = v.vec[1];
	this.mat[0] = x * this.mat[0];
	this.mat[1] = x * this.mat[1];
	this.mat[2] = x * this.mat[2];
	this.mat[3] = y * this.mat[3];
	this.mat[4] = y * this.mat[4];
	this.mat[5] = y * this.mat[5];
	return this;
};
Camel.Mx33.prototype.fromTranslation = function(v) 
{
	this.mat[0] = 1;
	this.mat[1] = 0;
	this.mat[2] = 0;
	this.mat[3] = 0;
	this.mat[4] = 1;
	this.mat[5] = 0;
	this.mat[6] = v.vec[0];
	this.mat[7] = v.vec[1];
	this.mat[8] = 1;
	return this;
};
Camel.Mx33.prototype.fromRotation = function(rad) 
{
	var s = Math.sin(rad), 
		c = Math.cos(rad);
	this.mat[0] = c;
	this.mat[1] = s;
	this.mat[2] = 0;
	this.mat[3] = -s;
	this.mat[4] = c;
	this.mat[5] = 0;
	this.mat[6] = 0;
	this.mat[7] = 0;
	this.mat[8] = 1;
	return this;
};
Camel.Mx33.prototype.fromScaling = function(v) 
{
	this.mat[0] = v.vec[0];
	this.mat[1] = 0;
	this.mat[2] = 0;
	this.mat[3] = 0;
	this.mat[4] = v.vec[1];
	this.mat[5] = 0;
	this.mat[6] = 0;
	this.mat[7] = 0;
	this.mat[8] = 1;
	return this;
};
Camel.Mx33.prototype.fromMat2d = function(m) 
{
	this.mat[0] = m.mat[0];
	this.mat[1] = m.mat[1];
	this.mat[2] = 0;

	this.mat[3] = m.mat[2];
	this.mat[4] = m.mat[3];
	this.mat[5] = 0;

	this.mat[6] = m.mat[4];
	this.mat[7] = m.mat[5];
	this.mat[8] = 1;
	return this;
};
Camel.Mx33.prototype.fromQuat = function (q) 
{
	var x = q[0], y = q[1], z = q[2], w = q[3],
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, yx = y * x2, yy = y * y2,
		zx = z * x2, zy = z * y2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2;
	this.mat[0] = 1 - yy - zz;
	this.mat[3] = yx - wz;
	this.mat[6] = zx + wy;
	this.mat[1] = yx + wz;
	this.mat[4] = 1 - xx - zz;
	this.mat[7] = zy - wx;
	this.mat[2] = zx - wy;
	this.mat[5] = zy + wx;
	this.mat[8] = 1 - xx - yy;
	return this;
};
Camel.Mx33.prototype.normalFromMat4 = function(m) 
{
	var a00 = m.mat[0], a01 = m.mat[1], a02 = m.mat[2], a03 = m.mat[3],
		a10 = m.mat[4], a11 = m.mat[5], a12 = m.mat[6], a13 = m.mat[7],
		a20 = m.mat[8], a21 = m.mat[9], a22 = m.mat[10], a23 = m.mat[11],
		a30 = m.mat[12], a31 = m.mat[13], a32 = m.mat[14], a33 = m.mat[15],
		b00 = a00 * a11 - a01 * a10,
		b01 = a00 * a12 - a02 * a10,
		b02 = a00 * a13 - a03 * a10,
		b03 = a01 * a12 - a02 * a11,
		b04 = a01 * a13 - a03 * a11,
		b05 = a02 * a13 - a03 * a12,
		b06 = a20 * a31 - a21 * a30,
		b07 = a20 * a32 - a22 * a30,
		b08 = a20 * a33 - a23 * a30,
		b09 = a21 * a32 - a22 * a31,
		b10 = a21 * a33 - a23 * a31,
		b11 = a22 * a33 - a23 * a32,
		// Calculate the determinant
		det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if(!det)
		return null;
	det = 1.0 / det;
	this.mat[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	this.mat[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	this.mat[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	this.mat[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	this.mat[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	this.mat[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	this.mat[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	this.mat[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	this.mat[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	return this;
};
Camel.Mx33.prototype.frob = function() 
{
	return Math.sqrt(Math.pow(this.mat[0], 2) + 
					 Math.pow(this.mat[1], 2) + 
					 Math.pow(this.mat[2], 2) + 
					 Math.pow(this.mat[3], 2) + 
					 Math.pow(this.mat[4], 2) + 
					 Math.pow(this.mat[5], 2) + 
					 Math.pow(this.mat[6], 2) + 
					 Math.pow(this.mat[7], 2) + 
					 Math.pow(this.mat[8], 2));
};
Camel.Mx33.prototype.toString = function() 
{
	return 'mat3('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+', '+this.vec[4]+', '+this.vec[5]+', '+this.vec[6]+', '+this.vec[7]+', '+this.vec[8]+')';
};
Camel.Mx33.prototype.instanceOf = function() 
{
	return Camel.Mx33.toString();
};
Camel.Mx33.toString = function() 
{
	return 'Camel.Mx33';
};

/**
 * The Mx44 of Camel
 * This is a implemental class.
 */
Camel.Mx44 = function(a, b, c, d, i, j, k, q, m, n, o, p, x, y, z, w) 
{
	a = a || 1.0;
	b = b || 0.0;
	c = c || 0.0;
	d = d || 0.0;
	i = i || 0.0;
	j = j || 1.0;
	k = k || 0.0;
	q = q || 0.0;
	m = m || 0.0;
	n = n || 0.0;
	o = o || 1.0;
	p = p || 0.0;
	x = x || 0.0;
	y = y || 0.0;
	z = z || 0.0;
	w = w || 1.0;
	this.mat = new Float32Array(16);
	this.setMatrix(a, b, c, d, i, j, k, q, m, n, o, p, x, y, z, w);
};
Camel.Mx44.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Mx44.prototype.setMatrix = function(a, b, c, d, i, j, k, q, m, n, o, p, x, y, z, w) 
{
	this.mat[0] = a; this.mat[1] = b; this.mat[2] = c; this.mat[3] = d;
	this.mat[4] = i; this.mat[5] = j; this.mat[6] = k; this.mat[7] = q;
	this.mat[8] = m; this.mat[9] = n; this.mat[10] = o;this.mat[11] = p;
	this.mat[12] = x;this.mat[13] = y;this.mat[14] = z;this.mat[15] = w;
	return this;
};
Camel.Mx44.prototype.clone = function(m) 
{
	if(v != UNSET) 
	{
		this.mat[0] = m.mat[0];this.mat[1] = m.mat[1];this.mat[2] = m.mat[2];this.mat[3] = m.mat[3];
		this.mat[4] = m.mat[4];this.mat[5] = m.mat[5];this.mat[6] = m.mat[6];this.mat[7] = m.mat[7];
		this.mat[8] = m.mat[8];this.mat[9] = m.mat[9];this.mat[10] = m.mat[10];this.mat[11] = m.mat[11];
		this.mat[12] = m.mat[12];this.mat[13] = m.mat[13];this.mat[14] = m.mat[14];this.mat[15] = m.mat[15];
		return this;
	}
	else 
		return new Camel.Mx44(this.mat[0], this.mat[1], this.mat[2], this.mat[3], 
							  this.mat[4], this.mat[5], this.mat[6], this.mat[7], 
							  this.mat[8], this.mat[9], this.mat[10], this.mat[11], 
							  this.mat[12], this.mat[13], this.mat[14], this.mat[15]);
};
Camel.Mx44.prototype.identity = function() 
{
	for(var i=0;i<16;i++) 
	{
		if(i==0||i==5||i==10||i==16) this.mat[i] = 1.0;
		else this.mat[i] = 0.0;
	}
	return this;
};
Camel.Mx44.prototype.transpose = function() 
{
	// If we are transposing ourselves we can skip a few steps but have to cache some values
	var a01 = this.mat[1], a02 = this.mat[2], a03 = this.mat[3],
		a12 = this.mat[6], a13 = this.mat[7],
		a23 = this.mat[11];
	this.mat[1] = this.mat[4];
	this.mat[2] = this.mat[8];
	this.mat[3] = this.mat[12];
	this.mat[4] = a01;
	this.mat[6] = this.mat[9];
	this.mat[7] = this.mat[13];
	this.mat[8] = a02;
	this.mat[9] = a12;
	this.mat[11] = this.mat[14];
	this.mat[12] = a03;
	this.mat[13] = a13;
	this.mat[14] = a23;
	return this;
};
Camel.Mx44.prototype.invert = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2], a03 = this.mat[3],
		a10 = this.mat[4], a11 = this.mat[5], a12 = this.mat[6], a13 = this.mat[7],
		a20 = this.mat[8], a21 = this.mat[9], a22 = this.mat[10], a23 = this.mat[11],
		a30 = this.mat[12], a31 = this.mat[13], a32 = this.mat[14], a33 = this.mat[15],
		b00 = a00 * a11 - a01 * a10,
		b01 = a00 * a12 - a02 * a10,
		b02 = a00 * a13 - a03 * a10,
		b03 = a01 * a12 - a02 * a11,
		b04 = a01 * a13 - a03 * a11,
		b05 = a02 * a13 - a03 * a12,
		b06 = a20 * a31 - a21 * a30,
		b07 = a20 * a32 - a22 * a30,
		b08 = a20 * a33 - a23 * a30,
		b09 = a21 * a32 - a22 * a31,
		b10 = a21 * a33 - a23 * a31,
		b11 = a22 * a33 - a23 * a32,
		// Calculate the determinant
		det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if(!det)
		return NULL;
	det = 1.0 / det;
	this.mat[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	this.mat[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	this.mat[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	this.mat[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	this.mat[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	this.mat[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	this.mat[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	this.mat[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	this.mat[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	this.mat[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	this.mat[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	this.mat[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	this.mat[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	this.mat[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	this.mat[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	this.mat[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return this.mat;
};
Camel.Mx44.prototype.adjoint = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2], a03 = this.mat[3],
		a10 = this.mat[4], a11 = this.mat[5], a12 = this.mat[6], a13 = this.mat[7],
		a20 = this.mat[8], a21 = this.mat[9], a22 = this.mat[10], a23 = this.mat[11],
		a30 = this.mat[12], a31 = this.mat[13], a32 = this.mat[14], a33 = this.mat[15];

	this.mat[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
	this.mat[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	this.mat[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
	this.mat[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	this.mat[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	this.mat[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
	this.mat[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	this.mat[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
	this.mat[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
	this.mat[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	this.mat[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
	this.mat[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	this.mat[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	this.mat[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
	this.mat[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	this.mat[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
	return this;
};
Camel.Mx44.prototype.determinant = function() 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2], a03 = this.mat[3],
		a10 = this.mat[4], a11 = this.mat[5], a12 = this.mat[6], a13 = this.mat[7],
		a20 = this.mat[8], a21 = this.mat[9], a22 = this.mat[10], a23 = this.mat[11],
		a30 = this.mat[12], a31 = this.mat[13], a32 = this.mat[14], a33 = this.mat[15],
		b00 = a00 * a11 - a01 * a10,
		b01 = a00 * a12 - a02 * a10,
		b02 = a00 * a13 - a03 * a10,
		b03 = a01 * a12 - a02 * a11,
		b04 = a01 * a13 - a03 * a11,
		b05 = a02 * a13 - a03 * a12,
		b06 = a20 * a31 - a21 * a30,
		b07 = a20 * a32 - a22 * a30,
		b08 = a20 * a33 - a23 * a30,
		b09 = a21 * a32 - a22 * a31,
		b10 = a21 * a33 - a23 * a31,
		b11 = a22 * a33 - a23 * a32;
	// Calculate the determinant
	return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
Camel.Mx44.prototype.multiply = function (m) 
{
	var a00 = this.mat[0], a01 = this.mat[1], a02 = this.mat[2], a03 = this.mat[3],
		a10 = this.mat[4], a11 = this.mat[5], a12 = this.mat[6], a13 = this.mat[7],
		a20 = this.mat[8], a21 = this.mat[9], a22 = this.mat[10], a23 = this.mat[11],
		a30 = this.mat[12], a31 = this.mat[13], a32 = this.mat[14], a33 = this.mat[15];

	// Cache only the current line of the second matrix
	var b0  = m.mat[0], b1 = m.mat[1], b2 = m.mat[2], b3 = m.mat[3];
	this.mat[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	this.mat[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	this.mat[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	this.mat[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

	b0 = m.mat[4]; b1 = m.mat[5]; b2 = m.mat[6]; b3 = m.mat[7];
	this.mat[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	this.mat[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	this.mat[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	this.mat[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

	b0 = m.mat[8]; b1 = m.mat[9]; b2 = m.mat[10]; b3 = m.mat[11];
	this.mat[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	this.mat[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	this.mat[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	this.mat[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

	b0 = m.mat[12]; b1 = m.mat[13]; b2 = m.mat[14]; b3 = m.mat[15];
	this.mat[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	this.mat[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	this.mat[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	this.mat[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	return this;
};
Camel.Mx44.prototype.translate = function (v) 
{
	var x = v.vec[0], y = v.vec[1], z = v.vec[2],
		a00, a01, a02, a03,
		a10, a11, a12, a13,
		a20, a21, a22, a23;
	this.mat[12] = this.mat[0] * x + this.mat[4] * y + this.mat[8] * z + this.mat[12];
	this.mat[13] = this.mat[1] * x + this.mat[5] * y + this.mat[9] * z + this.mat[13];
	this.mat[14] = this.mat[2] * x + this.mat[6] * y + this.mat[10] * z + this.mat[14];
	this.mat[15] = this.mat[3] * x + this.mat[7] * y + this.mat[11] * z + this.mat[15];
	return this;
};
Camel.Mx44.prototype.scale = function(v) 
{
	var x = v.vec[0], 
		y = v.vec[1], 
		z = v.vec[2];
	this.mat[0] = this.mat[0] * x;
	this.mat[1] = this.mat[1] * x;
	this.mat[2] = this.mat[2] * x;
	this.mat[3] = this.mat[3] * x;
	this.mat[4] = this.mat[4] * y;
	this.mat[5] = this.mat[5] * y;
	this.mat[6] = this.mat[6] * y;
	this.mat[7] = this.mat[7] * y;
	this.mat[8] = this.mat[8] * z;
	this.mat[9] = this.mat[9] * z;
	this.mat[10] = this.mat[10] * z;
	this.mat[11] = this.mat[11] * z;
	return out;
};
Camel.Mx44.prototype.rotate = function (rad, axis) 
{
	var x = axis.vec[0], 
		y = axis.vec[1], 
		z = axis.vec[2],
		len = Math.sqrt(x * x + y * y + z * z),
		s, c, t,
		a00, a01, a02, a03,
		a10, a11, a12, a13,
		a20, a21, a22, a23,
		b00, b01, b02,
		b10, b11, b12,
		b20, b21, b22;

	if (Math.abs(len) < CAMEL_MATH_EPSILON) return NULL; 

	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;

	s = Math.sin(rad);
	c = Math.cos(rad);
	t = 1 - c;

	a00 = this.mat[0]; a01 = this.mat[1]; a02 = this.mat[2]; a03 = this.mat[3];
	a10 = this.mat[4]; a11 = this.mat[5]; a12 = this.mat[6]; a13 = this.mat[7];
	a20 = this.mat[8]; a21 = this.mat[9]; a22 = this.mat[10]; a23 = this.mat[11];
	// Construct the elements of the rotation matrix
	b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
	b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
	b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
	// Perform rotation-specific matrix multiplication
	this.mat[0] = a00 * b00 + a10 * b01 + a20 * b02;
	this.mat[1] = a01 * b00 + a11 * b01 + a21 * b02;
	this.mat[2] = a02 * b00 + a12 * b01 + a22 * b02;
	this.mat[3] = a03 * b00 + a13 * b01 + a23 * b02;
	this.mat[4] = a00 * b10 + a10 * b11 + a20 * b12;
	this.mat[5] = a01 * b10 + a11 * b11 + a21 * b12;
	this.mat[6] = a02 * b10 + a12 * b11 + a22 * b12;
	this.mat[7] = a03 * b10 + a13 * b11 + a23 * b12;
	this.mat[8] = a00 * b20 + a10 * b21 + a20 * b22;
	this.mat[9] = a01 * b20 + a11 * b21 + a21 * b22;
	this.mat[10] = a02 * b20 + a12 * b21 + a22 * b22;
	this.mat[11] = a03 * b20 + a13 * b21 + a23 * b22;
	return this;
};
Camel.Mx44.prototype.rotateX = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad),
		a10 = this.mat[4],
		a11 = this.mat[5],
		a12 = this.mat[6],
		a13 = this.mat[7],
		a20 = this.mat[8],
		a21 = this.mat[9],
		a22 = this.mat[10],
		a23 = this.mat[11];
	// Perform axis-specific matrix multiplication
	this.mat[4] = a10 * c + a20 * s;
	this.mat[5] = a11 * c + a21 * s;
	this.mat[6] = a12 * c + a22 * s;
	this.mat[7] = a13 * c + a23 * s;
	this.mat[8] = a20 * c - a10 * s;
	this.mat[9] = a21 * c - a11 * s;
	this.mat[10] = a22 * c - a12 * s;
	this.mat[11] = a23 * c - a13 * s;
	return this;
};
Camel.Mx44.prototype.rotateY = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad),
		a00 = this.mat[0],
		a01 = this.mat[1],
		a02 = this.mat[2],
		a03 = this.mat[3],
		a20 = this.mat[8],
		a21 = this.mat[9],
		a22 = this.mat[10],
		a23 = this.mat[11];
	// Perform axis-specific matrix multiplication
	this.mat[0] = a00 * c - a20 * s;
	this.mat[1] = a01 * c - a21 * s;
	this.mat[2] = a02 * c - a22 * s;
	this.mat[3] = a03 * c - a23 * s;
	this.mat[8] = a00 * s + a20 * c;
	this.mat[9] = a01 * s + a21 * c;
	this.mat[10] = a02 * s + a22 * c;
	this.mat[11] = a03 * s + a23 * c;
	return this;
};
Camel.Mx44.prototype.rotateZ = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad),
		a00 = this.mat[0],
		a01 = this.mat[1],
		a02 = this.mat[2],
		a03 = this.mat[3],
		a10 = this.mat[4],
		a11 = this.mat[5],
		a12 = this.mat[6],
		a13 = this.mat[7];
	// Perform axis-specific matrix multiplication
	this.mat[0] = a00 * c + a10 * s;
	this.mat[1] = a01 * c + a11 * s;
	this.mat[2] = a02 * c + a12 * s;
	this.mat[3] = a03 * c + a13 * s;
	this.mat[4] = a10 * c - a00 * s;
	this.mat[5] = a11 * c - a01 * s;
	this.mat[6] = a12 * c - a02 * s;
	this.mat[7] = a13 * c - a03 * s;
	return this;
};
Camel.Mx44.prototype.fromTranslation = function(v) 
{
	this.mat[0] = 1.0;
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 0.0;
	this.mat[4] = 0.0;
	this.mat[5] = 1.0;
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = 0.0;
	this.mat[9] = 0.0;
	this.mat[10] = 1.0;
	this.mat[11] = 0.0;
	this.mat[12] = v.vec[0];
	this.mat[13] = v.vec[1];
	this.mat[14] = v.vec[2];
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromScaling = function(v) 
{
	this.mat[0] = v.vec[0];
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 0.0;
	this.mat[4] = 0.0;
	this.mat[5] = v.vec[1];
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = 0.0;
	this.mat[9] = 0.0;
	this.mat[10] = v.vec[2];
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromRotation = function(rad, axis) 
{
	var x = axis.vec[0],
		y = axis.vec[1], 
		z = axis.vec[2],
		len = Math.sqrt(x * x + y * y + z * z),
		s, c, t;

	if (Math.abs(len) < CAMEL_MATH_EPSILON) return null;

	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;

	s = Math.sin(rad);
	c = Math.cos(rad);
	t = 1 - c;
	// Perform rotation-specific matrix multiplication
	this.mat[0] = x * x * t + c;
	this.mat[1] = y * x * t + z * s;
	this.mat[2] = z * x * t - y * s;
	this.mat[3] = 0;
	this.mat[4] = x * y * t - z * s;
	this.mat[5] = y * y * t + c;
	this.mat[6] = z * y * t + x * s;
	this.mat[7] = 0;
	this.mat[8] = x * z * t + y * s;
	this.mat[9] = y * z * t - x * s;
	this.mat[10] = z * z * t + c;
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromXRotation = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad);
	// Perform axis-specific matrix multiplication
	this.mat[0]  = 1.0;
	this.mat[1]  = 0.0;
	this.mat[2]  = 0.0;
	this.mat[3]  = 0.0;
	this.mat[4] = 0.0;
	this.mat[5] = c;
	this.mat[6] = s;
	this.mat[7] = 0.0;
	this.mat[8] = 0.0;
	this.mat[9] = -s;
	this.mat[10] = c;
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromYRotation = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad);
	// Perform axis-specific matrix multiplication
	this.mat[0]  = c;
	this.mat[1]  = 0.0;
	this.mat[2]  = -s;
	this.mat[3]  = 0.0;
	this.mat[4] = 0.0;
	this.mat[5] = 1.0;
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = s;
	this.mat[9] = 0.0;
	this.mat[10] = c;
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromZRotation = function(rad) 
{
	var s = Math.sin(rad),
		c = Math.cos(rad);
	// Perform axis-specific matrix multiplication
	this.mat[0]  = c;
	this.mat[1]  = s;
	this.mat[2]  = 0.0;
	this.mat[3]  = 0.0;
	this.mat[4] = -s;
	this.mat[5] = c;
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = 0.0;
	this.mat[9] = 0.0;
	this.mat[10] = 1.0;
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromRotationTranslation = function (q, v) {
	// Quaternion math
	var x = q.vec[0], y = q.vec[1], z = q.vec[2], w = q.vec[3],
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, xy = x * y2, xz = x * z2,
		yy = y * y2, yz = y * z2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2;
	this.mat[0] = 1.0 - (yy + zz);
	this.mat[1] = xy + wz;
	this.mat[2] = xz - wy;
	this.mat[3] = 0.0;
	this.mat[4] = xy - wz;
	this.mat[5] = 1.0 - (xx + zz);
	this.mat[6] = yz + wx;
	this.mat[7] = 0.0;
	this.mat[8] = xz + wy;
	this.mat[9] = yz - wx;
	this.mat[10] = 1.0 - (xx + yy);
	this.mat[11] = 0.0;
	this.mat[12] = v[0];
	this.mat[13] = v[1];
	this.mat[14] = v[2];
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromRotationTranslationScale = function (q, v, s) 
{
	// Quaternion math
	var x = q.vec[0], y = q.vec[1], z = q.vec[2], w = q.vec[3],
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, xy = x * y2, xz = x * z2,
		yy = y * y2, yz = y * z2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2,
		sx = s.vec[0], sy = s.vec[1], sz = s.vec[2];
	this.mat[0] = (1.0 - (yy + zz)) * sx;
	this.mat[1] = (xy + wz) * sx;
	this.mat[2] = (xz - wy) * sx;
	this.mat[3] = 0.0;
	this.mat[4] = (xy - wz) * sy;
	this.mat[5] = (1.0 - (xx + zz)) * sy;
	this.mat[6] = (yz + wx) * sy;
	this.mat[7] = 0.0;
	this.mat[8] = (xz + wy) * sz;
	this.mat[9] = (yz - wx) * sz;
	this.mat[10] = (1.0 - (xx + yy)) * sz;
	this.mat[11] = 0.0;
	this.mat[12] = v[0];
	this.mat[13] = v[1];
	this.mat[14] = v[2];
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromRotationTranslationScaleOrigin = function (q, v, s, o) 
{
	// Quaternion math
	var x = q.vec[0], y = q.vec[1], z = q.vec[2], w = q.vec[3],
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, xy = x * y2, xz = x * z2,
		yy = y * y2, yz = y * z2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2,
		sx = s.vec[0], sy = s.vec[1], sz = s.vec[2],
		ox = o.vec[0], oy = o.vec[1], oz = o.vec[2];
	this.mat[0] = (1.0 - (yy + zz)) * sx;
	this.mat[1] = (xy + wz) * sx;
	this.mat[2] = (xz - wy) * sx;
	this.mat[3] = 0.0;
	this.mat[4] = (xy - wz) * sy;
	this.mat[5] = (1.0 - (xx + zz)) * sy;
	this.mat[6] = (yz + wx) * sy;
	this.mat[7] = 0.0;
	this.mat[8] = (xz + wy) * sz;
	this.mat[9] = (yz - wx) * sz;
	this.mat[10] = (1.0 - (xx + yy)) * sz;
	this.mat[11] = 0.0;
	this.mat[12] = v.vec[0] + ox - (this.mat[0] * ox + this.mat[4] * oy + this.mat[8] * oz);
	this.mat[13] = v.vec[1] + oy - (this.mat[1] * ox + this.mat[5] * oy + this.mat[9] * oz);
	this.mat[14] = v.vec[2] + oz - (this.mat[2] * ox + this.mat[6] * oy + this.mat[10] * oz);
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.fromQuat = function (q) 
{
	var x = this.mat[0], y = this.mat[1], z = this.mat[2], w = this.mat[3],
		x2 = x + x, y2 = y + y, z2 = z + z,
		xx = x * x2, yx = y * x2, yy = y * y2,
		zx = z * x2, zy = z * y2, zz = z * z2,
		wx = w * x2, wy = w * y2, wz = w * z2;
	this.mat[0] = 1.0 - yy - zz;
	this.mat[1] = yx + wz;
	this.mat[2] = zx - wy;
	this.mat[3] = 0.0;
	this.mat[4] = yx - wz;
	this.mat[5] = 1.0 - xx - zz;
	this.mat[6] = zy + wx;
	this.mat[7] = 0.0;
	this.mat[8] = zx + wy;
	this.mat[9] = zy - wx;
	this.mat[10] = 1.0 - xx - yy;
	this.mat[11] = 0.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = 0.0;
	this.mat[15] = 1.0;
	return this;
};
Camel.Mx44.prototype.frustum = function (left, right, bottom, top, near, far) 
{
	var rl = 1 / (right - left),
		tb = 1 / (top - bottom),
		nf = 1 / (near - far);
	return new Camel.Mx44((near * 2.0) * rl, 0.0, 0.0, 0.0, 
						  0.0, (near * 2) * tb, 0.0, 0.0, 
						  (right + left) * rl, (top + bottom) * tb, (far + near) * nf, -1.0, 
						  0.0, 0.0, (far * near * 2) * nf, 0.0);
};
Camel.Mx44.prototype.toFrustum = function(left, right, bottom, top, near, far) 
{
	var rl = 1 / (right - left),
		tb = 1 / (top - bottom),
		nf = 1 / (near - far);
	this.mat[0] = (near * 2) * rl;
	this.mat[1] = 0.0;
	this.mat[2] = 0.0;
	this.mat[3] = 0.0;
	this.mat[4] = 0.0;
	this.mat[5] = (near * 2) * tb;
	this.mat[6] = 0.0;
	this.mat[7] = 0.0;
	this.mat[8] = (right + left) * rl;
	this.mat[9] = (top + bottom) * tb;
	this.mat[10] = (far + near) * nf;
	this.mat[11] = -1.0;
	this.mat[12] = 0.0;
	this.mat[13] = 0.0;
	this.mat[14] = (far * near * 2) * nf;
	this.mat[15] = 0.0;
	return this;
};
Camel.Mx44.prototype.frob = function() 
{
	return Math.sqrt(Math.pow(this.mat[0], 2) + 
					 Math.pow(this.mat[1], 2) + 
					 Math.pow(this.mat[2], 2) + 
					 Math.pow(this.mat[3], 2) + 
					 Math.pow(this.mat[4], 2) + 
					 Math.pow(this.mat[5], 2) + 
					 Math.pow(this.mat[6], 2) + 
					 Math.pow(this.mat[7], 2) + 
					 Math.pow(this.mat[8], 2) + 
					 Math.pow(this.mat[9], 2) + 
					 Math.pow(this.mat[10], 2) + 
					 Math.pow(this.mat[11], 2) + 
					 Math.pow(this.mat[12], 2) + 
					 Math.pow(this.mat[13], 2) + 
					 Math.pow(this.mat[14], 2) + 
					 Math.pow(this.mat[15], 2) );
};
Camel.Mx44.prototype.toString = function() 
{
	return 'mat4('+this.vec[0]+', '+this.vec[1]+', '+this.vec[2]+', '+this.vec[3]+', '+this.vec[4]+', '+this.vec[5]+', '+this.vec[6]+', '+this.vec[7]+', '+this.vec[8]+', '+this.vec[9]+', '+this.vec[10]+', '+this.vec[11]+', '+this.vec[12]+', '+this.vec[13]+', '+this.vec[14]+', '+this.vec[15]+')';
};
Camel.Mx44.prototype.instanceOf = function() 
{
	return Camel.Mx44.toString();
};
Camel.Mx44.toString = function() 
{
	return 'Camel.Mx44';
};

/**
 * The Perspective of Camel
 */
Camel.Perspective = function(angle, aspect, near, far)
{
	this.mat = new Float32Array(16);
	this.initialize(angle, aspect, near, far);
};
Camel.Perspective.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Perspective.prototype.integrate = function(angle, aspect, near, far) 
{
	var tan = Math.tan(Math.degToRad(0.5*angle)) , 
		A = -(far+near)/(far-near) , 
		B = (-2*far*near)/(far-near);
	for(var i=0;i<16;i++)
		if(i==0) this.mat[i] = 0.5/tan;
		else if(i==5) this.mat[i] = 0.5*aspect/tan;	
		else if(i==10) this.mat[i] = A;	
		else if(i==11) this.mat[i] = -1;
		else if(i==14) this.mat[i] = B;
		else this.mat[i] = 0.0;
	return this;
};
Camel.Perspective.prototype.initialize = Camel.Perspective.prototype.integrate;
Camel.Perspective.prototype.set = Camel.Perspective.prototype.integrate;

/**
 * The Orthographic of Camel
 */
Camel.Orthographic = function(left, top, right, bottom, near, far) 
{
	this.mat = new Float32Array(16);
	this.integrate(left, top, right, bottom, near, far);
};
Camel.Orthographic.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Orthographic.prototype.integrate = function(left, top, right, bottom, near, far) 
{
	for(var i=0;i<16;i++)
		if(i==0) this.mat[i] = 1 / (right-left);
		else if(i==5) this.mat[i] = 1 / (bottom-top);	
		else if(i==10) this.mat[i] =-1 / (far-near);	
		else if(i==12||i==13||i==14) this.mat[i] = -1;
		else if(i==15) this.mat[i] = 1;
		else this.mat[i] = 0.0;
	return this;
};
Camel.Orthographic.prototype.initialize = Camel.Orthographic.prototype.integrate;
Camel.Orthographic.prototype.set = Camel.Orthographic.prototype.integrate;

/**
 * The Camera of Camel
 */
Camel.Camera = function(eye, look, up) 
{
	this.eye = eye.loadVecFloat();		//: Camel::Vec3
	this.look = look.loadVecFloat();	//: Camel::Vec3 
	this.up = up.loadVecFloat(); 		//: Camel::Vec3
	this.mat = new Float32Array(16);
	this.integrate();
}; 
Camel.Camera.prototype.loadMXFloat = function() 
{
	return this.mat;
};
Camel.Camera.prototype.identity = function() 
{
	this.mat[0]=1.0;	this.mat[1]=0.0; this.mat[2]=0.0; this.mat[3]=0.0;
	this.mat[4]=0.0;	this.mat[5]=1.0; this.mat[6]=0.0; this.mat[7]=0.0;
	this.mat[8]=0.0;	this.mat[9]=0.0; this.mat[10]=1.0; this.mat[11]=0.0;
	this.mat[12]=0.0; this.mat[13]=0.0; this.mat[14]=0.0; this.mat[15]=1.0;
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

	this.mat[0] = x0;
	this.mat[1] = y0;
	this.mat[2] = z0;
	this.mat[3] = 0;
	this.mat[4] = x1;
	this.mat[5] = y1;
	this.mat[6] = z1;
	this.mat[7] = 0;
	this.mat[8] = x2;
	this.mat[9] = y2;
	this.mat[10] = z2;
	this.mat[11] = 0;
	this.mat[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	this.mat[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	this.mat[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	this.mat[15] = 1;
	return this;
};

/**
 * The HttpRequest class
 */
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
				
				if(this.particleHolder[i].maskart != UNSET) 
					renderer.gl.uniform4fv(renderer.maskart, this.particleHolder[i].maskart.loadVecFloat());
				
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
				
				CAMEL_STRIKE_ATTRIB = 4*(3+3+2);
				CAMEL_OFFSET_ATTRIB = 3*4;
				switch(renderer.inputLayout) 
				{
					case CAMEL_IL_TWO :
						renderer.gl.enableVertexAttribArray(renderer.positionIn);
						renderer.gl.enableVertexAttribArray(renderer.texCoordIn);
						CAMEL_STRIKE_ATTRIB = 4*(3+2);
						break;
					case CAMEL_IL_THREE :
					default:
						renderer.gl.enableVertexAttribArray(renderer.positionIn);
						renderer.gl.enableVertexAttribArray(renderer.normalIn);
						renderer.gl.enableVertexAttribArray(renderer.texCoordIn);
						renderer.gl.vertexAttribPointer(renderer.normalIn, 3, renderer.gl.FLOAT, false, CAMEL_STRIKE_ATTRIB, CAMEL_OFFSET_ATTRIB);
						CAMEL_STRIKE_ATTRIB = 4*(3+3+2);
						CAMEL_OFFSET_ATTRIB = (3+3)*4;
						break;
				};
				
				renderer.gl.vertexAttribPointer(renderer.positionIn, 3, renderer.gl.FLOAT, false,CAMEL_STRIKE_ATTRIB,0);
				renderer.gl.vertexAttribPointer(renderer.texCoordIn, 2, renderer.gl.FLOAT, false,CAMEL_STRIKE_ATTRIB,CAMEL_OFFSET_ATTRIB);

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
			continue;
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

Camel.Transform = function() 
{
	this.mx = new Float32Array(16);
	
	this.loadMXFloat = function() {	return this.mx;	};
	
	this.translate = function(x, y, z) { this.mx[12]+=x;	this.mx[13]+=y;	this.mx[14]+=z; };
	this.translateX = function(d) {	this.mx[12]+=d; };
	this.translateY = function(d) {	this.mx[13]+=d; };
	this.translateZ = function(d) {	this.mx[14]+=d;	};
	
	this.scale = function(x, y, z) { this.mx[0]=x; this.mx[5]=y; this.mx[10]=z;	};
	this.scaleX = function(value) {	this.mx[0]=value; };
	this.scaleY = function(value) {	this.mx[5]=value; };
	this.scaleZ = function(value) {	this.mx[10]=value;};
	
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
	
	this.identity = function() 
	{
		for(var i=0;i<16;i++) 
		{
			if(i==0||i==5||i==10||i==15) this.mx[i]=1.0;
			else this.mx[i]=0.0;
		}
		return this;
	};
	
	this.identity();
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
	this.__proto__ = new Camel.Transform();	
	this.__proto__.__proto__ = new Camel.Geometry();
	this.__proto__.__proto__.__proto__ = new Camel.Material();
	
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

Camel.Cell = function(size) 
{
	this.__proto__ = new Camel.Particle();

	this.createCell(size);
};

Camel.Model = function(assetModel) 
{
	this.__proto__ = new Camel.Particle();
	
	this.setModel(assetModel);
};