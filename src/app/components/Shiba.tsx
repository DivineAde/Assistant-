"use client"

import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from 'three';
import styles from './Shiba.module.css';

function MeshComponent() {
  const fileUrl = '/shiba/scene.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [bounceValue, setBounceValue] = useState(0); // To control the bouncing animation

  useFrame(() => {
    // Update the position of the mesh to make it bounce
    mesh.current.position.y = Math.sin(bounceValue) * 0.2; // Adjust the amplitude (0.2) as needed
    setBounceValue((prevValue) => prevValue + 0.09); // Adjust the speed of the bounce as needed
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className='flex justify-center items-center h-screen absolute bottom-[-10%] left-0'>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls />
        <ambientLight />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
