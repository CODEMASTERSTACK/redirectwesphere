import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GradientMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color('#ff6b6b'),
    color2: new THREE.Color('#4ecdc4'),
    color3: new THREE.Color('#45b7d1'),
    color4: new THREE.Color('#96ceb4'),
    color5: new THREE.Color('#f093fb'),
    color6: new THREE.Color('#f5576c'),
    intensity: 1.0,
    distortion: 0.8,
    vignette: 0.6,
    glow: 0.4,
    speed: 1.0,
    waveAmplitude: 0.3,
    noiseScale: 2.0,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform vec3 color4;
    uniform vec3 color5;
    uniform vec3 color6;
    uniform float intensity;
    uniform float distortion;
    uniform float vignette;
    uniform float glow;
    uniform float speed;
    uniform float waveAmplitude;
    uniform float noiseScale;
    
    varying vec2 vUv;
    
    // Improved noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Smooth noise with better interpolation
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // Smoothstep5
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    // Fractal Brownian Motion with more octaves
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for (int i = 0; i < 8; i++) {
        value += amplitude * smoothNoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      
      return value;
    }
    
    // Ridged noise for more interesting patterns
    float ridgedNoise(vec2 p) {
      return 1.0 - abs(fbm(p));
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Create complex animated distortion
      float distortionX = fbm(uv * noiseScale + time * speed * 0.5) * distortion;
      float distortionY = fbm(uv * noiseScale + time * speed * 0.3 + 100.0) * distortion;
      float ridgedDistortion = ridgedNoise(uv * 1.5 + time * speed * 0.2) * distortion * 0.5;
      
      uv.x += (distortionX + ridgedDistortion) * waveAmplitude;
      uv.y += (distortionY + ridgedDistortion) * waveAmplitude;
      
      // Create multiple wave patterns with different frequencies
      float wave1 = sin(uv.x * 3.0 + time * speed * 0.8) * 0.5 + 0.5;
      float wave2 = sin(uv.y * 2.0 + time * speed * 0.6) * 0.5 + 0.5;
      float wave3 = sin((uv.x + uv.y) * 1.5 + time * speed * 0.4) * 0.5 + 0.5;
      float wave4 = sin(uv.x * 5.0 - uv.y * 3.0 + time * speed * 0.7) * 0.5 + 0.5;
      float wave5 = sin(length(uv - 0.5) * 8.0 + time * speed * 0.9) * 0.5 + 0.5;
      
      // Create radial waves
      float radialWave = sin(length(uv - 0.5) * 6.0 + time * speed * 0.5) * 0.5 + 0.5;
      
      // Mix colors based on wave patterns with more complexity
      vec3 color = mix(
        mix(
          mix(color1, color2, wave1),
          mix(color3, color4, wave2),
          wave3
        ),
        mix(
          mix(color5, color6, wave4),
          mix(color1, color3, radialWave),
          wave5
        ),
        fbm(uv * 2.0 + time * speed * 0.1)
      );
      
      // Add multiple layers of noise for texture
      float noiseValue1 = fbm(uv * 4.0 + time * speed * 0.2);
      float noiseValue2 = fbm(uv * 8.0 + time * speed * 0.15);
      float noiseValue3 = ridgedNoise(uv * 6.0 + time * speed * 0.1);
      
      color = mix(color, color * 1.3, noiseValue1 * 0.2);
      color = mix(color, color * 0.8, noiseValue2 * 0.1);
      color = mix(color, color * 1.1, noiseValue3 * 0.15);
      
      // Create enhanced vignette effect
      float dist = distance(uv, vec2(0.5));
      float vignetteEffect = 1.0 - smoothstep(0.0, vignette, dist);
      vignetteEffect = pow(vignetteEffect, 1.5); // More dramatic vignette
      
      // Add pulsing glow effect
      float glowEffect = 1.0 + glow * (sin(time * speed * 2.0) * 0.5 + 0.5) * 0.2;
      glowEffect += glow * sin(time * speed * 3.0) * 0.1;
      
      // Apply all effects
      color *= intensity * vignetteEffect * glowEffect;
      
      // Add dynamic color shifting with more complexity
      color.r += sin(time * speed * 0.5) * 0.15 + cos(time * speed * 0.3) * 0.05;
      color.g += cos(time * speed * 0.7) * 0.15 + sin(time * speed * 0.4) * 0.05;
      color.b += sin(time * speed * 0.3) * 0.15 + cos(time * speed * 0.6) * 0.05;
      
      // Add subtle chromatic aberration
      float aberration = sin(time * speed * 0.8) * 0.01;
      color.r += aberration;
      color.b -= aberration;
      
      // Final color correction
      color = pow(color, vec3(0.8)); // Gamma correction
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

function GradientPlane({ 
  intensity = 1.0,
  distortion = 0.8,
  vignette = 0.6,
  glow = 0.4,
  speed = 1.0,
  waveAmplitude = 0.3,
  noiseScale = 2.0,
  colors = {}
}) {
  const materialRef = useRef();
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
      // Animate some properties for more dynamic effects
      materialRef.current.speed = speed + Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
      materialRef.current.glow = glow + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <gradientMaterial 
        ref={materialRef}
        intensity={intensity}
        distortion={distortion}
        vignette={vignette}
        glow={glow}
        speed={speed}
        waveAmplitude={waveAmplitude}
        noiseScale={noiseScale}
        color1={new THREE.Color(colors.color1 || '#ff6b6b')}
        color2={new THREE.Color(colors.color2 || '#4ecdc4')}
        color3={new THREE.Color(colors.color3 || '#45b7d1')}
        color4={new THREE.Color(colors.color4 || '#96ceb4')}
        color5={new THREE.Color(colors.color5 || '#f093fb')}
        color6={new THREE.Color(colors.color6 || '#f5576c')}
      />
    </mesh>
  );
}

const WebGLBackground = ({ 
  className = "", 
  intensity = 1.0,
  distortion = 0.8,
  vignette = 0.6,
  glow = 0.4,
  speed = 1.0,
  waveAmplitude = 0.3,
  noiseScale = 2.0,
  colors = {
    color1: '#ff6b6b',
    color2: '#4ecdc4', 
    color3: '#45b7d1',
    color4: '#96ceb4',
    color5: '#f093fb',
    color6: '#f5576c'
  }
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <GradientPlane 
          intensity={intensity}
          distortion={distortion}
          vignette={vignette}
          glow={glow}
          speed={speed}
          waveAmplitude={waveAmplitude}
          noiseScale={noiseScale}
          colors={colors}
        />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
