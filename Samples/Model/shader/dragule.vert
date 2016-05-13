attribute vec3 positionIn;
attribute vec3 normalIn;
attribute vec2 texCoordIn;
uniform mat4 pMatrix;
uniform mat4 vMatrix;
uniform mat4 mMatrix;
varying vec2 texCoordOut;
varying vec3 normalOut;
varying vec3 viewOut;

void main(void) 
{
    gl_Position = pMatrix * vMatrix * mMatrix * vec4(positionIn, 1.0);
    texCoordOut = texCoordIn;
    normalOut = vec3(mMatrix * vec4(normalIn, 0.0));
    viewOut = vec3(vMatrix * mMatrix * vec4(positionIn, 1.0));
}