import { Suspense } from 'react';
import { Scroll, ScrollControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { DarkModeToggle } from './DarkModeToggle';
import Logo from './Logo';
import Mouse from './Mouse';
import Projects from './Projects';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 25 }}>
      <ScrollControls pages={2} damping={0.1}>
        <Scroll>
          <Stars factor={6} />
          <Suspense fallback={null}>
            <Logo scale={[0.001, 0.001, 0.0005]} rotation={[0.2, 0, 0.05]} />
          </Suspense>
        </Scroll>
        <Scroll html>
        <Mouse />
        <Projects />
        <Skills />
        <Experience />
        </Scroll>

        <spotLight intensity={1} position={[1, 5, 3]} />
        <DarkModeToggle scale={0.001} />
        <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
      </ScrollControls>
    </Canvas>
  );
}
