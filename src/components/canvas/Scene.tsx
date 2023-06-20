import { Suspense } from 'react';
import { GlobalContext } from '@/app/page';
import Logo from '@/components/canvas/Logo';
import Experience from '@/components/dom/Experience';
import Projects from '@/components/dom/Projects';
import Skills from '@/components/dom/Skills';
import { Scroll, ScrollControls, Stars, useContextBridge } from '@react-three/drei';

import Mouse from '../dom/Mouse';
import { DarkModeToggle } from './DarkModeToggle';

export default function Scene() {
  const ContextBridge = useContextBridge(GlobalContext);

  return (
    <ScrollControls pages={4} damping={0.1}>
      <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
      <DarkModeToggle scale={0.5} />
      <Scroll>
        <Stars factor={6} />
        <Suspense fallback={null}>
          <Logo scale={[0.001, 0.001, 0.0005]} position={[-1.25, 0, 0]} />
        </Suspense>
      </Scroll>
      <Scroll html>
        <ContextBridge>
          <Mouse />
          <Projects />
          <Skills />
          <Experience />
        </ContextBridge>
      </Scroll>
    </ScrollControls>
  );
}
