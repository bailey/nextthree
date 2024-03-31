"use client"; 
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

type BoxProps = {
  position?: [number, number, number];
  // You can add more props here if needed
};

const Box: React.FC<BoxProps> = (props) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const fileUrl = "/assets/pusheen.gltf";
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={ hovered ? 2.2 : 2 }
      scale={ 2.75 }
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Box;
