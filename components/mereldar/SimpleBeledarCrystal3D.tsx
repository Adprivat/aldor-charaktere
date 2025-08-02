import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CrystalCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#ff6b35"
        emissive="#ffa726"
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const BeledarCrystal3D: React.FC<{ height?: string }> = ({ height = "400px" }) => {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffa726" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />
        
        <CrystalCore />
      </Canvas>
    </div>
  );
};

export default BeledarCrystal3D;
