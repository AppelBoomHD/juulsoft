import { Suspense } from 'react';
import Logo from '@/components/canvas/Logo';
import Experience from '@/components/dom/Experience';
import Mouse from '@/components/dom/Mouse';
import Projects from '@/components/dom/Projects';
import Skills from '@/components/dom/Skills';
import { Scroll, Stars } from '@react-three/drei';

import { DarkModeToggle } from './DarkModeToggle';

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
