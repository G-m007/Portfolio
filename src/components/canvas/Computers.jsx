import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';

function MacBookModel() {
  const { scene } = useGLTF('Mac/scene.gltf'); // Update the path to your .gltf file
  const modelRef = useRef();

  // Rotate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the speed of rotation
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[4, 4, 4]} position={[0, -1, 0]} />;
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <MacBookModel />
        <Environment preset="studio" />

      </Canvas>
    </div>
  );
}

export default App;
