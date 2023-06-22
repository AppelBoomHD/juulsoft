'use client';

import { Canvas } from '@react-three/fiber';

import Scene from './Scene';

export default function GlobalCanvas() {
  return (
    <Canvas orthographic camera={{ zoom: 20 }}>
      <Scene />
    </Canvas>
  );
}
