import { Suspense } from 'react';
import { Scroll, Stars } from '@react-three/drei';

import { DarkModeToggle } from './DarkModeToggle';
import Experience from './Experience';
import Logo from './Logo';
import Mouse from './Mouse';
import Projects from './Projects';
import Skills from './Skills';

export default function Scene() {
  return (
    <>
      <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
      <DarkModeToggle scale={0.5} />
      <Scroll>
        <Stars factor={6} />
        <Suspense fallback={null}>
          <Logo scale={[0.001, 0.001, 0.0005]} position={[-1.25, 0, 0]} />
        </Suspense>
      </Scroll>
      <Scroll html>
        <Mouse />
        <Projects />
        <Skills />
        <Experience />
      </Scroll>
    </>
  );
}
