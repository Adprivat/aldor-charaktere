import React, { useRef } from 'react';
import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SimpleCrystal: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#ffa726"
        emissive="#ff6b35"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const SimpleCrystal3D: React.FC<{ height?: string }> = ({ height = "400px" }) => {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffa726" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
        
        <SimpleCrystal />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default SimpleCrystal3D;
