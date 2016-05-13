attribute vec3 positionIn;
attribute vec2 texCoordIn;
uniform mat4 pMatrix;
uniform mat4 vMatrix;
uniform mat4 mMatrix;
varying vec2 texCoordOut;
void main(void) 
{
    gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);
    texCoordOut = texCoordIn;
}