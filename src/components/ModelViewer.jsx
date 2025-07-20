import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, OrbitControls, Environment, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ModelViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Hover scale and click spin animation
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Scale effect on hover
      const targetScale = hovered ? 1.1 : 1;
      modelRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      // Rotation effect on click
      if (clicked) {
        modelRef.current.rotation.y += delta * 2;
      }
    }
  });

  // Optional: brighten material manually (if it's still too dark)
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.roughness = 0.4;
        child.material.metalness = 0.2;
        // Optional override for base color
        // child.material.color.set('#dddddd');
      }
    });
  }, [scene]);

  return (
    <>
      {/* Environment for realistic PBR reflections */}
      <Environment preset="sunset" background={false} />
      <Center>
      <primitive
        ref={modelRef}
        object={scene}
        onPointerOver={() => setHovered(false)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      />
      </Center>
      <OrbitControls autoRotate autoRotateSpeed={10} enableZoom={false} />
    </>
  );
};

export default ModelViewer;
