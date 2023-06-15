'use client';

import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';

export default function GlobalCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 25 }}>
      <ScrollControls pages={4} damping={0.1}>
        <Scene />
      </ScrollControls>
    </Canvas>
  );
}
