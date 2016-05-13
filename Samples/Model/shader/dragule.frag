precision mediump float;
uniform sampler2D sampler;
varying vec2 texCoordOut;
varying vec3 normalOut;
varying vec3 viewOut;

const vec3 source_ambient_color = vec3(1.0, 1.0, 1.0);
const vec3 source_diffuse_color = vec3(1.0, 1.0, 1.0);
const vec3 source_specular_color = vec3(1.0, 1.0, 1.0);
const vec3 source_direction = vec3(0.0, 0.0, 1.0);

const vec3 mat_ambient_color = vec3(0.3, 0.3, 0.3);
const vec3 mat_diffuse_color = vec3(1.0, 1.0, 1.0);
const vec3 mat_specular_color = vec3(1.0, 1.0, 1.0);
const float mat_shininess = 10.0;
const float mat_alpha = 0.5;

void main(void) 
{
    vec3 color = vec3(texture2D(sampler, texCoordOut));
    vec3 ambient = source_ambient_color * mat_ambient_color;
    vec3 diffuse = source_diffuse_color * mat_diffuse_color * max(0.0, dot(normalOut, source_direction));
    vec3 Eye = normalize(viewOut);
    vec3 N = reflect(source_direction, normalOut);
    vec3 specular = source_specular_color * mat_specular_color * pow(max(dot(N, Eye), 0.0), mat_shininess);
    vec3 light = ambient + diffuse + specular;
    gl_FragColor = vec4(color * light, mat_alpha);
}