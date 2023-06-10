import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { DarkModeToggle } from './DarkModeToggle';
import Logo from './Logo';

export default function Scene() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <Suspense fallback={null}>
        <Logo scale={[0.001, 0.001, 0.0005]} rotation={[0.2, 0, 0.05]} />
        <spotLight intensity={1} position={[1, 5, 3]} />
      </Suspense>

      <DarkModeToggle scale={0.001} />
      <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
    </Canvas>
  );
}
