import { Suspense } from 'react';
import { DarkModeToggle } from '@/components/canvas/DarkModeToggle';
import Logo from '@/components/canvas/Logo';
import Contact from '@/components/dom/Contact';
import Mouse from '@/components/dom/Mouse';
import Projects from '@/components/dom/Projects';
import Skills from '@/components/dom/Skills';
import { GlobalContext, GlobalContextType } from '@/contexts/GlobalContext';
import { Scroll, ScrollControls, Stars } from '@react-three/drei';

export default function Scene(props: GlobalContextType) {
  return (
    <ScrollControls pages={4} damping={0.1}>
      <hemisphereLight name="Default Ambient Light" intensity={1} color="#FFFFFF" />
      <DarkModeToggle />
      <Scroll>
        <group position={[0, -60, -10]}>
          <Stars factor={2} radius={30} />
        </group>
        <Suspense fallback={null}>
          <Logo scale={[0.005, 0.005, 0.0025]} position={[-6.25, 0, 0]} />
        </Suspense>
      </Scroll>
      <Scroll html>
        <GlobalContext.Provider value={props}>
          <div className="h-[calc(100dvh)] w-[calc(100dvw)]">
            <Mouse />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </GlobalContext.Provider>
      </Scroll>
    </ScrollControls>
  );
}
