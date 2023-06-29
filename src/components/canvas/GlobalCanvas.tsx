'use client';

import { GlobalContextType } from '@/contexts/GlobalContext';
import { Canvas } from '@react-three/fiber';

import Scene from './Scene';

export default function GlobalCanvas(props: GlobalContextType) {
  return (
    <Canvas orthographic camera={{ zoom: 20 }}>
      <Scene {...props} />
    </Canvas>
  );
}
