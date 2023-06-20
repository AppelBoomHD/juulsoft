'use client';

import { Canvas } from '@react-three/fiber';

import Scene from './Scene';

export default function GlobalCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 25 }}>
      <Scene />
    </Canvas>
  );
}
