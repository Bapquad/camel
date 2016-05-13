precision mediump float;
uniform sampler2D sampler;
varying vec2 texCoordOut;
void main(void) 
{
    gl_FragColor = texture2D(sampler, texCoordOut);
}